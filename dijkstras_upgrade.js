class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp(this.values.length - 1);
    }

    bubbleUp(idx) {
        const parentIdx = Math.floor((idx - 1) / 2);
        const parent = this.values[parentIdx];
        const current = this.values[idx];

        if(!parent) return;

        if(current.priority < parent.priority) {
            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]];
            this.bubbleUp(parentIdx)
        }
    }

    dequeue() {
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        const oldRoot = this.values.pop();
        this.bubbleDown(0);
        return oldRoot;
    }

    bubbleDown(idx) {
        const leftIdx = (2 * idx) + 1;
        const rightIdx = (2 * idx) + 2;
        const left = this.values[leftIdx];
        const right = this.values[rightIdx];
        const curr = this.values[idx];
        let switchIdx;

        if((left && right) && curr.priority > left.priority && curr.priority > right.priority) {
            switchIdx = left.priority < right.priority ? leftIdx : rightIdx;
        } else if(left && curr.priority > left.priority) {
            switchIdx = leftIdx;
        } else if(right && curr.priority > right.priority) {
            switchIdx = rightIdx;
        }

        if(switchIdx) {
            [this.values[idx], this.values[switchIdx]] = [this.values[switchIdx], this.values[idx]];
            this.bubbleDown(switchIdx);
        }
    }
}

class Node{
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
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

            if(smallest || this.adjacencyList[smallest] !== Infinity) {

                for(let v in this.adjacencyList[smallest]) {

                    const neighbor = this.adjacencyList[smallest][v];
                    const dist = distances[smallest] + neighbor.weight;

                    if(dist < distances[neighbor.node]) {
                        distances[neighbor.node] = dist;
                        previous[neighbor.node] = smallest;
                        priorityQueue.enqueue(neighbor.node, dist);
                    }
                }
            }
        }
        return result.concat(smallest).reverse();
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