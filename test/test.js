var test = require('tap').test
var toUInt64 = require('../')
var fromUInt32 = require('from-unsigned-int32')

test('should return correct buffer for value less then ((2 ^ 32) - 1)', function (t) {
  var buffr = toUInt64((Math.pow(2, 32) - 1))
  t.type(buffr, Buffer)
  t.equal(buffr.length, 8)
  t.equal(fromUInt32.fromUInt32Sync(buffr, 4), (Math.pow(2, 32) - 1))
  t.end()
})

test('should return correct buffer for value more then ((2 ^ 32) - 1)', function (t) {
  var buffr = toUInt64(0x1ffffffff)
  t.type(buffr, Buffer)
  t.equal(buffr.length, 8)
  var bits = [0, 0, 0, 1, 255, 255, 255, 255]

  for (var i = 0; i < bits.length; i++) {
    t.equal(bits[i], buffr[i])
  }
  t.end()
})
