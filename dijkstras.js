class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.values.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        return this.values.sort((a, b) => a.priority - b.priority);
    }
}
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight });
        this.adjacencyList[v2].push({node: v1, weight})
    }

    djikstra(start, end) {
        const nodes = new PriorityQueue();
        const dist = {};
        const prev = {};
        let smallest;

        // build init state
        for(let vert in this.adjacencyList) {
            if(vert === start) {
                // add each vert to dist 
                dist[vert] = 0;
                // add each node to nodes priority queue
                nodes.enqueue(vert, 0);
            } else {
                dist[vert] = Infinity;
                nodes.enqueue(vert, Infinity);
            }
            // add vert to prev value null
            prev[vert] = null;
        }
        
        // as nodes priority queue is not empty
        while(nodes.values.length) {
            // shift from nodes priority queue
            smallest  = nodes.dequeue().val;

            if(smallest === end) {
                // done 
            }
            // if smalles
            if(smallest || dist[smallest] !== Infinity) {

            }
        }
    }
}
