'use strict';

const useava = require('..');
let test = require('ava')

// test('foo', t => {
//     t.pass();
// });

// test('bar', async t => {
//     const bar = Promise.resolve('bar');
//     t.is(await bar, 'bar');
// });

test('add', (t) => {
    // t：执行对象。包含断言。
    t.is(useava.add(1, 2), 3, 'show error of add()')
})
test('add 2', (t) => {
    t.is(useava.add(1, 2), 4, 'show error of add() 2')
})