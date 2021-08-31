var bckgrd,bg;
var astronaut,sleep;
var bath,brush,moving,eat,gym;
var  bathA,brushA,movingA,eatA,gymA;


function preload(){
bg=loadImage("iss.png");
sleep=loadImage("sleep.png");
brushA=loadAnimation("brush.png");
gymA=loadAnimation("gym1.png","gym2.png");
eatA=loadAnimation("eat1.png","eat2.png");
bathA=loadAnimation("bath1.png","bath2.png");
movingA=loadAnimation("move.png");
}


function setup(){
createCanvas(1500,1500);
 bckgrd = createSprite(200,200,20,20);
bckgrd.addImage("ex" ,bg );
bckgrd.scale=0.5;

astronaut=createSprite(400,300,50,50);
astronaut.addImage("sleep" , sleep);
astronaut.scale=0.1;
















}














function draw(){
background("yellow");

if(keyDown(UP_ARROW)){
astronaut.addAnimation("brushing",brushA);
astronaut.changeAnimation("brushing");
astronaut.y=350;
}

if(keyDown(DOWN_ARROW)){
astronaut.addAnimation("gymmimg",gymA);
astronaut.changeAnimation("gymmimg");
astronaut.y=500;

}


if(keyDown(LEFT_ARROW)){
astronaut.addAnimation("eating",eatA);
astronaut.changeAnimation("eating");
astronaut.x=700
}

if(keyDown(RIGHT_ARROW)){
astronaut.addAnimation("bathing",bathA);
astronaut.changeAnimation("bathing");
astronaut.y=500;
astronaut.x=500;
}

if(keyDown("m")){
   astronaut.addAnimation("moving",movingA);
    astronaut.changeAnimation("moving");
    }

if(keyDown("enter")){
astronaut.changeAnimation("sleep")


}



drawSprites();
}