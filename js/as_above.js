var nextfont;

var font;

var img;

function preload(){
  nextfont = loadFont('fonts/SystemaEncephale.ttf');
  font = loadFont('fonts/SpecialElite-Regular.ttf');
  img = loadImage('img/toolsun.png');
}

let posX;
let posY;

let posX2;
let posY2;

let posX3;
let posY3;

let distance;
let distance2;
let distance3;
let threshold = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  posX = (width*(5/48));
  posY = (height*(10/27));
  
  posX2 = width*(11/24);
  posY2 = (height*(13/27));
  
  posX3 = width*(13/48);
  posY3 = (height*(37/54));
}

function draw(){
  background(0);
  image(img, -35,0, window.innerWidth*(23/60),window.innerHeight*(8/15));
  
  fill('white');
  textSize(28);
  textFont(font);
  text('as below',posX, posY);
  
  text('so above and beyond', posX2 , posY2);
  
  text('i imagine', posX3, posY3);

  distance = dist(mouseX, mouseY, posX, posY);
  distance2 = dist(mouseX, mouseY, posX2, posY2);
  distance3 = dist(mouseX, mouseY, posX3, posY3);
  
  if (distance < threshold) {
    if (mouseX < posX) {
      posX = posX + 1;
    } else if (mouseX > posX) {
      posX = posX - 1;
    }
    
    if (mouseY < posY) {
      posY = posY + 1;
    } else if (mouseY > posY) {
      posY = posY - 1;
    }
  }
  
  if (distance2 < threshold) {
    if (mouseX < posX2) {
      posX2 = posX2 + 1;
    } else if (mouseX > posX2) {
      posX2 = posX2 - 1;
    }
    
    if (mouseY < posY2) {
      posY2 = posY2 + 1;
    } else if (mouseY > posY2) {
      posY2 = posY2 - 1;
    }
  }
  
  if (distance3 < threshold) {
    if (mouseX < posX3) {
      posX3 = posX3 + 1;
    } else if (mouseX > posX3) {
      posX3 = posX3 - 1;
    }
    
    if (mouseY < posY3) {
      posY3 = posY3 + 1;
    } else if (mouseY > posY3) {
      posY3 = posY3 - 1;
    }
  }
  
//   fill('white');
//   textSize(18);
//   textFont(nextfont);
//   text('nexT', 805, 450 );
  
}



