import { GRAVITY, GROUND_LEVEL } from "../constants/gameConfig.js";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../constants/screenSize.js";
import {
  LEFT_KEY,
  RIGHT_KEY,
  A_KEY,
  D_KEY,
  SPACE_KEY,
  W_KEY,
  S_KEY,
  UP_KEY,
  DOWN_KEY,
} from "../constants/keyboardConfig.js";

import Player from "../entities/Player.js";
import WorldObject from "../entities/WorldObject.js";
import Shot from "../entities/Shot.js";

const SHOOT_INTERVAL = 1 / 10; // 10 tiros por segundo = intervalo de 0.1 segundos

class Game {
  ctx: CanvasRenderingContext2D;
  player: Player = new Player(50, GROUND_LEVEL, 100, 50, "#fff", "Player1");
  ground: WorldObject = new WorldObject(
    0,
    0,
    GROUND_LEVEL,
    SCREEN_WIDTH,
    true,
    "#2e5712",
    false,
  );
  private shots: Shot[] = [];
  private keysPressed: Set<string> = new Set();
  private lastUpdateTime: number = 0;
  private lastShootTime: number = 0;
  private elapsedTime: number = 0;
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
    this.lastShootTime = 0;
    this.elapsedTime = 0;
    requestAnimationFrame(this.gameLoop);
  }

  private render() {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    this.ctx.setTransform(1, 0, 0, -1, 0, SCREEN_HEIGHT);
    this.ground.draw(this.ctx);
    this.player.draw(this.ctx);
    this.shots.forEach((shot) => shot.draw(this.ctx));
  }

  private update(deltaTime: number) {
    this.elapsedTime += deltaTime;

    // Movimento horizontal
    if (this.isKeyPressed(A_KEY)) {
      this.player.walk("left");
    }
    if (this.isKeyPressed(D_KEY)) {
      this.player.walk("right");
    }

    // Pulo
    if (this.isKeyPressed(SPACE_KEY)) {
      this.player.jump(GROUND_LEVEL);
    }

    if (this.isKeyPressed(S_KEY)) {
      this.player.crouch(true);
    } else {
      this.player.crouch(false);
    }

    const shootDirection = this.resolveShootDirection();
    if (
      shootDirection &&
      this.elapsedTime - this.lastShootTime >= SHOOT_INTERVAL
    ) {
      this.lastShootTime = this.elapsedTime;
      this.player.shoot(shootDirection, (x, y, direction) => {
        const shot = new Shot(x, y, 8, 8, "#71d3f1", direction);
        this.shots.push(shot);
      });
    }

    this.shots.forEach((shot) => shot.move());
    this.shots = this.shots.filter(
      (shot) =>
        shot.x > 0 &&
        shot.x < SCREEN_WIDTH &&
        shot.y > 0 &&
        shot.y < SCREEN_HEIGHT,
    );

    this.player.applyGravity(GRAVITY, GROUND_LEVEL);
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

  private resolveShootDirection():
    | "up"
    | "down"
    | "left"
    | "right"
    | "up-right"
    | "up-left"
    | "down-right"
    | "down-left"
    | null {
    const horizontal =
      Number(this.isKeyPressed(RIGHT_KEY)) -
      Number(this.isKeyPressed(LEFT_KEY));
    const vertical =
      Number(this.isKeyPressed(UP_KEY)) - Number(this.isKeyPressed(DOWN_KEY));

    if (horizontal === 0 && vertical === 0) {
      return null;
    }

    if (vertical > 0 && horizontal > 0) return "up-right";
    if (vertical > 0 && horizontal < 0) return "up-left";
    if (vertical < 0 && horizontal > 0) return "down-right";
    if (vertical < 0 && horizontal < 0) return "down-left";
    if (vertical > 0) return "up";
    if (vertical < 0) return "down";
    if (horizontal > 0) return "right";
    return "left";
  }
}

export default Game;
