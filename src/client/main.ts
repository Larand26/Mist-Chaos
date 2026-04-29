import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants/screenSize.js";

import Game from "./core/GameLoop.js";
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.height = SCREEN_HEIGHT;
canvas.width = SCREEN_WIDTH;

const game = new Game(ctx);
game.start();
