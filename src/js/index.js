import { Graph} from "./classes";
import { conf } from "./config";
import addVertexEvent from "./events/addVertexEvent";
import moveVerteciesEvent from "./events/moveVerteciesEvent";
import update from "./update";

window.addEventListener("load", function () {
  conf.canvas = document.querySelector("canvas");
  conf.ctx = conf.canvas.getContext("2d");

  conf.canvas.width = conf.convasConfig.size.width;
  conf.canvas.height = conf.convasConfig.size.height;

  conf.graph = new Graph();

  update();
    
  addVertexEvent();
  moveVerteciesEvent();
});