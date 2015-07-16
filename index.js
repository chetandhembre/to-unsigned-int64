var BN = require('bn.js')
var toUInt32 = require('to-unsigned-int32')

var MAX_UINT = Math.pow(2, 32) - 1

module.exports = function toUInt64 (n) {
  if (n > MAX_UINT || typeof n === 'string') {
    var bytes = new BN(n).toArray()
    while (bytes.length < 8) {
      bytes.unshift(0)
    }
    return new Buffer(bytes)
  }
  return Buffer.concat([toUInt32.toUInt32Sync(0), toUInt32.toUInt32Sync(n)])
}
