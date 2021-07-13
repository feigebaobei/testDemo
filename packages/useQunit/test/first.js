'use strict';

const useQunit = require('..')
QUnit.module('useQunit.add')

QUnit.test('add two numbers', assert => {
    assert.equal(useQunit.add(1, 2), 3)
})
