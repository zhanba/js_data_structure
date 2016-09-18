'use strict'

const Stack = require('./stack.js');
const Queue = require('./queue.js');
const PriorityQueue = require('./priorityQueue.js');

const p = new PriorityQueue();
p.enqueue('John', 2);
p.enqueue('Jack', 1);

console.log(p.size());
p.print();
console.log(p.front().element);

p.enqueue('Jackie', 0);

console.log(p.front().element);
