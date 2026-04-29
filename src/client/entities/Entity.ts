class Entity {
  x: number = 0;
  y: number = 0;
  height: number = 0;
  width: number = 0;
  solid: boolean = false;
  color: string = "#000000";

  constructor(
    x: number,
    y: number,
    height: number,
    width: number,
    solid: boolean,
    color: string,
  ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.solid = solid;
    this.color = color;
  }
}

export default Entity;
