const SCL = 20;

let s;
let food;

function setup() {
  frameRate(10);
  createCanvas(400, 400);
  s = new Snake();
  f = new Food();
}

function draw() {
  background(51);

  if (s.isDead()) {
    alert("game over");
    location.reload();
  }
  s.update();
  if (s.eat(f)) {
    f.pickLocation();
  }
  s.show();
  f.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.changeDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.changeDir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.changeDir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.changeDir(-1, 0);
  }
}
