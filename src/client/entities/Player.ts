import Entity from "./Entity.js";

import {
  PLAYER_SPEED,
  PLAYER_JUMP_STRENGTH,
  PLAYER_SPECIAL,
  PLAYER_HEALTH,
} from "../constants/playerConfig.js";

class Player extends Entity {
  name: string = "";
  speed: number = PLAYER_SPEED;
  jumping: boolean = false;
  jumpStrength: number = PLAYER_JUMP_STRENGTH;
  special: number = PLAYER_SPECIAL;
  health: number = PLAYER_HEALTH;

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
  ) {
    super(x, y, height, width, true, color, true);
    this.name = name;
    this.speed = speed;
    this.jumping = jumping;
    this.jumpStrength = jumpStrength;
    this.special = special;
    this.health = health;
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
    };
  }

  move(deltaX: number) {
    this.x += deltaX;
  }
}

export default Player;
