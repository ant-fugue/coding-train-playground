class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
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
