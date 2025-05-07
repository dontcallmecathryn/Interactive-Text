var nextfont;
var wordCount = 0;
var displayedAnchor = false;
var font;

function preload() {
  nextfont = loadFont('fonts/SystemaEncephale.ttf');
  font = loadFont('fonts/SpecialElite-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill('white');
  textFont(font);
  text("(press any key)", width*(15/32), height*(24/27));
}

function keyPressed() {
  if (keyIsPressed === true) {
    
    if (wordCount == 0) {
      fill("white");
      textSize(28);
      textFont(font);
      text("black", (width*(11/96)), height*(7/27));
      fill("black");
      noStroke();
      rect(width*(15/32), height*(23/27), width*(3/32), height*(2/27));
    }
    
    if (wordCount == 1) {
      fill("white");
      textSize(28);
      textFont(font);
      text("then ", width*(35/96), height*(17/27));
      // fill("black");
    }
    
    if (wordCount == 2) {
      background('white')
      fill("black");
      textSize(28);
      textFont(font);
      text("white ", width*(2/3), height*(1/3));
      // fill("white");
    }
    
    if (wordCount == 3) {
      fill("black");
      textSize(28);
      textFont(font);
      text("are ", width*(5/12), height*(1/2));
      // fill("white");
    }
    
      if (wordCount == 4 && !displayedAnchor) {
    
      let nextButton = createA('page2.html', "nexT");
      nextButton.id('next-button');
      displayedAnchor = true;
    }


    
    wordCount += 1;
    
  }
}
