var nextfont;

var font;

var img1;

var img2;

function preload(){
  nextfont = loadFont('../fonts/SystemaEncephale.ttf');
  font = loadFont('../fonts/SpecialElite-Regular.ttf');
  img1 = loadImage('../img/creepyeye.jpg');
  img2 = loadImage('../img/creepyeye2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(0);
  image(img1, width*(15/32), height*(7/18), window.innerWidth*(5/12),window.innerHeight *(8/15)); 
  image(img2,0,0)
  
  fill('white');
  textSize(28);
  textFont(font);
  text('drawn beyond',width*(5/48), height*(2/9));
  text('the lines of reason', mouseX, height/2);
  
  // fill('white');
  // textSize(18);
  // textFont(nextfont);
  // text('nexT', 805, 450 );
  
}



