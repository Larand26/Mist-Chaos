import Entity from "./Entity.js";

class Enemy extends Entity {
  constructor(
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    color = "red",
    life = 3,
    speed = 2,
    colision = true,
  ) {
    super(x, y, width, height, color, life, colision);
    this.speed = speed;
  }
  walk() {
    this.x -= this.speed;
  }
  update() {
    this.walk();
  }
}
export default Enemy;
