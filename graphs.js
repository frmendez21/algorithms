class Graph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex(vertex) {
       if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
        const filteredL1 = this.adjacencyList[v1].filter(v => v !== v2);
        const filteredL2 = this.adjacencyList[v2].filter(v => v !== v1);

        this.adjacencyList[v1] = filteredL1;
        this.adjacencyList[v2] = filteredL2;
    }
    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return;

        this.adjacencyList[vertex].forEach(edge => {
            this.removeEdge(vertex, edge)
        });

        delete this.adjacencyList[vertex]
    }
}

// const g = new Graph();
// g.addVertex('A');
// g.addVertex('B');
// g.addVertex('C');
// g.addEdge('A', 'B')
// g.addEdge('B', 'C')
// g.removeVertex('A')
// console.log(g)