class PriorityQueue{
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.values.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.values.shift();
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
        this.adjacencyList[v1].push({node: v2, weight})
        this.adjacencyList[v2].push({node: v1, weight})
    }

    dijkstras(start, end) {
        const distances = {};
        const previous = {};
        const priorityQueue = new PriorityQueue();
        const result = [];
        let smallest;

        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                priorityQueue.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity;
                priorityQueue.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(priorityQueue.values.length) {
            smallest = priorityQueue.dequeue().val;

            if(smallest === end) {
                while(previous[smallest]) {
                    result.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if(smallest || distances[smallest] !== Infinity) {
                for(let vert in this.adjacencyList[smallest]) {
                    const neighbor = this.adjacencyList[smallest][vert];
                    const dist = distances[smallest] + neighbor.weight;

                    if(dist < distances[neighbor.node]) {
                        distances[neighbor.node] = dist;
                        previous[neighbor.node] = smallest;
                        priorityQueue.enqueue(neighbor.node, dist)
                    }
                }
            }
        }
        return result.concat(smallest).reverse()
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.dijkstras("A", "E"));