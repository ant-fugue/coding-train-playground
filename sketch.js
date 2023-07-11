function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  const x = map(noise(100), 0, 1, 0, width);

  ellipse(x, 200, 24, 24);
}
