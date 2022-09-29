var canvas;
var backgroundImage, bunny1_img, bunny2_img, track;
var grassImage, carrotImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, bunny1, bunny2, fuels, powerCoins, obstacles;
var bunnies = [];

function preload() {
  backgroundImage = loadImage("assets/background.jpg");
  bunny1_img = loadImage("assets/bunny3.png");
  bunny2_img = loadImage("assets/bunny21.png");
  track = loadImage("assets/track.jpg");
  grassImage = loadImage("assets/grass.png");
  carrotImage = loadImage("assets/carrot.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
