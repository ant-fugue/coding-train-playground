class Drop {
  constructor() {
    this.x = width / 2;
    this.y = 0;
    this.yspeed = 1;
  }

  fall() {
    this.y = this.y + this.yspeed;
  }

  show() {
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + 10);
  }
}
