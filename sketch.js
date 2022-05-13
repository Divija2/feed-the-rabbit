var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orangeLeaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

function spawnApple(){
  apple=createSprite(random,(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.5;
  apple.velocityY=3;
  apple.lifetime=200;
}

function createLeaf(){
  orangeLeaf=createSprite(random,(100,200),40,10,10);
  orangeLeaf.addImage(leafImg);
  orangeLeaf.velocityY=3;
  orangeLeaf.lifetime=200;
}
}


function draw() {
  background(0);
  
rabbit.x=World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApple();
  spawnOrangeLeaf();
  drawSprites();
}

function spawnApple (){
  if(frameCount % 80 === 0){
    var apple= createSprite(random(50,350),40,10,10);
    apple.y = Math.round(random(10,60));
    apple.addImage(appleImg);
    apple.scale=0.05;
    apple.velocityY=3;
  }
}

function spawnOrangeLeaf (){
  if(frameCount % 80 === 0){
    var orangeLeaf= createSprite(random(150,200),40,10,10);
    orangeLeaf.y = Math.round(random(10,60));
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.scale=0.05;
    orangeLeaf.velocityY=3;
  }
}













