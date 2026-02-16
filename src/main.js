import Canvas from "./core/Canvas.js";

import Player from "./entities/Player.js";

const canvas = new Canvas("gameCanvas", 800, 500);

const player = new Player(0, 450, 50, 50, "blue", 3, 2);

const gameLoop = () => {
  // Limpa o canvas
  canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Desenha um retângulo vermelho
  canvas.ctx.fillStyle = "red";
  canvas.ctx.fillRect(100, 100, 50, 50);

  // Cria um jogador e o desenha
  canvas.ctx.fillStyle = player.color;
  canvas.ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
