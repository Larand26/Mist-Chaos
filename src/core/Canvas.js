class Canvas {
  constructor(canvasId = "gameCanvas", width = 800, height = 600) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.width = width;
    this.height = height;

    this.resize();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
}
export default Canvas;
