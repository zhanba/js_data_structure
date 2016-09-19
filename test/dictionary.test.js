'use strict'

const expect = require('chai').expect;
const Dictionary = require('../src/dictionary.js');

describe('Dictionary', function() {
    let dictionary;

    beforeEach(function() {
        dictionary = new Dictionary();
    });

    describe('new Dictionary', function() {
        it('new', function() {
            expect(dictionary).to.be.instanceof(Dictionary);
        });
    });
});
