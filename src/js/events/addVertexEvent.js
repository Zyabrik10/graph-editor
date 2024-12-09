import { Vertex } from "../classes";
import { math, conf } from "../config";
import addVertex from "../utils/addVertex";
import addVertexUI from "../utils/addVertexUI";
import updateGraphInfo from "../utils/updateGraphInfo";

export default function addVertexEvent() {
  const button = document.querySelector(".add-vertex");

  let c = 0;
  const size = 20;

  button.addEventListener("click", () => {
    if (conf.graph.vertices.length === 0) c = 0;

    addVertex({
      id: c,
      color: 'blue',
      size,
      coor: {
        x: math.getRandomInt(size, conf.canvas.width - size),
        y: math.getRandomInt(size, conf.canvas.height - size),
      },
      label: (c++).toString(),
    });
  });
}