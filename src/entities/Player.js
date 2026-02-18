import Entity from "./Entity.js";
class Player extends Entity {
  constructor(
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    color = "white",
    life = 3,
    speed = 5,
  ) {
    super(x, y, width, height, color, life);
    this.speed = speed;
  }
  walk(direction) {
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > 800) this.x = 800 - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > 500) this.y = 500 - this.height;
    switch (direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
      default:
        break;
    }
  }
}
export default Player;
