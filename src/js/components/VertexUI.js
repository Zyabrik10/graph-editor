export default function VertexUI(vertex) {
  return `
        <li class="vertex-editor-item" data-id="${vertex.id}">
            <div>
                <input class="vertex-label-input" type="text" value="${vertex.label}"/>
                <button class="remove-vertex remove-button" class="remove-button">Delete</button>
            </div>
            <ul class="edge-list"></ul>
            <button class="add-edge">Add Edge</button>
        </li>`;
}
