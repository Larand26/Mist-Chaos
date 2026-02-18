class Entity {
  constructor(
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    color = "white",
    life = 3,
    colision = true,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.life = life;
    this.colision = colision;
  }
}
export default Entity;
