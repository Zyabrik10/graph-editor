import { Edge } from "../classes";
import { conf } from "../config";
import addEdgeUI from "./addEdgeUI";
import updateGraphInfo from "./updateGraphInfo";

export default function addEdge(vertex, edgeList) {
  if (conf.graph.vertices.length < 2) {
    console.log("Too few vertices");
    return;
  }

  const weight = 0;
  const start = vertex;
  let end;
  const id = conf.graph.edges.length + 1;
  let hasAllEdges = true;

  for (let i = 0; i < conf.graph.vertices.length; i++) {
    if (conf.graph.vertices[i].id === start.id) continue;

    let isEsdge = false;

    for (let j = 0; j < conf.graph.edges.length; j++) {
      if (
        (conf.graph.edges[j].start.id === start.id &&
          conf.graph.edges[j].end.id === conf.graph.vertices[i].id) ||
        (conf.graph.edges[j].end.id === start.id &&
          conf.graph.edges[j].start.id === conf.graph.vertices[i].id)
      ) {
        isEsdge = true;
        break;
      }
    }

    if (!isEsdge) {
      end = conf.graph.vertices[i];
      hasAllEdges = false;
      break;
    }
  }

  if (hasAllEdges) {
    console.log("No other vertices to connect");
    return;
  }

  const edge = new Edge({
    weight,
    start,
    end,
    id,
  });

  conf.graph.addEdge(edge);

  addEdgeUI(edge, edgeList);
  updateGraphInfo();
}
