'use strict';

let {assert} = require('chai');
const useMocha = require('..');

describe('useMocha', () => {
    it('needs tests', () => {
        assert.equal(useMocha.add(1, 2), 3)
    });
    it('needs tests', () => {
        assert.equal(useMocha.add(1, 2), 4)
    });
});
