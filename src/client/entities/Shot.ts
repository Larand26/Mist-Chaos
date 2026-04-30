import Entity from "./Entity.js";

class Shot extends Entity {
  direction:
    | "up"
    | "down"
    | "left"
    | "right"
    | "up-right"
    | "up-left"
    | "down-right"
    | "down-left";
  speed: number = 10;
  damage: number = 10;
  velocityX: number = 0;
  velocityY: number = 0;

  constructor(
    x: number,
    y: number,
    height: number,
    width: number,
    color: string,
    direction:
      | "up"
      | "down"
      | "left"
      | "right"
      | "up-right"
      | "up-left"
      | "down-right"
      | "down-left",
  ) {
    super(x, y, height, width, true, color, false);
    this.direction = direction;
    this.setVelocity();
  }

  private setVelocity() {
    const velocityMagnitude = this.speed;
    const diagonalMagnitude = velocityMagnitude / Math.sqrt(2);

    switch (this.direction) {
      case "up":
        this.velocityX = 0;
        this.velocityY = velocityMagnitude;
        break;
      case "down":
        this.velocityX = 0;
        this.velocityY = -velocityMagnitude;
        break;
      case "left":
        this.velocityX = -velocityMagnitude;
        this.velocityY = 0;
        break;
      case "right":
        this.velocityX = velocityMagnitude;
        this.velocityY = 0;
        break;
      case "up-right":
        this.velocityX = diagonalMagnitude;
        this.velocityY = diagonalMagnitude;
        break;
      case "up-left":
        this.velocityX = -diagonalMagnitude;
        this.velocityY = diagonalMagnitude;
        break;
      case "down-right":
        this.velocityX = diagonalMagnitude;
        this.velocityY = -diagonalMagnitude;
        break;
      case "down-left":
        this.velocityX = -diagonalMagnitude;
        this.velocityY = -diagonalMagnitude;
        break;
    }
  }

  move() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Shot;
