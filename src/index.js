import { GraphDataStructure } from "./dataStructure/graph/index.js";

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const initiator = (function (method, options = []) {
  method.run(options);
})(GraphDataStructure, ['depth', graph, 'a']); // Simply pass information here.
