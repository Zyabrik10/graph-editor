import EdgeUI from "../components/EdgeUI";
import { conf } from "../config";


export default function addEdgeUI(edge, edgeList) {
    const edgeEditorComponent = EdgeUI(edge);

    edgeList.insertAdjacentHTML("beforeend", edgeEditorComponent);

    const input = document.querySelector(
      `.edge-editor-item[data-id="${edge.id}"] .to-vertex`
    );

    const remove = document.querySelector(
      `.edge-editor-item[data-id="${edge.id}"] .remove-edge`
    );

    input.addEventListener("input", () => {
        const vertex = conf.graph.getVertexByLabel(input.value);

        if (!vertex) {
            console.log(`No such vertex as ${input.value}`);
            return;
        }

        edge.end = vertex;
    });

    remove.addEventListener("click", () => {
        conf.graph.removeEdge(edge.id);
        edgeList.removeChild(document.querySelector(`.edge-editor-item[data-id="${edge.id}"]`));
    });
}
