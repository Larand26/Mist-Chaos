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
    colision = true,
  ) {
    super(x, y, width, height, color, life, colision);
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
  update(keyboard) {
    if (keyboard.isKeyPressed("KeyW")) {
      this.walk("up");
    }
    if (keyboard.isKeyPressed("KeyS")) {
      this.walk("down");
    }
    if (keyboard.isKeyPressed("KeyA")) {
      this.walk("left");
    }
    if (keyboard.isKeyPressed("KeyD")) {
      this.walk("right");
    }
  }
  takeDamage(amount) {
    this.life -= amount;
    this.colision = false;
    setTimeout(() => {
      this.colision = true;
    }, 1000);
  }
}
export default Player;
