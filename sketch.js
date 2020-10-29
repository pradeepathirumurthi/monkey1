
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var fooodGroup, obstacleGroup
var score
var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  fooodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background("white");
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
   if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);   
    foood();
    obstacles();
  drawSprites();
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        fooodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        fooodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}


  


function foood(){
    if (frameCount % 80 === 0) {
    banana = createSprite(500,150,50,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    banana.lifetime = 300;    
    banana.addImage(bananaImage);
    banana.scale=0.05;
    monkey.depth = banana.depth + 1;
    fooodGroup.add(banana);
  }
}
function obstacles(){
  if(frameCount % 300 === 0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}





