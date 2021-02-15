var gameState = 0;
var score = 0;
var font;
var run,run2
var runner1,runner2;
var player;
var virus1,virus2,virus3,virus4;
var virus1Img,virus2Img,virus3Img,virus4Img
var button,text,text1,endText
var block1,block2,block3,block4,
block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,
block15,block16,block17,block18,block19,block20,
block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,
block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42,
block43,block44,block45;
var canvas,virusGroup,blockGroup
var antibioticsImg,shotImg,maskImg,sanitizerImg;
var antibiotics,shot,mask,sanitizer,saveGroup,WonText;

function preload(){
font = loadFont("lailaland-font/Laillaland-BWG25.ttf");
runner1 = loadAnimation("Boyrun/run1.gif","Boyrun/run2.gif","Boyrun/run3.gif","Boyrun/run4.gif","Boyrun/run5.gif","Boyrun/run6.gif","Boyrun/run7.gif","Boyrun/run8.gif","Boyrun/run9.gif","Boyrun/run10.gif","Boyrun/run11.gif","Boyrun/run12.gif");
runner2 = loadAnimation("Girlrun/Grun1.gif","Girlrun/Grun2.gif","Girlrun/Grun3.gif","Girlrun/Grun4.gif","Girlrun/Grun5.gif","Girlrun/Grun6.gif","Girlrun/Grun7.gif","Girlrun/Grun8.gif","Girlrun/Grun9.gif","Girlrun/Grun10.gif","Girlrun/Grun11.gif","Girlrun/Grun12.gif","Girlrun/Grun13.gif","Girlrun/Grun14.gif","Girlrun/Grun15.gif");
virus1Img = loadImage("Images/virus1.png");
virus2Img = loadImage("Images/virus2.png");
virus3Img = loadImage("Images/virus3.png");
virus4Img = loadImage("Images/virus4.png");
backgroundImg = loadImage("Images/background.png");
antibioticsImg = loadImage("Images/antibiotics.png");
shotImg = loadImage("Images/injection.png");
maskImg = loadImage("Images/mask.png");
sanitizerImg = loadImage("Images/sanitizer.png")

}

function setup() {
  canvas = createCanvas(1200,800);
  virusGroup = new Group();
  blockGroup = new Group();
  saveGroup = new Group();
  text1 = createElement("h2");
  text1.html("Choose The Character You Want to Play As.")
  text1.position(500,350);
  text1.style('color','red');
  text2 = createElement("h2");

  text2.html("Press START to Start Playing");
  text2.position(500,690);
  text2.style('color','red');
  button = createButton("START");
  text2.hide();

  endText = createElement("h1")
  endText.html("YOU LOST");
  endText.position(520,340);
  endText.style('color','red');
  endText.hide();

  WonText = createElement("h1");
  WonText.html("YOU WON !");
  WonText.position(520,340);
  WonText.style('color','red');
  WonText.hide();


 player = createSprite(700,400,0.1,0.1);
 player.addAnimation("Animation 1",runner1);
 player.addAnimation("Animation 2",runner2);
 player.visible = false;
 player.frameDelay = 0.5;
 

run = createSprite(500,600,20,20);
  run.addAnimation("Animation 1",runner1);
  run.scale = 0.8;
  run.frameDelay = 0.5;

run2 = createSprite(900,600,20,20);
  run2.addAnimation("Animation 2",runner2);
run2.frameDelay = 0.5;

virus1 = createSprite(400,180,10,10)
  virus1.addImage(virus1Img);
  virus1.scale = 0.2
  virus2 = createSprite(270,370,10,10);
  virus2.addImage(virus2Img);
  virus2.scale = 0.2;
  virus3 = createSprite(795,165,10,10);
  virus3.addImage(virus3Img);
  virus3.scale = 0.3
  virus4 = createSprite(925,370,10,10);
  virus4.addImage(virus4Img);
  virus4.scale = 0.2
  block1 = createSprite(600,180,275,10)
  block1.shapeColor = rgb(0,0,153);
  block2 = createSprite(600,218,20,87);
  block2.shapeColor = rgb(0,0,153);
  block3 = createSprite(857,256,15,166);
  block3.shapeColor = rgb(0,0,153);
  block4 = createSprite(784,258,134,10);
  block4.shapeColor = rgb(0,0,153);
  block5 = createSprite(344,256,15,166);
  block5.shapeColor = rgb(0,0,153);
  block6 = createSprite(410,259,135,10);
  block6.shapeColor = rgb(0,0,153);
  block7 = createSprite(600,40,20,140);
  block7.shapeColor = rgb(0,0,153);
  block8 = createSprite(344,449,15,92);
  block8.shapeColor = rgb(0,0,153);
  block9 = createSprite(855,450,15,90);
  block9.shapeColor = rgb(0,0,153);
  block10 = createSprite(600,490,275,10);
  block10.shapeColor = rgb(0,0,153);
  block11 = createSprite(600,531,20,80);
  block11.shapeColor = rgb(0,0,153);
  block12 = createSprite(170,90,105,40);
  block12.shapeColor = rgb(0,0,153);
  block13 = createSprite(405,90,150,35);
  block13.shapeColor = rgb(0,0,153);
  block14 = createSprite(795,90,150,40);
  block14.shapeColor = rgb(0,0,153);
  block15 = createSprite(1025,90,105,40);
  block15.shapeColor = rgb(0,0,153);
  block16 = createSprite(170,180,100,10);
  block16.shapeColor = rgb(0,0,153);
  block17 = createSprite(1029,180,100,10);
  block17.shapeColor = rgb(0,0,153);
  block18 = createSprite(405,567,140,10);
  block18.shapeColor = rgb(0,0,153);
  block19 = createSprite(795,567,140,10);
  block19.shapeColor = rgb(0,0,153);
  block20 = createSprite(900,720,355,8);
  block20.shapeColor = rgb(0,0,153);
  block21 = createSprite(600,645,275,10);
  block21.shapeColor = rgb(0,0,153);
  block22 = createSprite(300,720,355,8);
  block22.shapeColor = rgb(0,0,153);
  block23 = createSprite(600,685,20,80);
  block23.shapeColor = rgb(0,0,153);
  block24 = createSprite(857,680,15,80);
  block24.shapeColor = rgb(0,0,153);
  block25 = createSprite(345,680,15,80);
  block25.shapeColor = rgb(0,0,153);
  block26 = createSprite(1150,645,85,10);
  block26.shapeColor = rgb(0,0,153);
  block27 = createSprite(55,645,85,10);
  block27.shapeColor = rgb(0,0,153);
  block28 = createSprite(215,607,15,80);
  block28.shapeColor = rgb(0,0,153);
  block29 = createSprite(170,567,100,10);
  block29.shapeColor = rgb(0,0,153);
  block30 = createSprite(985,607,15,80);
  block30.shapeColor = rgb(0,0,153);
  block31 = createSprite(1030,567,100,10);
  block31.shapeColor = rgb(0,0,153);
  block32 = createSprite(20,130,20,250);
  block32.shapeColor = rgb(0,0,153);
  block33 = createSprite(600,10,1200,15);
  block33.shapeColor = rgb(0,0,153);
  block34 = createSprite(1180,130,20,225);
  block34.shapeColor = rgb(0,0,153);
  block35 = createSprite(120,245,220,10);
  block35.shapeColor = rgb(0,0,153);
  block36 = createSprite(235,375,20,270);
  block36.shapeColor = rgb(0,0,153);
  block37 = createSprite(1080,245,220,10);
  block37.shapeColor = rgb(0,0,153);
  block38 = createSprite(965,375,20,270);
  block38.shapeColor = rgb(0,0,153);
  block39 = createSprite(120,503,220,10);
  block39.shapeColor = rgb(0,0,153);
  block40 = createSprite(20,650,20,280);
  block40.shapeColor = rgb(0,0,153);
  block41 = createSprite(600,780,1200,15);
  block41.shapeColor = rgb(0,0,153);
  block42 = createSprite(1060,503,220,10);
  block42.shapeColor = rgb(0,0,153);
  block43 = createSprite(1180,640,20,280);
  block43.shapeColor = rgb(0,0,153);

  antibiotics = createSprite(1140,70,10,10);
  antibiotics.addImage(antibioticsImg);
  antibiotics.scale = 0.2;

  shot = createSprite(55,750,10,10);
  shot.addImage(shotImg);
  shot.scale = 0.2;

  mask = createSprite(1110,750,10,10);
  mask.addImage(maskImg);
  mask.scale = 0.5;

  sanitizer = createSprite(1115,560,10,10);
  sanitizer.addImage(sanitizerImg);
  sanitizer.scale = 0.5;

  saveGroup.add(antibiotics);
  saveGroup.add(shot);
  saveGroup.add(mask);
  saveGroup.add(sanitizer);
  saveGroup.setVisibleEach(false);

  virusGroup.add(virus1);
  virusGroup.add(virus2);
  virusGroup.add(virus3);
  virusGroup.add(virus4);
  virusGroup.setVisibleEach(false);

  blockGroup.add(block1);
  blockGroup.add(block2);
  blockGroup.add(block3);
  blockGroup.add(block4);
  blockGroup.add(block5);
  blockGroup.add(block6);
  blockGroup.add(block7);
  blockGroup.add(block8);
  blockGroup.add(block9);
  blockGroup.add(block10);
  blockGroup.add(block11);
  blockGroup.add(block12);
  blockGroup.add(block13);
  blockGroup.add(block14);
  blockGroup.add(block15);
  blockGroup.add(block16);
  blockGroup.add(block17);
  blockGroup.add(block18);
  blockGroup.add(block19);
  blockGroup.add(block20);
  blockGroup.add(block21);
  blockGroup.add(block22);
  blockGroup.add(block23);
  blockGroup.add(block24);
  blockGroup.add(block25);
  blockGroup.add(block26);
  blockGroup.add(block27);
  blockGroup.add(block28);
  blockGroup.add(block29);
  blockGroup.add(block30);
  blockGroup.add(block31);
  blockGroup.add(block32);
  blockGroup.add(block33);
  blockGroup.add(block34);
  blockGroup.add(block35);
  blockGroup.add(block36);
  blockGroup.add(block37);
  blockGroup.add(block38);
  blockGroup.add(block39);
  blockGroup.add(block40);
  blockGroup.add(block41);
  blockGroup.add(block42);
  blockGroup.add(block43);

  blockGroup.setVisibleEach(false);
}

function draw() {

if(player.isTouching(virusGroup) && gameState == 2){
  virusGroup.setVisibleEach = false;
  blockGroup.setVisibleEach = false;
  saveGroup.setVisibleEach = false;
  player.visible = false;
  endText.show();
}

if(player.isTouching(saveGroup) && gameState == 2){
  virusGroup.setVisibleEach = false;
  blockGroup.setVisibleEach = false;
  saveGroup.setVisibleEach = false;
  player.visible = false;
  WonText.show();
}

  if(gameState == 0){
    virusGroup.setVisibleEach(false);
    blockGroup.setVisibleEach(false);
    saveGroup.setVisibleEach(false);
    
  
  background(0);
  textSize(28);
  fill("Red");
  textFont(font);
  //text("Choose The Character You Want to Play As.",displayWidth/2-170,displayHeight/2-80);




  if(mousePressedOver(run)){
    player.changeAnimation("Animation 1",runner1);
    player.visible = true;
    player.scale = 0.8;
    run.visible = false;
    run2.visible = false;
    text1.hide();
    text2.show();
    button.position(660,600);

  }
  else if(mousePressedOver(run2)){
    player.changeAnimation("Animation 2", runner2);
    player.visible = true;
    player.scale = 0.8
    player.frameDelay = 0.5;
    run.visible = false;
    run2.visible = false;
    text1.hide();
    text2.show();
    button.position(700,600);
  }
button.mousePressed(function(){
  gameState = 1;
}

  );
}
  else if(gameState == 1){
    
    start();
  player.scale = 0.5;
  player.x = 65
  player.y = 65
    gameState = 2
  }

  else if(gameState == 2){
    background(backgroundImg);
   button.hide();
  
  virusGroup.setVisibleEach(true);
  blockGroup.setVisibleEach(true);
  saveGroup.setVisibleEach(true);

    player.scale = 0.1
    if(keyDown(DOWN_ARROW)){
      player.y = player.y + 5;
    }

    if(keyDown(UP_ARROW)){
      player.y = player.y - 5;
    }

    if(keyDown(RIGHT_ARROW)){
      player.x = player.x + 5;
    }

    if(keyDown(LEFT_ARROW)){
      player.x = player.x - 5; 
    }
    virus1.bounceOff(block6);
    virus1.bounceOff(block13);
    virus2.bounceOff(block22);
    virus2.bounceOff(block33);
    virus4.bounceOff(block20);
    virus4.bounceOff(block33);
    virus3.bounceOff(block4);
    virus3.bounceOff(block14);

    player.collide(block1);
    player.collide(block2);
    player.collide(block3);
    player.collide(block4);
    player.collide(block5);
    player.collide(block6);
    player.collide(block7);
    player.collide(block8);
    player.collide(block9);
    player.collide(block10);
    player.collide(block11);
    player.collide(block12);
    player.collide(block13);
    player.collide(block14);
    player.collide(block15);
    player.collide(block16);
    player.collide(block17);
    player.collide(block18);
    player.collide(block19);
    player.collide(block20);
    player.collide(block21);
    player.collide(block22);
    player.collide(block23);
    player.collide(block24);
    player.collide(block25);
    player.collide(block26);
    player.collide(block27);
    player.collide(block28);
    player.collide(block29);
    player.collide(block30);
    player.collide(block31);
    player.collide(block32);
    player.collide(block33);
    player.collide(block34);
    player.collide(block35);
    player.collide(block36);
    player.collide(block37);
    player.collide(block38);
    player.collide(block39);
    player.collide(block40);
    player.collide(block41);
    player.collide(block42);
    player.collide(block43);
  }

  drawSprites();
  fill("red");
  textSize(20);
  

  

}
function start(){
  textFont(font);
  background(backgroundImg);
  button.hide();
  
  virusGroup.setVisibleEach(true);
  blockGroup.setVisibleEach(true);
  
  text2.hide();
  
  virus1.velocityY = 4;
  virus2.velocityY = 20;
  virus3.velocityY = 3;
  virus4.velocityY = 20;
}