export interface Graph {
  [key: string]: string[];
}

const simpleGraph = {
  a: ["b", "b", "h"],
  b: ["d"],
  c: ["f"],
  d: ["e"],
  e: [],
  f: [],
  h: ["c"],
};

/**
 * Simple recursive function to travel between nodes
 * using simple graph and roles.
 */
const depthFirstTraversal = (
  graph: Graph,
  startNode: string,
  stack: string[] = [startNode]
) => {
  const current = stack.pop();
  console.log(current);

  graph[current].forEach((i) => {
    stack.push(i);
  });

  if (stack.length === 0) {
    return current;
  }

  return current + depthFirstTraversal(graph, startNode, stack);
};

const data = depthFirstTraversal(simpleGraph, "a");
console.log(data);
