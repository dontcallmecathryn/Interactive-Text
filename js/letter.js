class Letter {
  constructor() {
    this.t = random(colors);
    this.reset();
  }
  
  update(x, y, w, h) {
    if (this.collide(x, y, w, h)) {
      if (this.t === 'red'){
        this.c = color('red');
      } else if (this.t === 'yellow'){
        this.c = color('yellow');
      } else {
        this.c = color('white');
      }
    }else {
      this.y += this.dy;
      if (this.y > y + h) {
    this.alpha -= 5; 
    this.alpha = max(this.alpha, 0); 
  } else {
    this.alpha = 255; 
  }

  this.c = color(255, this.alpha); 
}
    
    if (this.y + this.h > height) {
      this.reset();
    }
    
  }
  
  reset() {
    this.x0 = random(width);
    this.y0 = random(-50, -10);
    this.size = random(13, 30);
    this.alpha = 255;
    
    this.c = 0;
    
    let bbox = font.textBounds(this.t, this.x0, this.y0, this.size);
    this.x = bbox.x; 
    this.y = bbox.y; 
    this.w = bbox.w;
    this.h = bbox.h;
    
    this.dy = map(this.size, 13, 30, 0.4, 2);
  }
  
  display() {
    // noFill();
    // stroke(0);
    // rect(this.x, this.y, this.w, this.h);

    noStroke();
    fill(this.c);
    textFont(font);
    textSize(this.size);
    text(this.t, this.x, this.y + this.h);
  }
  
  collide(x, y, w, h) {
    let right = x + w;
    let left = x;
    let top = y; 
    let bottom = y+h;
    
    if (right >= this.x && 
       left <= this.x + this.w &&
       top <= this.y + this.h &&
       bottom >= this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
}