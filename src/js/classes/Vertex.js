import { conf } from "../config";

export default class Vertex {
  constructor({ size, color, id, coor, label }) {
    this.size = size;
    this.color = color;
    this.id = id;
    this.coor = coor;
    this.label = label;
  }

  draw() {
    conf.ctx.strokeStyle = this.color;
    conf.ctx.beginPath();
    conf.ctx.arc(this.coor.x, this.coor.y, this.size, 0, 2 * Math.PI);
    conf.ctx.stroke();

    conf.ctx.fillStyle = "white";
    conf.ctx.beginPath();
    conf.ctx.arc(this.coor.x, this.coor.y, this.size, 0, 2 * Math.PI);
    conf.ctx.fill();

    const contentSize = this.size / (this.label.length * 0.8); 

    conf.ctx.fillStyle = "black";
    conf.ctx.textAlign = "center";
    conf.ctx.font = `${contentSize}px Arial`;
    conf.ctx.fillText(this.label, this.coor.x, this.coor.y + contentSize / 2);
  }
}
