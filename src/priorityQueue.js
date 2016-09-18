'use strict'

const Queue = require('./queue.js');

class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue extends Queue {
    constructor() {
        super();
    }

    enqueue(element, priority) {
        const queueElement = new QueueElement(element, priority);
        if (this.isEmpty()) {
            this.items.push(queueElement);
        } else {
            let added = false;
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(queueElement);
            }
        }
    }
}

module.exports = PriorityQueue;
