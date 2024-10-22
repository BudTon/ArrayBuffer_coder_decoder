/* eslint-disable no-undef */
import { ArrayBufferConverter } from '../ArrayBufferConverter.class.js';

test("Test ArrayBufferConverter.class methods load()", () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10, "5":0}}}';
    const coder = new ArrayBufferConverter('First', [], '', data)
    coder.load()
    coder.toString()
    const result = [coder.buffer, coder.text]
    expect(result).toEqual([[], data]);
});

test("Test ArrayBufferConverter.class methods toString()", () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10, "5":0}}}';
    const coder = new ArrayBufferConverter('First', [], '', data)
    coder.data = '{"data":{"user":{"id":1,"name":"Hitman","level":10000}}}';
    coder.load()
    expect(coder.text).toBe('');
});
