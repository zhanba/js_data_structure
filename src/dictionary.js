'use strict'

function Dictionary() {
    var items = {};

    this.has = function(key) {
        return key in items;
    };

    this.set = function(key, value) {
        items[key] = value;
    };

    this.remove = function(key) {
        if (this.has(key)) {
            delete item[key];
            return true;
        }
        return false;
    };

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.values = function() {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    this.clear = function() {
        items = {};
    };

    this.size = function() {
        var count = 0;
        for (var key in items) {
            if (this.has(key)) {
                ++count;
            }
        }
        return count;
    };

    this.keys = function() {
        var keys = [];
        for (var k in items) {
            if (this.has(k)) {
                keys.push(k);
            }
        }
    };

    this.getItems = function() {
        return items;
    };
}

module.exports = Dictionary;
