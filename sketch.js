let s;

function setup() {
  createCanvas(400, 400);
  s = new Snake();
}

function draw() {
  background(51);
  s.update();
  s.show();
}

class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
  }
  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  show() {
    fill(255);
    rect(this.x, this.y, 10, 10);
  }
}
