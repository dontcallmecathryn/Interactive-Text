var nextfont;
var font;
var img;

var displayedAnchor = false;

function preload() {
  nextfont = loadFont('fonts/SystemaEncephale.ttf');
  font = loadFont('fonts/SpecialElite-Regular.ttf');
  img = loadImage("img/blkwh.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill("white");
  textFont(font);
}

function draw() {
  image(img,0,0,window.innerWidth,window.innerHeight);
  // let x = mouseX;
  // let y = mouseY;
  let ix = width - mouseX;
  let iy = height - mouseY;
  textFont(font);
  textSize(28);
  text("reaching out", mouseX, height / 2, mouseY, mouseY);
  text("to me", ix, height / 2, iy, iy);

  if (mouseX >= (width / 2) && !displayedAnchor) {
    textFont(font);
    textAlign(CENTER);
    text("lets me see", width / 2, height*(16/27));
    // textSize(18);
    // textAlign(LEFT)
    // textFont(nextfont);
    // text('nexT', width*(161/192), height*(5/6));

    let nextButton = createA('page5.html', "nexT");
      nextButton.id('next-button2');
      displayedAnchor = true;
  }
}
