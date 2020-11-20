var ball, bat;

function setup(){

createCanvas(600,600);

ball = createSprite(100,50,100,50);
bat = createSprite(400,450,50,50);

ball.shapeColor= "red"; 
bat.shapeColor = "blue";

ball.debug = true;
bat.debug = true; 

ball.velocityX=1;
ball.velocityY=1;

bat.velocityX=-1;
bat.velocityY=-1;
}


function draw(){
background(0);

//bat.x = mouseX;
//bat.y = mouseY;
                
bounceOff(bat,ball);

drawSprites(); 
  }