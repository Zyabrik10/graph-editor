import { conf } from "../config";

export default function editVertexLabel(vertexId, newLabel) {
    conf.graph.getVertex(vertexId).label = newLabel;
}