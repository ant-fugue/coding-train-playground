class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;

    // in this game, speed does not change, so dir is the more relevant name
    this.xdir = 1;
    this.ydir = 0;

    this.total = 1;
    this.tail = [];
  }

  eat(item) {
    const d = dist(this.x, this.y, item.x, item.y);
    if (d < 1) {
      // every time the snake eats the food, it increases its length
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  changeDir(xdir, ydir) {
    this.xdir = xdir;
    this.ydir = ydir;
  }

  isDead() {
    // if the snake touches itself, it dies
    for (let i = 0; i < this.tail.length; i++) {
      const pos = this.tail[i];
      const d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        return true;
      } else {
        return false;
      }
    }
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
    // initially this.tail is empty, but this line adds the first position
    this.tail[this.total - 1] = createVector(this.x, this.y);

    // The order is important
    // if these two lines are placed before lines above, the distance between the head position and the starting positionis always the same,
    // so the game is over immidiately
    this.x += this.xdir * SCL;
    this.y += this.ydir * SCL;

    this.x = constrain(this.x, 0, width - SCL);
    this.y = constrain(this.y, 0, height - SCL);
  }

  show() {
    fill(255);
    this.tail.forEach((elem) => rect(elem.x, elem.y, SCL, SCL));
  }
}
