export default class Graph {
  constructor(vertices = [], edges = []) {
    this.vertices = vertices;
    this.edges = edges;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
  }

  getVertex(vertexId) {
    return this.vertices.filter((vertex) => vertex.id === vertexId)[0];
  }

  getVertexByLabel(vertexLabel) {
    return this.vertices.filter((vertex) => vertex.label === vertexLabel)[0];
  }

  removeVertex(vertexId) {
    this.vertices = this.vertices.filter((vertex) => vertex.id !== vertexId);
  }

  removeEdges(vertexId) {
    this.edges = this.edges.filter(
      (edge) => edge.start.id !== vertexId && edge.end.id !== vertexId
    );
  }

  removeEdge(edgeId) {
    this.edges = this.edges.filter((edge) => edge.id !== edgeId);
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  drawVertices() {
    this.vertices.forEach((vertex) => vertex.draw());
  }
  drawEdges() {
    this.edges.forEach((edge) => edge.draw());
  }

  draw() {
    this.drawEdges();
    this.drawVertices();
  }
}
