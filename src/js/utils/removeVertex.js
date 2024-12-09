import { conf } from "../config";

export default function removeVertex(vertexId, vertexEditor) {
  conf.graph.removeVertex(vertexId);
  conf.graph.removeEdges(vertexId);
  vertexEditor.remove();
}
