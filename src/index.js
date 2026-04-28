const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
  canvas.width = window.innerWidth - 50;
  canvas.height = window.innerHeight - 50;
};

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 20,
  color: "blue",
};

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw player
  ctx.fillStyle = player.color;
  ctx.fillRect(
    player.x - player.size / 2,
    player.y - player.size / 2,
    player.size,
    player.size,
  );

  requestAnimationFrame(gameLoop);
};

gameLoop();
