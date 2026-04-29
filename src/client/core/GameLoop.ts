import { GRAVITY, GROUND_LEVEL } from "../constants/gameConfig.js";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/screenSize.js";

import Player from "../entities/Player.js";

class Game {
  ctx: CanvasRenderingContext2D;
  player: Player = new Player(50, GROUND_LEVEL, 100, 50, "#fff", "Player1");
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
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    this.ctx.setTransform(1, 0, 0, -1, 0, SCREEN_HEIGHT);
    this.player.draw(this.ctx);
  }

  private update(deltaTime: number) {}
}

export default Game;
