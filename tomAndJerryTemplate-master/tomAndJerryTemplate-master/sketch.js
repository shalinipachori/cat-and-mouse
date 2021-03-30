var catImg,mouseImg,gardenImg,catSitting;
function preload() {
  catSitting = loadAnimation("images/cat1.png");
  catstanding = loadAnimation("images/cat4.png");
  catImg=loadAnimation("images/cat2.png","images/cat3.png");
  gardenImg=loadImage("images/garden.png");
  mouseImg=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(850,600);
    cat.addAnimation("catSitting",catSitting);
    cat.addAnimation("catwalking",catImg);
    cat.addAnimation("catLastImage",catstanding);
    mouse=createSprite(750,600);
    mouse.addAnimation(mouseImg);
}

function draw() {

    background(gardenImg);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
      cat.velocityX=0;
      cat.changeAnimation("catwalking");
      cat.x =300;
      cat.scale=0.2;
      cat.changeAnimation("catLastImage",catstanding);
     // mouse.addAnimation("mouseLastImage", mouseImg3);
     // mouse.scale=0.15;
     // mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.changeAnimation("catwalking");
    
    mouse.addAnimation("mouse", mouseImg2);
    mouse.changeAnimation("mouse");
  }


}
