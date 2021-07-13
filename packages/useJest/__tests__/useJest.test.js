'use strict';

const usejest = require('..');

// describe('useJest', () => {
//     it('needs tests');
// });

test('add', () => {
    expect(usejest.add(1, 2)).toEqual(3)
})
test('add 2', () => {
    expect(usejest.add(1, 2)).toEqual(4)
})