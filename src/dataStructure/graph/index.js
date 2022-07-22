export const GraphDataStructure =(function() {
  const depth = function(graph, source) {
    const stack = [source];

    while(stack.length > 0) {
      const current = stack.pop();
      
      for(let node of graph[current]) {
        stack.push(node);
      }

      console.log(current);
    }
  }

  const breadth = function(graph, source) {
    const queue = [source];

    while(queue.length > 0) {
      const current = queue.shift();
      console.log(current);

      for(let node of graph[current]) {
        queue.push(node);
      }
    }
  }

  /**
   * Time complexity
   * @param {*} graph 
   * @param {*} src 
   * @param {*} dst 
   * @returns 
   */
  const hasPath = function (graph, src, dst) {
    return false;
  }

  return {
    run: (options) => {
      const algorithm = options[0];
      const source = options[2];
      const graph = options[1];

      if(!algorithm) {
        throw new Error("Algorithm not defined");
      }

      if(!graph) {
        throw new Error("Graph not defined, should be defined at second position");
      }

      switch (algorithm) {
        case 'depth':
          depth(graph, source); break;
      
        case 'breadth': 
          breadth(graph, source); break;

      }

    }
  }
})();
