import Canvas from "./core/Canvas.js";

import Player from "./entities/Player.js";

import KeyBoard from "./input/Keyboard.js";

const canvas = new Canvas("gameCanvas", 800, 500);

const player = new Player(0, 225, 50, 50, "blue", 3, 2);

const keyboard = new KeyBoard();

const gameLoop = () => {
  // Verifica as teclas pressionadas e move o player
  if (keyboard.isKeyPressed("ArrowUp") || keyboard.isKeyPressed("KeyW")) {
    player.walk("up");
  }
  if (keyboard.isKeyPressed("ArrowDown") || keyboard.isKeyPressed("KeyS")) {
    player.walk("down");
  }
  if (keyboard.isKeyPressed("ArrowLeft") || keyboard.isKeyPressed("KeyA")) {
    player.walk("left");
  }
  if (keyboard.isKeyPressed("ArrowRight") || keyboard.isKeyPressed("KeyD")) {
    player.walk("right");
  }

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
