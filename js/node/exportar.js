console.log(module.exports === this)
console.log(exports === module.exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = {a:2}
console.log(this)
console.log(module.exports)
console.log(exports)