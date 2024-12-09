import { conf } from "../config";

export default class Edge {
  constructor({ weight, start, end, id }) {
    this.weight = weight;
    this.start = start;
    this.end = end;
    this.id = id;
  }

  draw() {
    conf.ctx.strokeStyle = "black";
    conf.ctx.lineWidth = 1;
    conf.ctx.beginPath();
    conf.ctx.moveTo(this.start.coor.x, this.start.coor.y);
    conf.ctx.lineTo(this.end.coor.x, this.end.coor.y);
    conf.ctx.stroke();
  }
}
