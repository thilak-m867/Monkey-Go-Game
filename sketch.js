
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
}


function draw() {
 background(255);
  
  stroke("white");
  textSize(20);
  fill("black");
  text("Score: "+ score,300,50);
  
    stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: "+ survivalTime, 25,50);
  
  if(ground.x>0){
     ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 250){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  drawSprites();
}

function food(){
 if (frameCount % 60 === 0) {
   
   
 }
  
}




