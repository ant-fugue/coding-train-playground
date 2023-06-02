class Food {
  constructor() {
    this.cols = floor(width / SCL);
    this.rows = floor(height / SCL);
    this.position = createVector(
      floor(random(this.cols)),
      floor(random(this.rows))
    ).mult(SCL);
  }
  show() {
    fill(255, 0, 100);
    rect(this.position.x, this.position.y, SCL, SCL);
  }

  pickLocation() {
    this.cols = floor(width / SCL);
    this.rows = floor(height / SCL);
    this.position = createVector(
      floor(random(this.cols)),
      floor(random(this.rows))
    ).mult(SCL);
  }
}
