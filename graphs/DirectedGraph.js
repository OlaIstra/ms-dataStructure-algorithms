function DirectedGraph() {
    this.edges = {};
}

DirectedGraph.prototype.addVertex = function(vertex) {
    this.edges[vertex] = {};
}

DirectedGraph.prototype.addEdge = function(origVertex, destVertex, weight) {
    if (weight === undefined) {
        weight = 0;
    }
    this.edges[origVertex][destVertex] = weight;
}

DirectedGraph.prototype.removeEdge = function(origVertex, destVertex) {
    if (this.edges[origVertex] && this.edges[origVertex][destVertex] != undefined) {
        delete this.edges[origVertex][destVertex];
    }
}

DirectedGraph.prototype.removeVertex = function(vertex) {
    for (let adjacentVertex in this.edges[vertex]) {
        this.removeEdge(adjacentVertex, vertex);
    }
    delete this.edges[vertex];
}

let digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 2);
digraph1.addEdge("C", "A", 3);

// Breadth-First Search //Time Complexity: O(V + E)

DirectedGraph.prototype.traverseBFS = function(vertex, fn) {
    let queue = [],
        visited = {};

    queue.push(vertex);

    while (queue.length) {
        vertex = queue.shift();
        if (!visited[vertex]) {
            visited[vertex] = true;
            fn(vertex);
            for (let adjacentVertex in this.edges[vertex]) {
                queue.push(adjacentVertex);
            }
        }
    }
}

digraph1.traverseBFS("B", (vertex) => {
    console.log(vertex)
});

// Depth-First Search //Time Complexity: O(V + E)

DirectedGraph.prototype.traverseDFS = function(vertex, fn) {
    let visited = {};
    this._traverseDFS(vertex, visited, fn);
}

DirectedGraph.prototype._traverseDFS = function(vertex, visited, fn) {
    visited[vertex] = true;
    fn(vertex);
    for (let adjacentVertex in this.edges[vertex]) {
        if (!visited[adjacentVertex]) {
            this._traverseDFS(adjacentVertex, visited, fn);
        }
    }
}

// Dijkstra’s Algorithm: Shortest Path // Time Complexity: O(V^2 + E)

function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function _extractMin(Q, dist) {
    let minimumDistance = Infinity,
        nodeWithMinimumDistance = null;
    for (let node in Q) {
        if (dist[node] <= minimumDistance) {
            minimumDistance = dist[node];
            nodeWithMinimumDistance = node;
        }
    }
    return nodeWithMinimumDistance;
}

DirectedGraph.prototype.Dijkstra = function(source) {
    // create vertex set Q
    let Q = {},
        dist = {};
    for (let vertex in this.edges) {
        // unknown distances set to Infinity
        dist[vertex] = Infinity;
        // add v to Q
        Q[vertex] = this.edges[vertex];
    }
    // Distance from source to source init to 0
    dist[source] = 0;

    while (!_isEmpty(Q)) {
        let u = _extractMin(Q, dist); // get the min distance

        // remove u from Q
        delete Q[u];

        // for each neighbor, v, of u:
        // where v is still in Q.
        for (let neighbor in this.edges[u]) {
            // current distance
            let alt = dist[u] + this.edges[u][neighbor];
            // a shorter path has been found
            if (alt < dist[neighbor]) {
                dist[neighbor] = alt;
            }
        }
    }
    return dist;
}

const digraph1 = new DirectedGraph();
digraph1.addVertex("A");
digraph1.addVertex("B");
digraph1.addVertex("C");
digraph1.addVertex("D");
digraph1.addEdge("A", "B", 1);
digraph1.addEdge("B", "C", 1);
digraph1.addEdge("C", "A", 1);
digraph1.addEdge("A", "D", 1);
console.log(digraph1);
// DirectedGraph {
// V: 4,
// E: 4,
// edges: { A: { B: 1, D: 1 }, B: { C: 1 }, C: { A: 1 }, D: {} }}
digraph1.Dijkstra("A"); // { A: 0, B: 1, C: 2, D: 1 }

// Topological Sort

DirectedGraph.prototype.topologicalSortUtil = function(v, visited, stack) {
    visited.add(v);

    for (var item in this.edges[v]) {
        if (visited.has(item) == false) {
            this.topologicalSortUtil(item, visited, stack)
        }
    }
    stack.unshift(v);
};

DirectedGraph.prototype.topologicalSort = function() {
    var visited = {},
        stack = [];


    for (var item in this.edges) {
        if (visited.has(item) == false) {
            this.topologicalSortUtil(item, visited, stack);
        }
    }
    return stack;
};

var g = new DirectedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('B', 'A');
g.addEdge('D', 'C');
g.addEdge('D', 'B');
g.addEdge('B', 'A');
g.addEdge('A', 'F');
g.addEdge('E', 'C');
var topologicalOrder = g.topologicalSort();
console.log(g);
// DirectedGraph {
// V: 6,
// E: 6,
// edges:
//  { A: { F: 0 },
//    B: { A: 0 },
//    C: {},
//    D: { C: 0, B: 0 },
//    E: { C: 0 },
//    F: {} } }
console.log(topologicalOrder); // [ 'E', 'D', 'C', 'B', 'A', 'F' ]
