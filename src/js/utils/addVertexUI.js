import VertexUI from "../components/VertexUI";
import addEdge from "./addEdge";
import editVertexLabel from "./editVertexLabel";
import removeVertex from "./removeVertex";

const vertecies = document.querySelector(".vertecies");

export default function addVertexUI(vertex) {
  vertecies.insertAdjacentHTML("beforeend", VertexUI(vertex)); // inserting ui

  const vertexEditorBlock = document.querySelector(`.vertex-editor-item[data-id="${vertex.id}"]`);
  const vertexInputLabel = vertexEditorBlock.querySelector(".vertex-label-input");
  const removeVertexButton = vertexEditorBlock.querySelector(".remove-vertex");
  const addEdgeButton = vertexEditorBlock.querySelector(".add-edge");
  const edgeList = vertexEditorBlock.querySelector(".edge-list");

  removeVertexButton.addEventListener("click",removeVertex.bind(null,vertex.id, vertexEditorBlock));
  vertexInputLabel.addEventListener("input", () =>editVertexLabel(vertex.id, vertexInputLabel.value));
  addEdgeButton.addEventListener("click", addEdge.bind(null, vertex, edgeList));
}
