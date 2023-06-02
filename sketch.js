let s;

function setup() {
  createCanvas(400, 400);
  s = new Snake();
}

function draw() {
  background(51);
  s.update();
  s.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
  }
}
