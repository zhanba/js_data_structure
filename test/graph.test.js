'use strict';

var expect = require('chai').expect;
var Graph = require('../src/graph.js');
var Stack = require('../src/stack.js');

describe('Graph', function() {
    let graph;
    const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    beforeEach(function() {
        graph = new Graph();

        for (var i = 0; i < myVertices.length; i++) {
            graph.addVertex(myVertices[i]);
        }

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('A', 'D');
        graph.addEdge('C', 'D');
        graph.addEdge('C', 'G');
        graph.addEdge('D', 'G');
        graph.addEdge('D', 'H');
        graph.addEdge('B', 'E');
        graph.addEdge('B', 'F');
        graph.addEdge('E', 'I');
    });

    describe('new Graph', function() {
        it('new', function() {
            expect(graph).to.be.instanceof(Graph);
        });
    });

    describe('add Vertices and Edge', function() {

        function printNode(value) {
            console.log('Visited vertex: ' + value);
        }

        it('toString()', function() {
            console.log(graph.toString());
        });

        it('bfs()', function() {
            graph.bfs(myVertices[0], printNode);
        });

        it('BFS()', function() {
            var shortestPathA = graph.BFS(myVertices[0]);

            var fromVertex = myVertices[0];
            for (var i = 0; i < myVertices.length; i++) {
                var toVertex = myVertices[i],
                    path = new Stack();
                for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
                    path.push(v);
                }
                path.push(fromVertex);
                var s = path.pop();
                while (!path.isEmpty()) {
                    s += ' - ' + path.pop();
                }
                console.log(s);
            }
        });

        it('dfs()', function() {
            graph.dfs(printNode);
        });
        
    });
});
