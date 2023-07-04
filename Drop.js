class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -100);
    this.yspeed = random(4, 10);
    // used to coordinate the value of length, yspeed and thickness of each drop
    // the longer, the faster, and the thicker <-> the shorter, the slower, and the thinner
    this.range = [0, 20];
    this.z = random(...this.range);
    this.len = map(this.z, ...this.range, 10, 20);
    this.yspeed = map(this.z, ...this.range, 1, 15);
    this.gravity = map(this.z, ...this.range, 0.01, 0.2);
  }

  fall() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + this.gravity;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, ...this.range, 1, 15);
    }
  }

  show() {
    const thickness = map(this.z, ...this.range, 1, 3);
    strokeWeight(thickness);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}
