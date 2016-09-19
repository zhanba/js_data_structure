'use strict'
const PriorityQueue = require('../src/priorityQueue.js');
const expect = require('chai').expect;

describe('PriorityQueue', function() {
    let priorityQueue;

    beforeEach(function() {
        priorityQueue = new PriorityQueue();
    });

    describe("new", function() {
        it('new PriorityQueue()', function() {
            expect(priorityQueue).to.be.an.instanceof(PriorityQueue);
        });
    });
});
