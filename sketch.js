
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;
var ground ; 
var gameState = 1 ;
var PLAY = 1;
var END = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite (80,315,20,20);
monkey.addAnimation ("running",monkey_running); 
monkey.scale = 0.1
 ground = createSprite(400,350,900,10); 
 ground.velocityX = -4;

  score = 0;
  survivalTime =0;
    
  
FoodGroup = new Group ();
obstacleGroup = new Group ();
}


function draw() {
createCanvas (500,500)
background ("lightBlue")
  
ground.x = ground.width/2;
if (gameState===PLAY)  {
food ();  
spawnObstacles ();
}
if (keyDown("space")&& monkey.y>=-315) {
   monkey.velocityY = - 15;       
 }
  
  if (monkey.isTouching(FoodGroup) ){
   FoodGroup.destroyEach (); 
   score = score + 1;
 }
  
  if (monkey.isTouching(obstacleGroup) ){
    gameState=END;
   FoodGroup.destroyEach (); 
   obstacleGroup.destroyEach ();
    obstacleGroup.setVelocityEach =0 
    FoodGroup.setVelocityEach =0 
    score = 0;
    survivalTime = 0;
    stroke ("black");
  }
 
monkey.velocityY = monkey.velocityY + 1.5;  
monkey.collide(ground);


  
  drawSprites();
stroke ("black");
textSize (20);
fill ("black");
text ("bananas Eaten :"+score,310,25)
  
stroke ("black");
textSize (20);
fill ("black");  
survivalTime  = Math.ceil(frameCount/frameRate());
text ("survival Time :" + survivalTime,30,25) ;
} 

function food (){
if (frameCount % 90===0)  {
var r = Math.round  (random(120,200))
banana = createSprite (500,250,20,20) ;
banana.addImage (bananaImage)  ;
banana.scale = 0.1;
banana.y = r;
banana.velocityX = -4;  
banana.lifetime = 115;  
FoodGroup.add(banana)  
  
}
  
}

function spawnObstacles (){
  if (frameCount%200===0){
obstacle = createSprite (450,315,20,20);
obstacle.addImage (obstacleImage);  
obstacle.scale = 0.2  
    obstacle.velocityX = -4;
    obstacleGroup.add(obstacle)
  }  
  
  
}




