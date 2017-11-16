/**
 * twitter_snowflake - qill
 * snowflake结构如下
 * 0- 0000000000 0000000000 0000000000 0000000000 0 - 00000 - 00000 - 000000000000
 * 1位标识，由于最高为是符号为，id是正数所以最高为是0
 * 41位时间戳储存时间戳的差值 41位时间戳可以用69年， T = (1L << 41) / (1000L * 60 * 60 * 24 * 365) = 69 <br>
 * 10位的数据机器位，可以部署在1024个节点，包括5为datacenterId和5位workerId
 * 12位序列，毫秒内的计数，12为的计数顺序号支持每个节点每毫秒（同一机器，同一时间戳）产生4096个ID序号
 * 加起来刚好64位，为一个LONG型
 * snowflake的优点是，整体上按照时间自增排序，并且整个分布式系统内不会产生id碰撞（有数据中心id和机器id作区分），并且效率较高，经测试，snowflake每秒能够产生26万个左右的的ID
 * 本系统的snowflake的机器应该不会太多，所以减少了2位机器位，并把这些机器位分配到时间位和毫秒内计数位。
 */
'use strict'
const StringBinaryService = require('./string_binary')

/**
 * 私有方法: 阻塞到下一个毫秒，直到获得新的时间戳
 * @param lastTimestamp 上次生成id的时间戳
 * @return 当前时间戳
 */
function tilNextMillis (lastTimestamp) {
  let timestamp = new Date().getTime()
  while (timestamp <= lastTimestamp) {
    timestamp = new Date().getTime()
  }
  return timestamp
}

/** 私有变量 */
/** 工作机器id（0-31） */
let workerId

/** 数据中心id（0-31） */
let datacenterId

/** 毫秒内序列（0-4095） */
let sequence = 0

/** 上次生成id的时间戳 */
let lastTimestamp = -1

module.exports = {
  SnowflakeIdWorker: (wId = 0, datId = 0) => {
    // ========================================= Fields ===================================================
    /** 开始时间戳 （2017-10-10） */
    const twepoch = 1507618070000

    /** 机器所占的位数 */
    const workerIdBits = 4

    /** 数据标识所占的位数 */
    const datacenterIdBits = 4

    /** 支持最大机器id，结果是31（这个移位算法可以很快计算出几位二进制数所能表示的最大的十进制数） */
    const maxWorkerId = -1 ^ (-1 << workerIdBits)

    /** 支持最大数据标识id，结果是31 */
    const maxDatacenterId = -1 ^ (-1 << datacenterIdBits)

    /** 序列在id中占的位数 */
    const sequenceBits = 13

    /** 时间所占的位数 */
    const timestampBits = 43

    /**
		 * js 不能处理64位长的数，并且若用左移和右移操作都会强行转回32位长
		 * 所以移位操作需要用字符串操作代替
		 */
    // /** 机器id向左移13位 */
    // const workerShift = const sequenceBits;

    // /** 数据标识id向左移17位(13+4) */
    // const datacenterShift = const sequenceBits + const workerIdBits

    // /** 时间戳向左移22位（4+4+13）*/
    // const timestampShift = const sequenceBits + const workerIdBits + const datacenterIdBits;

    /** 生成序列的掩码，这里为8181 (0b1111111111111=0x1fff=8181) */
    const sequenceMask = -1 ^ (-1 << sequenceBits)
    /**
		 * 构造
		 * @param workerId 工作ID（0-31）
		 * @param datacenterId 数据中心ID（0-31）
		 */
    if (wId > maxWorkerId || wId < 0) {
      throw new Error(
        "worker Id can't be greater than" +
          String(maxWorkerId) +
          'or less than 0'
      )
    }
    if (datId > maxDatacenterId || datId < 0) {
      throw new Error(
        "datacenterId Id can't be greater than" +
          String(maxDatacenterId) +
          'or less than 0'
      )
    }
    workerId = wId
    datacenterId = datId

    /**
	 * 获得下一个id
	 * @return snowflakeid
	 */
    let timestamp = new Date().getTime()

    // 如果当前时间小于上一次生成id的时间戳，说明系统始终回退过，这个时候应该抛出异常
    if (timestamp < lastTimestamp) {
      throw new Error(
        'Clock moved backwards.  Refusing to generate id for ' +
          String(lastTimestamp - timestamp) +
          ' milliseconds'
      )
    }

    // 如果是同一时间生成的，则进行毫秒内序列
    if (lastTimestamp === timestamp) {
      sequence = (sequence + 1) & sequenceMask
      // 毫秒内序列溢出
      if (sequence === 0) {
        // 阻塞到下一个毫秒，获得新的时间戳
        timestamp = tilNextMillis(lastTimestamp)
      }
    } else {
      // 时间戳改变，毫秒内序列重置
      sequence = 0
    }

    // 上次生成id的时间戳
    lastTimestamp = timestamp

    // 通过转换字符串的方式把所有的一起组成64位的id
    let binaryId =
      StringBinaryService.GCD(timestamp - twepoch, timestampBits) +
      StringBinaryService.GCD(datacenterId, datacenterIdBits) +
      StringBinaryService.GCD(workerId, workerIdBits) +
      StringBinaryService.GCD(sequence, sequenceBits)
    // 转换成16进制然后返回
    return StringBinaryService.BinaryChange(binaryId)
  }
}
