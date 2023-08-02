const drops = [];

class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.range = [0, 20];
    this.z = random(...this.range);
    this.xspeed = map(this.z, ...this.range, -0.1, 0.1);
    this.yspeed = map(this.z, ...this.range, 0.5, 1);
    this.size = map(this.z, ...this.range, 4, 6);
    this.opacity = 255;
  }
  fall() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    this.opacity -= 0.75;

    if (this.x > width) {
      this.x = 0;
      this.xspeed = map(this.z, ...this.range, -0.1, 0.1);
    }
    if (this.x < 0) {
      this.x = width;
      this.xspeed = map(this.z, ...this.range, -0.1, 0.1);
    }
    if (this.y > height) {
      this.y = 0;
      this.yspeed = map(this.z, ...this.range, 0.5, 1);
      this.opacity = 255;
    }
  }
  show() {
    fill(255, 255, 255, this.opacity);
    ellipse(this.x, this.y, this.size);
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 500; i++) {
    drops.push(new Drop(random(width), random(height)));
  }
}

function draw() {
  background(0);
  drops.forEach((drop) => {
    drop.show();
    drop.fall();
  });
}
