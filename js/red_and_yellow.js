var nextfont;
var font;

let colors = ['red','and','yellow'];

let letters = [];
let num = 50;
let x; let y = 260; let w = 200; let h = 5;

function preload() {
  nextfont = loadFont('fonts/SystemaEncephale.ttf');
  font = loadFont('fonts/SpecialElite-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill("white");
  textFont(font);
  for (let i=0; i<num; i++) {
    letters[i] = new Letter();
  }
}

// credits to Patt Vira on Youtube for the tutorial

function draw() {
  background(0);
  fill('white')
  x = mouseX
  rect(x,y,w,h);
  textAlign(CENTER)
  textSize(28)
  textFont(font)
  text('then came to be', width/2, (height*.75))
  
  for (let i=0; i<num; i++) {
    letters[i].update(x, y, w, h);
    letters[i].display();
  }

  // fill('white');
  // textSize(18);
  // textFont(nextfont);
  // text('nexT', 805, 450 );
  
}
