class Graph {
    constructor() {
        this.adjencyList = {}
    }
    addVertex(name) {
        if (!this.adjencyList[name]) {
            this.adjencyList[name] = []
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjencyList[vertex1].push(vertex2)
        this.adjencyList[vertex2].push(vertex1)
    }
    removeEdge(vertex1, vertex2) {
        let newVertex1 = this.adjencyList[vertex1].filter(vertex => vertex !== vertex2)
        this.adjencyList[vertex1] = newVertex1
        let newVertex2 = this.adjencyList[vertex1].filter(vertex => vertex !== vertex1)
        this.adjencyList[vertex2] = newVertex2
    }
    removeVertex(vertex) {
        for (let i = 0; i < this.adjencyList[vertex].length; i++) {
            this.removeEdge(vertex, this.adjencyList[vertex][i])
        }
        delete this.adjencyList[vertex]
    }
    dfs_recrusive(node) {
        let data = [];
        let visted = {}
        let adjencyList = this.adjencyList
        function helper(vertex) {
            if (!vertex) {
                return null
            }
            visted[vertex] = true;
            data.push(vertex)
            for (let i = 0; i < adjencyList[vertex].length; i++) {
                if (!visted[adjencyList[vertex][i]]) {
                    return helper(adjencyList[vertex][i])
                }
            }
        }
        helper(node)
        return data
    }
    dfs_iterative(start) {
        let data = [];
        let visited = {}
        let stack = []
        stack.push(start)
        while (stack.length > 0) {
            let current = stack.pop()
            if (!visited[current]) {
                visited[current] = true;
                data.push(current)
                for (let i = 0; i < this.adjencyList[current].length; i++) {
                    stack.push(this.adjencyList[current][i])
                }
            }
        }
        return data
    }
    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift()
            console.log('current', currentVertex)
            result.push(currentVertex)

            this.adjencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}

let testGraph = new Graph()
testGraph.addVertex('london')
testGraph.addVertex('paris')
testGraph.addVertex('madrid')
testGraph.addVertex('lisbon')
testGraph.addEdge('london', 'paris')
testGraph.addEdge('paris', 'madrid')
testGraph.addEdge('madrid', 'lisbon')
// console.log('dfs', testGraph.dfs_iterative('london'))
// console.log('bfs', testGraph.bfs('london'))

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log('bfs', g.bfs("A"))
console.log('dfs i', g.dfs_iterative("A"))