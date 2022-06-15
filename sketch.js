var backgroundImg;

var bg = "sprites/snow2.jpg";

function preload() {
  getBackgroundImg();
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
    if(backgroundImg)
        background(backgroundImg);

  background(255,255,255);    

  drawSprites();
}

async function getBackgroundImg(){

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}