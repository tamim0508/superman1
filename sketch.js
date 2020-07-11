var Superman, SupermanIMG
var background1, backgroundIMG
var enemy, enemyIMG
function preload(){
SupermanIMG = loadImage("coding superman files/pngs/superman.png");
backgroundIMG = loadImage("coding superman files/pngs/space1.jpg");
enemyIMG = loadImage("coding superman files/pngs/enemy.png");
}
function setup() {
  createCanvas(1200,400);
  //Background
background1 = createSprite(600,200,1200,400);
background1.addImage("thebackground", backgroundIMG);
 //Superman 
Superman = createSprite(350, 200, 50, 50);
Superman.addImage("superguy", SupermanIMG)
Superman.scale = 0.1;
//Enemy
enemy = createSprite(50,200,50,50);
enemy.addImage("enemies", enemyIMG);
enemy.scale = 0.1
}

function draw() {
  background("blue");
  background1.velocityX = -5
  if(background1.x <0){
    background1.x = background1.width/2
  }
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Superman.velocityY = -3
  }
  if(keyCode === DOWN_ARROW){
    Superman.velocityY = 3
  }
}