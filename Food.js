class Food {
  constructor() {
    this.x = floor(random(width / SCL)) * SCL;
    this.y = floor(random(height / SCL)) * SCL;
  }
  show() {
    fill(255, 0, 100);
    rect(this.x, this.y, SCL, SCL);
  }

  pickLocation() {
    this.x = floor(random(width / SCL)) * SCL;
    this.y = floor(random(height / SCL)) * SCL;
  }
}
