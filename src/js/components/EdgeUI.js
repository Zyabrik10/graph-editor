export default function EdgeUI(edge) {
    return `
    <li class="edge-editor-item" data-id="${edge.id}">
        <div>
            <span class="current-vertex">${edge.start.label}</span>
            <span> &rarr; </span>    
            <input class="to-vertex" type="text" value="${edge.end.label}"/>
        </div>
        <button class="remove-edge remove-button">Remove</button>
    </li>`;
}
