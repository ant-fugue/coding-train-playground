const SCL = 20;

let s;
let food;

function setup() {
  frameRate(10);
  createCanvas(400, 400);
  s = new Snake();
  pickLocation();
}

function pickLocation() {
  const cols = floor(width / SCL);
  const rows = floor(height / SCL);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(SCL);
}

function draw() {
  background(51);
  s.update();
  s.show();

  if (s.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, SCL, SCL);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
