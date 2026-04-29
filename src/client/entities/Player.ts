import Entity from "./Entity.js";

import {
  PLAYER_SPEED,
  PLAYER_JUMP_STRENGTH,
  PLAYER_SPECIAL,
  PLAYER_HEALTH,
  PLAYER_SPEED_Y,
} from "../constants/playerConfig.js";

class Player extends Entity {
  name: string = "";
  speed: number = PLAYER_SPEED;
  jumping: boolean = false;
  jumpStrength: number = PLAYER_JUMP_STRENGTH;
  special: number = PLAYER_SPECIAL;
  health: number = PLAYER_HEALTH;
  speedY: number = PLAYER_SPEED_Y;
  velocityY: number = 0;

  constructor(
    x: number,
    y: number,
    height: number,
    width: number,
    color: string,
    name: string,
    speed: number = PLAYER_SPEED,
    jumping: boolean = false,
    jumpStrength: number = PLAYER_JUMP_STRENGTH,
    special: number = PLAYER_SPECIAL,
    health: number = PLAYER_HEALTH,
    speedY: number = PLAYER_SPEED_Y,
  ) {
    super(x, y, height, width, true, color, true);
    this.name = name;
    this.speed = speed;
    this.jumping = jumping;
    this.jumpStrength = jumpStrength;
    this.special = special;
    this.health = health;
    this.speedY = speedY;
    this.velocityY = 0;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  infos(): object {
    return {
      name: this.name,
      speed: this.speed,
      jumping: this.jumping,
      jumpStrength: this.jumpStrength,
      special: this.special,
      health: this.health,
      speedY: this.speedY,
    };
  }

  move(deltaX: number) {
    this.x += deltaX;
  }

  jump() {
    if (!this.jumping) {
      this.jumping = true;
      this.velocityY = this.jumpStrength;
    }
  }

  applyGravity(gravity: number) {
    this.velocityY -= gravity;
    this.y += this.velocityY;
  }

  isGrounded(groundLevel: number): boolean {
    return this.y >= groundLevel;
  }

  land(groundLevel: number) {
    this.y = groundLevel;
    this.velocityY = 0;
    this.jumping = false;
  }
}

export default Player;
