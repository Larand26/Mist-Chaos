class Game {
  ctx: CanvasRenderingContext2D;
  private lastUpdateTime: number = 0;
  private gameLoop = (timestamp: number) => {
    const deltaTime = timestamp - this.lastUpdateTime;
    this.lastUpdateTime = timestamp;
    this.update(deltaTime);
    requestAnimationFrame(this.gameLoop);
  };

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  public start() {
    this.lastUpdateTime = performance.now();
    requestAnimationFrame(this.gameLoop);
  }

  private update(deltaTime: number) {}
}

export default Game;
