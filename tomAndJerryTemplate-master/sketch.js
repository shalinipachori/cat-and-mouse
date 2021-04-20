var catStanding, catSitting, catWalking;
var mouseStanding, mouseWithCheese, mouseWalking;
var gardenImg;

function preload() {
  catSitting=loadAnimation("images/cat1.png");
  catWalking = loadAnimation("images/cat2.png","images/cat3.png");
  catStanding = loadAnimation("images/cat4.png");
  mouseWithCheese = loadAnimation("images/mouse1.png");
  mouseWalking = loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseStanding = loadAnimation("images/mouse4.png");
  gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(850,600);
    cat.addAnimation("catSitting", catSitting);
    cat.addAnimation("catWalking", catWalking);
    cat.addAnimation("catStanding", catStanding);    
    cat.scale = 0.15;

    mouse=createSprite(250,600);
    mouse.addAnimation("mouseWithCheese", mouseWithCheese);
    mouse.addAnimation("mouseWalking", mouseWalking);
    mouse.addAnimation("mouseStanding", mouseStanding);    
    mouse.scale = 0.1;
}

function draw() {
    background(gardenImg);
    
    if((cat.x - mouse.x) <= (cat.width - mouse.width)/2) { 
      cat.velocityX=0;
      cat.changeAnimation("catStanding", catStanding);
      cat.x = 300;
      
      mouse.changeAnimation("mouseStanding", mouseStanding);
    }  

    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.changeAnimation("catWalking", catWalking);    
    mouse.changeAnimation("mouseWalking", mouseWalking);
  }
}
