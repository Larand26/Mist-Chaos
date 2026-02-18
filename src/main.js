import Canvas from "./core/Canvas.js";

import Player from "./entities/Player.js";
import Enemy from "./entities/Enemy.js";

import KeyBoard from "./input/Keyboard.js";
import Colision from "./systems/Colision.js";

const canvas = new Canvas("gameCanvas", 800, 500);

const player = new Player(0, 225, 50, 50, "blue", 3, 2, true);
const enemy = new Enemy(750, 225, 50, 50, "red", 3, 2, true);

const keyboard = new KeyBoard();

const gameLoop = () => {
  player.update(keyboard);
  enemy.update();
  canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < player.life; i++) {
    canvas.ctx.fillStyle = "orange";
    canvas.ctx.fillRect(10 + i * 15, 10, 10, 10);
  }

  if (Colision.checkRectCollision(player, enemy)) {
    if (player.colision && enemy.colision) {
      player.takeDamage(1);
    }
  }

  canvas.ctx.fillStyle = player.color;
  canvas.ctx.fillRect(player.x, player.y, player.width, player.height);

  canvas.ctx.fillStyle = enemy.color;
  canvas.ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
