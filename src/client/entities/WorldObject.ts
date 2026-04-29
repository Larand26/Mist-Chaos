import Entity from "./Entity.js";

class WorldObject extends Entity {
  constructor(
    x: number,
    y: number,
    height: number,
    width: number,
    solid: boolean,
    color: string,
    gravity: boolean,
  ) {
    super(x, y, height, width, solid, color, gravity);
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default WorldObject;
