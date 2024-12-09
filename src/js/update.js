import { conf } from "./config";

export default function update() {
  conf.ctx.clearRect(0, 0, conf.canvas.width, conf.canvas.height);
  conf.graph.draw();
  requestAnimationFrame(update);
}
