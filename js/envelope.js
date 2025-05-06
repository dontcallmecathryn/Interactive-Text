var nextfont;
var font;
let eHeight, eWidth, eRadius;
let lyric= false;
var displayedAnchor = false;

function preload() {
  nextfont = loadFont('fonts/SystemaEncephale.ttf');
  font = loadFont('fonts/SpecialElite-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill("white");
  textFont(font);

  eWidth= width/2;
  eHeight= height/2;
  eRadius= width*(1/32);
}

function draw() {
  textFont(font);
  textSize(28);
  fill('white')
  textAlign(CENTER);
  text('push the envelope', width/2, height*.2);
  
  // envelope
  rectMode(CENTER);
  fill('white')
  rect(width/2,height/2,width*(35/96),height*(10/27));
  stroke('black');
  line(width*(61/192), height*(17/54), width*(1/2), height*(1/2));
  line(width*(1/2),height*(1/2),width*(131/192),height*(17/54));
  // seal
  noStroke();
  fill('red')
  ellipse(eWidth,eHeight,eRadius);
  
  if (lyric){
  // background(0);
  textFont(font);
  textSize(28);
  fill('white')
  textAlign(CENTER);
  text('watch it bend', width/2, height*(7/27));

// add bended envelope here 
    
  if (mouseX<width/2 & mouseX>width/4){
    fill('black')
    triangle(width*(192/61), height* (54/17),width*(48/17),height* (108/55),width*(192/61),height* (54/37))
    }
  if (mouseX>width/2 & mouseX<width*(5/8)){
    fill('black')
   triangle(width*(192/131), height* (54/17),width*(48/31),height* (108/55),width*(192/131),height* (54/37))
    }
  }
}

function mouseClicked(){
  let distance = dist(mouseX, mouseY,eWidth,eHeight);
  if (distance<= eRadius && !displayedAnchor){
    lyric = true;

    let nextButton = createA('index.html', "bAcK tO thE begiNNiNG");
      nextButton.id('back-to-beginning-button');
      displayedAnchor = true;
} 


}
