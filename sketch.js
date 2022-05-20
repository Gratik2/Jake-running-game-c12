//creating game objects

var jakeImg;
var pathImg;
var path;
var jake;
var left_boundary;
var right_boundary;
var power;
var powerImg;
var coin;
var coinImg;

function preload(){

  //loading images and animations
 
  jakeImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
  pathImg = loadImage("path.png");
  powerImg = loadImage("power.png");
  coinImg = loadImage("coin.png");
}

function setup(){

  //creating canvas

  createCanvas(400,400);

  //creating path

  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 5;
  path.y = path.height/30;

  //creating jake

  jake = createSprite(180,340,50,170);
  jake.addAnimation("running", jakeImg);

  //creating power image

  power = createSprite(200,80,100,100);
  power.addImage(powerImg);
  power.scale = 0.8;

  //creating coins 

  coin = createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale = 0.3
  coin = createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale = 0.3
  coin = createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale = 0.3;

  //creating left boundary and right boundary

  left_boundary = createSprite(0,300,100,600);
  right_boundary = createSprite(390,300,80,600);

  left_boundary.visible = false;
  right_boundary.visible = false;

}

function draw() {

  background(0);
  
  //making infinite path

  path.velocityY = 5;

  //making jake move with mouse

  jake.x = World.mouseX;

  //giving score logic and making the background repeat based on its height

  if(path.y > 400) {
  path.y = height/2 ;
  if(jake.isTouching(coin)) {
  coinscore = coinscore + 1;
 }
}
  
  //making jack collide left boundary and right boundary

  jake.collide(left_boundary);

  jake.collide(right_boundary);

  //creating edges and making jake collide edges

  edges = createEdgeSprites();

  jake.collide(edges[3]);


drawSprites();
}
