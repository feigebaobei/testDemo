'use strict';

const usejasmine = require('..');

describe('useJasmine', () => {
    it('needs tests', () => {
        expect(usejasmine.add(1, 2)).toEqual(3)
    });
    it('needs tests 2', () => {
        expect(usejasmine.add(1, 2)).toEqual(4)
    });
});
