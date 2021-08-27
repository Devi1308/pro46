var bg,bg2,form,system,code,security;
var treasure;
var score=0,score2=0;
var sophia , cup;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25;
var edges;
var key;
var click=0;
var restart,restartImg;
var substate=0;
var c1,c2,c3,c4,c5,c6;
var c1Img,c2Img,c3Img;
var card1,card2,card3,card4,card5,card6;
var cardImg;
//var a=1,b=2,c=2,d=3,e=1,f=3;
var a=0,b=0,c=0,d=0,e=0,f=0;

var gamestate=1;

function preload() {
 
  key = loadAnimation("images//key.png");
  bg= loadAnimation("images/aladdin_cave.jpg");
  bg2= loadAnimation("images/aladdin_cave2.jpg");
  treasure=loadAnimation("images/treasure.jpg");
  c1Img= loadAnimation("images/1.png");
  c2Img= loadAnimation("images/2.png");
  c3Img=loadAnimation("images/3.png");
  restartImg= loadAnimation("images/restart1.png");
  cardImg = loadAnimation("images/card.png");
  //card1= loadImage("images/yellow.svg.crdownload");
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();

  restart= createSprite(500,250,50,50);
  restart.addAnimation("restart",restartImg);
  restart.scale=0.4;
  restart.visible=false;

c1 = createSprite(300,100,40,70);
c1.shapeColor='YELLOW';
c1.visible=false;
c1.addAnimation("card",cardImg);

c2 = createSprite(500,100,40,70);
c2.shapeColor='GREEN';
c2.visible=false;
c2.addAnimation("card",cardImg);

c3 = createSprite(700,100,40,70);
c3.shapeColor='PINK';
c3.visible=false;
c3.addAnimation("card",cardImg);

c4 = createSprite(300,400,40,70);
c4.shapeColor='BLUE';
c4.visible=false;
c4.addAnimation("card",cardImg);

c5 = createSprite(500,400,40,70);
c5.shapeColor='RED';
c5.visible=false;
c5.addAnimation("card",cardImg);

c6 = createSprite(700,400,40,70);
c6.shapeColor='BLACK';
c6.visible=false;
c6.addAnimation("card",cardImg);

  sophia = createSprite(373, 379,20,20);
  sophia.velocityY=0;
  sophia.velocityX=0;
  
  sophia.shapeColor='RED';


  cup = createSprite(15, 29,10,80);
  cup.shapeColor='gold';
  cup.addAnimation("key",key);
  cup.scale = 0.02;
  
   wall1 = createSprite(99, 10,100,20);
  wall1.shapeColor='black';
  
   wall2 = createSprite(199, 85,100,20);
  wall2.shapeColor='black';
  
   wall3 = createSprite(322, 10,148,20);
  wall3.shapeColor='black';
  
   wall4 = createSprite(100, 391,148,20);
  wall4.shapeColor='black';
  
   wall5 = createSprite(120, 312,100,20);
  wall5.shapeColor='black';
  
   wall6 = createSprite(255, 391,149,20);
  wall6.shapeColor='black';
  
   wall7 = createSprite(80, 149,100,20);
  wall7.shapeColor='black';
  
   wall8= createSprite(160, 237,100,20);
  wall8.shapeColor='black';
  
   wall9 = createSprite(265,157 ,148,20);
  wall9.shapeColor='black';
  
   wall10 = createSprite(300, 61,70,20);
  wall10.shapeColor='black';
  
   wall11 = createSprite(300, 300,105,20);
  wall11.shapeColor='black';
  
   wall12 = createSprite(337, 268,20,65);
  wall12.shapeColor='black';
  
   wall13 = createSprite(255, 241,20,100);
  wall13.shapeColor='black';
  
   wall14 = createSprite(37, 228,20,100);
  wall14.shapeColor='black';
  
   wall15 = createSprite(345, 110,20,120);
  wall15.shapeColor='black';
  
   wall16 = createSprite(120, 193,20,100);
  wall16.shapeColor='black';
  
   wall17= createSprite(180,350 ,20,100);
  wall17.shapeColor='black';
  
   wall18 = createSprite(15, 380,20,148);
  wall18.shapeColor='black';
  
  wall19 = createSprite(385, 150,20,340);
  wall19.shapeColor='black';
  
   wall20 = createSprite(258, 57,20,75);
  wall20.shapeColor='black';
  
  wall21 = createSprite(140, 45,20,100);
  wall21.shapeColor='black';
  
   wall22 = createSprite(40, 45,20,100);
  wall22.shapeColor='black';
  
   wall23 = createSprite(295, 245,20,60);
  wall23.shapeColor='black';
  
   wall24 = createSprite(325, 225,40,20);
  wall24.shapeColor='black';
  
   wall25 = createSprite(231, 365,20,40);
  wall25.shapeColor='black';
  
 hide();
  
}

function draw() {
 
  if(gamestate===1) {
  background(bg);

  clues();
  security.display();
  textSize(30);
  fill("white");
  text("Score: " + score, 850, 50);

// add code for changing the background to the treasure background
 edges = createEdgeSprites() ;
 sophia.bounceOff(edges);




 


  if(score === 5) {
  clear()

    background(bg2)
    c1.visible=true;
    c2.visible=true;
    c3.visible=true;
    c4.visible=true;
    c5.visible=true;
    c6.visible=true;

if(mousePressedOver(restart)){
  Restart()
  }

if(mousePressedOver(c1)){
c1.changeAnimation(c1Img);
c1.scale=0.07;
a=1;
click++

substate++;
}

if(mousePressedOver(c2)){
  c2.changeAnimation(c2Img);
  c2.scale=0.1;
  b=1;
  click++
 
  substate++;
  }

if(mousePressedOver(c3)){ 
  c3.changeAnimation(c2Img);
  c3.scale=0.1;
  c=1;
  click++

  substate++;
  }

if(mousePressedOver(c4)){ 
  c4.changeAnimation(c3Img);
  c4.scale=0.1;
  d=1;
  click++

  substate++;
  }

if(mousePressedOver(c5)){
  c5.changeAnimation(c1Img);
  c5.scale=0.07;
  e=1;
  click++

  substate++;
  }

if(mousePressedOver(c6)){
  c6.changeAnimation(c3Img);
  c6.scale=0.1;
  f=1;
  click++
  substate++;
   }

   if(a===1 && e===1 && (substate===2 || substate===4 || substate===6)){
    c1.visible=false;
    c5.visible=false;
    score2=score2+1;
    substate=0;
   }

   if(b===1 && c===1 && (substate===2 || substate===4 || substate===6)){
    c2.visible=false;
    c3.visible=false;
    score2=score2+1;
    substate=0;
  }

   if(d===1 && f===1 && (substate===2 || substate===4 || substate===6)){
    c4.visible=false;
    c6.visible=false;
    score2=score2+1;
    substate=0;
  }


if(click===2 || click===4 || click===6){
  if(a===1 && e===0 || d===1 && f===0 || b===1 && c===0 )
  {
  c1.visible=false;
  c2.visible=false;
  c3.visible=false;
  c4.visible=false;
  c5.visible=false;
  c6.visible=false;
  restart.visible=true;
  }
}
  fill("black")
  textSize(30);
  text("Match the cards !!",30,30)
  textSize(35);
  text("Score "+ score2,850,30);
  }
/*if (gamestate===2){

  //clear()
    background(treasure);
    hide();
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  
}*/
  }

  drawSprites()
  
}


function hide() {

  wall1.visible = false; wall2.visible = false; wall3.visible = false; wall4.visible = false; wall5.visible = false;
  wall6.visible = false; wall7.visible = false; wall8.visible = false; wall9.visible = false; wall10.visible = false;
  wall11.visible = false; wall12.visible = false; wall13.visible = false; wall14.visible = false; wall15.visible = false;
  wall16.visible = false; wall17.visible = false; wall18.visible = false; wall19.visible = false; wall20.visible = false;
  wall21.visible = false; wall22.visible = false; wall23.visible = false; wall24.visible = false; wall25.visible = false;
 
  sophia.visible= false;
  cup.visible=false;
}

function Restart(){
  c1.visible=true;
  c2.visible=true;
  c3.visible=true;
  c4.visible=true;
  c5.visible=true;
  c6.visible=true;
  restart.visible=false;
  score2=0;
}














/* wall1.visible = true; wall2.visible = true; wall3.visible = true; wall4.visible = true; wall5.visible = true;
    wall6.visible = true; wall7.visible = true; wall8.visible = true; wall9.visible = true; wall10.visible = true;
    wall11.visible = true; wall12.visible = true; wall13.visible = true; wall14.visible = true; wall15.visible = true;
    wall16.visible = true; wall17.visible = true; wall18.visible = true; wall19.visible = true; wall20.visible = true;
    wall21.visible = true; wall22.visible = true; wall23.visible = true; wall24.visible = true; wall25.visible = true;
    sophia.visible= true;
    cup.visible=true;

fill("yellow");
text("Reach to the key to open the treasure", 460,450);

fill("pink");
textSize(18)
text("Hint: don't touch the black walls....use arrow keys to move", 460,480);

    if (keyDown("UP_ARROW")) {
      sophia.velocityX=0;
   sophia.velocityY=-2;
   }
     
   if (keyDown("DOWN_ARROW")) {
     sophia.velocityX=0;
   sophia.velocityY=2;
   }
   
   if (keyDown("RIGHT_ARROW")) {
     sophia.velocityX=2;
   sophia.velocityY=0;
   }
   
   if (keyDown("LEFT_ARROW")) {
    sophia.velocityX=-2;
   sophia.velocityY=0;
   }

   
   
   
   if (sophia.isTouching(wall1) || sophia.isTouching(wall2) || sophia.isTouching(wall3) || sophia.isTouching(wall4) || sophia.isTouching(wall5) || 
   sophia.isTouching(wall6) || sophia.isTouching(wall7) || sophia.isTouching(wall8) || sophia.isTouching(wall9) || sophia.isTouching(wall10) ||
   sophia.isTouching(wall11) || sophia.isTouching(wall12) || sophia.isTouching(wall13) || sophia.isTouching(wall14) || sophia.isTouching(wall15) ||
   sophia.isTouching(wall16) || sophia.isTouching(wall17) || sophia.isTouching(wall18) || sophia.isTouching(wall19) || sophia.isTouching(wall20) ||
   sophia.isTouching(wall11) || sophia.isTouching(wall22) || sophia.isTouching(wall23) || sophia.isTouching(wall24) || sophia.isTouching(wall25) ){
      sophia.x=379;
      sophia.y=373;
      sophia.velocityX=0;
      sophia.velocityY= 0;
    }

    
if (sophia.isTouching(cup)) {
  sophia.collide(cup);
 //sophia.x=13;
  //sophia.y=43;
sophia.velocityX=0;
   sophia.velocityY= 0;

gamestate=2;
}*/