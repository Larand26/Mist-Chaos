import { GRAVITY, GROUND_LEVEL } from "../constants/gameConfig.js";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/screenSize.js";

class Game {
  ctx: CanvasRenderingContext2D;
  private lastUpdateTime: number = 0;
  private gameLoop = (timestamp: number) => {
    this.render();
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

  private render() {
    this.ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  }

  private update(deltaTime: number) {}
}

export default Game;
