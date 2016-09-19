'use strict'
const expect = require('chai').expect;
const LinkedList = require('../src/linkedList.js');

describe('LinkedList', function() {
    let linkedList;
    beforeEach(function() {
        linkedList = new LinkedList();
    });

    describe('new LinkedList', function() {
        it('new', function() {
            expect(linkedList).to.be.instanceof(LinkedList);
        });
    })
});
