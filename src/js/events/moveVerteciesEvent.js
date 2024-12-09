import { conf, math } from "../config";

export default function moveVerteciesEvent() {
  let index;
  let isDragging = false;
  let offset = {
    x: 0,
    y: 0,
  };

  conf.canvas.addEventListener("mousemove", ({ offsetX: x, offsetY: y }) => {
    if (!isDragging && index === undefined) {
      conf.canvas.style.cursor = "auto";

      for (const element of conf.graph.vertices) {
        const vertex = element;
        const distance = math.getDistance(vertex.coor, { x, y });

        if (distance < vertex.size) {
          conf.canvas.style.cursor = "grab";
          break;
        }
      }
      return;
    }

    conf.canvas.style.cursor = "grabbing";

    conf.graph.vertices[index].coor.x = x + offset.x;
    conf.graph.vertices[index].coor.y = y + offset.y;
  });

  conf.canvas.addEventListener("mousedown", ({ offsetX: x, offsetY: y }) => {
    for (let i = 0; i < conf.graph.vertices.length; i++) {
      const vertex = conf.graph.vertices[i];
      const distance = math.getDistance(vertex.coor, { x, y });

      if (distance < vertex.size) {
        conf.canvas.style.cursor = "grabbing";
        index = i;
        isDragging = true;

        offset.x = vertex.coor.x - x;
        offset.y = vertex.coor.y - y;
        break;
      }
    }
  });

  conf.canvas.addEventListener("mouseup", () => {
    conf.canvas.style.cursor = "auto";
    index = undefined;
    isDragging = false;
    offset.x = 0;
    offset.y = 0;
  });
}
