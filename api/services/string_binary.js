/**
 * create by qill on 2017-10-10
 * 二进制转换成字符串相关操作
 */
'use strict'
const nconf = require('nconf')
module.exports = {
  /**
   * 与运算两个位都为1时为1其余都为0
   * @param {String} left
   * @param {String} right
   * @return {String} result
	 */
  BinaryAnd: (left, right) => {
    let result = ''
    CheckLenth(left, right)
    for (let i = 0; i < nconf.get('commonIdMathLength'); i++) {
      if (left[i] === '1' && right[i] === '1') {
        result += '1'
      } else {
        result += '0'
      }
    }
    return result
  },

  /**
   * 或操作两个位都为0时位0其余都为1
   * @param {*} left
   * @param {*} right
	 */
  BinaryOr: (left, right) => {
    let result = ''
    CheckLenth(left, right)
    for (let i = 0; i < nconf.get('commonIdMathLength'); i++) {
      if (left[i] === '0' && right[i] === '0') {
        result += '0'
      } else {
        result += '1'
      }
    }
    return result
  },

  /**
   * 异或操作, 位相同时位0，不同时为1
   * @param {String} left
   * @param {String} right
	 */
  BinaryXor: (left, right) => {
    let result = ''
    CheckLenth(left, right)
    for (let i = 0; i < nconf.get('commonIdMathLength'); i++) {
      if (left[i] === right[i]) {
        result += '0'
      } else {
        result += '1'
      }
    }
    return result
  },

  /**
   * 同或操作, 位相同时位1，不同时为0
   * @param {String} left
   * @param {String} right
	 */
  BinarySameOr: (left, right) => {
    let result = ''
    CheckLenth(left, right)
    for (let i = 0; i < nconf.get('commonIdMathLength'); i++) {
      if (left[i] === right[i]) {
        result += '1'
      } else {
        result += '0'
      }
    }
    return result
  },

  /**
   * 非操作
   * @param {String} buff
   * @return {String} result
	 */
  BinaryNot: buff => {
    let result = ''
    if (buff.length !== nconf.get('commonIdMathLength')) {
      throw new Error('invalaid string length')
    }
    for (let i = 0; i < nconf.get('commonIdMathLength'); i++) {
      if (buff[i] === '0') {
        result += '1'
      } else {
        result += '0'
      }
    }
    return result
  },

  /**
   * 二进制转换为十六进制
	 * @param {String} BinaryBuff
   * @return {String} result
	 */
  BinaryChange: BinaryBuff => {
    let subBuff = ''
    let result = ''
    if (parseInt(BinaryBuff.length / 4) !== BinaryBuff.length / 4) {
      throw new Error('BinaryBuff length invlade')
    }
    for (let i = 0; i < nconf.get('commonIdMathLength'); i += 4) {
      // 截取特定长度的
      subBuff = BinaryBuff.substring(i, i + 4)
      if (subBuff === '0000' && result === '') result += ''
      else if (subBuff === '0000') result += '0'
      else if (subBuff === '0001') result += '1'
      else if (subBuff === '0010') result += '2'
      else if (subBuff === '0011') result += '3'
      else if (subBuff === '0100') result += '4'
      else if (subBuff === '0101') result += '5'
      else if (subBuff === '0110') result += '6'
      else if (subBuff === '0111') result += '7'
      else if (subBuff === '1000') result += '8'
      else if (subBuff === '1001') result += '9'
      else if (subBuff === '1010') result += 'a'
      else if (subBuff === '1011') result += 'b'
      else if (subBuff === '1100') result += 'c'
      else if (subBuff === '1101') result += 'd'
      else if (subBuff === '1110') result += 'e'
      else if (subBuff === '1111') result += 'f'
    }
    return result
  },

  /**
	 * 辗转相除法十进制转二进制
   * @param {number} decimalNum
   * @param {number} bitLength
   * @return {String} result
	 */
  GCD: (decimalNum, bitLength) => {
    let result = ''
    let mod
    if (decimalNum === 0) {
      for (let i = 0; i < bitLength; i++) {
        result += '0'
      }
      return result
    }
    while (decimalNum !== 1) {
      mod = decimalNum % 2
      decimalNum = parseInt(decimalNum / 2)
      result = mod.toString() + result
    }
    result = decimalNum.toString() + result
    if (result.length > bitLength) {
      throw new Error('decimalNum too long')
    }
    for (let i = result.length; i < bitLength; i++) {
      result = '0' + result
    }
    return result
  }
}

/**
 * 检测长度
 * @param {String} left
 * @param {String} right
 */
function CheckLenth (left, right) {
  if (left.length !== nconf.get('commonIdMathLength')) {
    throw new Error('invalaid string length')
  }
  if (right.length !== nconf.get('commonIdMathLength')) {
    throw new Error('invalaid string length')
  }
}
