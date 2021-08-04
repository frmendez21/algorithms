class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vert) {
        if(!this.adjacencyList[vert]) this.adjacencyList[vert] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }

    
}

const g = new WeightedGraph();
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addEdge('A', 'B', 10)
g.addEdge('C', 'D', 20)
g.addEdge('B', 'C', 5)