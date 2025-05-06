var nextfont;

var font;

var pupil;

var eye;

var mapPupilX;

var mapPupilY;

// let string1 = ["all", "i", "see"];

// let string2 = ["in", "my", "infancy"];

let string1 = "all i see";

let string2 = "in my infancy";

function preload() {
  nextfont = loadFont('fonts/SystemaEncephale.ttf');
  font = loadFont('fonts/SpecialElite-Regular.ttf');
  pupil = loadImage('img/toolpupil.png')
  eye = loadImage('img/tooleyenopupil.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill("white");
  textFont(font);
  noCursor();
}

function draw(){
  // mapPupilX = map(mouseX, 0, width, 398, 483);
  // mapPupilY = map(mouseY, 0, height, 330, 355);
  
  mapPupilX = constrain(mouseX, width*(199/480), width*(161/320));
  mapPupilY = constrain(mouseY, height*(11/18), height*(77/108));
  
  background(0);
  
  imageMode(CENTER);
  image(pupil, mapPupilX, mapPupilY);
  
  imageMode(CORNER);
  // image(eye, width*(5/16), ((height/4) -70),);
  image(eye, width*(5/16), (height/4 -70), window.innerWidth*(29/96), window.innerHeight*(193/270));
  
  // fill('pink');
  // noStroke;
  // rect(398, 330, 85, 55)
  
  let mouseX2 = constrain(mouseX, width*(199/480), width*(161/320));
  let reveal = (mouseX2 - width*(199/480)) / 85;
  
  let text1Words = floor(map(constrain(reveal, 0, 0.5), 0, 0.5, 0, string1.length + 1));
  let text2Words = floor(map(constrain(reveal, 0.75, 1), 0.75, 1, 0, string2.length + 1));
  
  let text1 = string1.slice(0, text1Words);
  let text2 = string2.slice(0, text2Words);
  
  fill('white');
  textSize(28);
  textFont(font);
  text(text1,(width*.25), height*.2);
  text(text2, (width*.50), height*.2);
 
  // textFont(nextfont);
  // text('nexT', width*(161/192), height*(5/6));

//   fill('white');
//   textSize(18);
//   textFont(nextfont);
//   text('nexT', 805, 450);
  
}
