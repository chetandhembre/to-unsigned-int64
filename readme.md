[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

convert number to 64 bit buffer (size 8).

Currently only support [big endian](https://en.wikipedia.org/wiki/Endianness#Big-endian).

also checkout [to-unsigned-int32](https://github.com/chetandhembre/to-unsigned-int32).


## Install

```
npm i to-unsigned-int64
```
## Usage

```js
var toUInt64 = require('to-unsigned-int64')

console.log(toUInt64(0x1ffffffff)) //<Buffer 00 00 00 01 ff ff ff ff>

```

`n` can be number in any base.

returns buffer with length 8.

## licence

MIT
