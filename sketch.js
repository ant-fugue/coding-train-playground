let d;

function setup() {
  createCanvas(400, 400);
  d = new Drop();
  console.log(d);
}

function draw() {
  background(230, 230, 250);
  d.fall();
  d.show();
}
