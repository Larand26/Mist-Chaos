import Canvas from "./core/Canvas.js";

import Player from "./entities/Player.js";

const canvas = new Canvas("gameCanvas", 800, 500);

const gameLoop = () => {
  // Limpa o canvas
  canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Desenha um retângulo vermelho
  canvas.ctx.fillStyle = "red";
  canvas.ctx.fillRect(100, 100, 50, 50);
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
