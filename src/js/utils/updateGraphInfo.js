import { conf } from "../config";

const v = document.querySelector("#num-vertices");
const e = document.querySelector("#num-edges");

export default function updateGraphInfo() {
    v.innerText = conf.graph.vertices.length;
    e.innerText = conf.graph.edges.length;
}