'use strict'
const expect = require('chai').expect;
const HashTable = require('../src/hashTable.js');

describe('HashTable', function() {

    let hashTable;

    beforeEach(function() {
        hashTable = new HashTable();
    });

    describe('new HashTable', function() {
        it('new', function() {
            expect(hashTable).to.be.instanceof(HashTable);
        });
    });
});
