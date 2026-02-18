import Canvas from "./core/Canvas.js";

import Player from "./entities/Player.js";

import KeyBoard from "./input/Keyboard.js";

const canvas = new Canvas("gameCanvas", 800, 500);

const player = new Player(0, 225, 50, 50, "blue", 3, 2);

const keyboard = new KeyBoard();

const gameLoop = () => {
  player.update(keyboard);

  canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.ctx.fillStyle = "red";
  canvas.ctx.fillRect(100, 100, 50, 50);

  canvas.ctx.fillStyle = player.color;
  canvas.ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
