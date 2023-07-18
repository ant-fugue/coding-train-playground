let inc = 0.01;
let xoff = 0.01;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  beginShape();
  let xoff = 0.01;
  for (let x = 0; x < width; x++) {
    stroke(255);
    let y = noise(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  inc += 0.001;

  // noLoop();
}
