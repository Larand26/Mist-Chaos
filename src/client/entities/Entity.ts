import {
  ENTITY_COLOR,
  ENTITY_HEIGHT,
  ENTITY_SOLID,
  ENTITY_WIDTH,
  ENTITY_GRAVITY,
} from "../constants/entitiesConfig.js";

class Entity {
  x: number = 0;
  y: number = 0;
  height: number = ENTITY_HEIGHT;
  width: number = ENTITY_WIDTH;
  solid: boolean = ENTITY_SOLID;
  color: string = ENTITY_COLOR;
  gravity: boolean = ENTITY_GRAVITY;

  constructor(
    x: number,
    y: number,
    height: number,
    width: number,
    solid: boolean,
    color: string,
    gravity: boolean,
  ) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.solid = solid;
    this.color = color;
    this.gravity = gravity;
  }
}

export default Entity;
