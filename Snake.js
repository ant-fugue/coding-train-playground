class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 1;
    this.tail = [];
  }

  eat(item) {
    const d = dist(this.x, this.y, item.position.x, item.position.y);
    if (d < 1) {
      // every time the snake eats the food, it increases its length
      this.total++;
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
    // if the snake hasn't eaten the food, update its location in every frame
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    // if the snake has eaten the food, inject its position to the end of the snake array
    // push cannot be used because push adds element every frame in this case
    this.tail[this.total - 1] = createVector(this.x, this.y);
    this.x += this.xspeed * SCL;
    this.y += this.yspeed * SCL;

    this.x = constrain(this.x, 0, width - SCL);
    this.y = constrain(this.y, 0, height - SCL);
  }

  show() {
    fill(255);
    this.tail.forEach((elem) => rect(elem.x, elem.y, SCL, SCL));
  }
}
