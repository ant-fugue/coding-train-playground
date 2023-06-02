class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
  }

  eat(item) {
    const d = dist(this.x, this.y, item.position.x, item.position.y);
    if (d < 1) {
      return true;
    } else {
      return false;
    }
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
  update() {
    this.x += this.xspeed * SCL;
    this.y += this.yspeed * SCL;

    this.x = constrain(this.x, 0, width - SCL);
    this.y = constrain(this.y, 0, height - SCL);
  }

  show() {
    fill(255);
    rect(this.x, this.y, SCL, SCL);
  }
}
