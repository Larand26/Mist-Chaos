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
    console.log("a");

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
