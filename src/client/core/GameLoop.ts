import { GRAVITY, GROUND_LEVEL } from "../constants/gameConfig.js";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/screenSize.js";
import {
  LEFT_KEY,
  RIGHT_KEY,
  A_KEY,
  D_KEY,
  SPACE_KEY,
  W_KEY,
} from "../constants/keyboardConfig.js";

import Player from "../entities/Player.js";

class Game {
  ctx: CanvasRenderingContext2D;
  player: Player = new Player(50, GROUND_LEVEL, 100, 50, "#fff", "Player1");
  private keysPressed: Set<string> = new Set();
  private lastUpdateTime: number = 0;
  private gameLoop = (timestamp: number) => {
    const deltaTime = (timestamp - this.lastUpdateTime) / 1000; // converter para segundos
    this.lastUpdateTime = timestamp;
    this.update(deltaTime);
    this.render();
    requestAnimationFrame(this.gameLoop);
  };

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
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

  private update(deltaTime: number) {
    // Movimento horizontal
    if (this.isKeyPressed(A_KEY)) {
      this.player.move(-this.player.speed);
    }

    if (this.isKeyPressed(D_KEY)) {
      this.player.move(this.player.speed);
    }

    // Pulo
    if (this.isKeyPressed(SPACE_KEY) && this.player.isGrounded(GROUND_LEVEL)) {
      this.player.jump();
    }

    // Aplicar gravidade
    this.player.applyGravity(GRAVITY);

    // Detectar colisão com o chão
    if (this.player.isGrounded(GROUND_LEVEL)) {
      this.player.land(GROUND_LEVEL);
    }

    this.resolveWorldBounds();
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    this.keysPressed.add(this.normalizeKey(event.key));
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    this.keysPressed.delete(this.normalizeKey(event.key));
  };

  private isKeyPressed(...keys: string[]) {
    return keys.some((key) => this.keysPressed.has(key));
  }

  private normalizeKey(key: string) {
    return key.length === 1 ? key.toLowerCase() : key;
  }

  private resolveWorldBounds() {
    this.player.x = Math.max(
      0,
      Math.min(SCREEN_WIDTH - this.player.width, this.player.x),
    );
  }
}

export default Game;
