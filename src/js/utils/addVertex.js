import { Vertex } from "../classes";
import { conf } from "../config";
import addVertexUI from "./addVertexUI";
import updateGraphInfo from "./updateGraphInfo";

export default function addVertex({id, color, size, coor, label}) {
    const vertex = new Vertex({
      id,
      color,
      size,
      coor,
      label,
    });     

    conf.graph.addVertex(vertex);
    conf.graph.draw();

  addVertexUI(vertex);
  updateGraphInfo();
}