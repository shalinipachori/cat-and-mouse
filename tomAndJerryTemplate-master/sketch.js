var catImg,mouseImg,gardenImg;
function preload() {
  catImg=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
  gardenImg=loadImage("images/garden.png");
  mouseImg=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(850,600);
    cat.addAnimation(catImg);
    mouse=createSprite(750,600);
    mouse.addAnimation(mouseImg);
}

function draw() {

    background(gardenImg);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
      cat.velocityX=0;
      cat.addAnimation("catLastImage", catImg3);
      cat.x =300;
      cat.scale=0.2;
      cat.changeAnimation("catLastImage");
      mouse.addAnimation("mouseLastImage", mouseImg3);
      mouse.scale=0.15;
      mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouse", mouseImg2);
    mouse.changeAnimation("mouse");
  }


}
