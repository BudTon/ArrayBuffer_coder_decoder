import { ArrayBufferConverter } from "./js/ArrayBufferConverter.class"
// const { ArrayBufferConverter } = require('./js/ArrayBufferConverter.class.js');

const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10, "5":0}}}';
const coder = new ArrayBufferConverter('First', [], '', data)
coder.load()
coder.toString()
console.log(coder, '----coder');

coder.data = '{"data":{"user":{"id":1,"name":"Hitman","level":10000}}}';
coder.load()
console.log(coder, '----coder');