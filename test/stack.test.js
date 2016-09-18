'use strict'
const Stack = require('../src/stack.js');
const expect = require('chai').expect;

describe('test Stack', function() {
    let stack;

    beforeEach(function() {
        stack = new Stack();
    });

    it('create Stack', function() {
        expect(stack).to.be.an.instanceof(Stack);
    });

    it('add Stack element', function() {
        stack.push(2);
        stack.push(3);
        let length = stack.size();
        expect(length).to.be.equal(2);
    })
});
