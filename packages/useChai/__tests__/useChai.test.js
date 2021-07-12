'use strict';

const usechai = require('..');
let {assert} = require('chai')

assert.equal(usechai.add(1, 2), 3)
assert.equal(usechai.add(1, 2), 4)
