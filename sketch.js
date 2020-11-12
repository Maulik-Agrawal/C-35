var database;
var canvas, backgroundImage;
var playerCount;
var gameState = 0;
var form,player,game;


function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
}