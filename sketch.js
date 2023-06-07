let values = [];

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < width; i++) {
    values.push(random(height));
  }
}

function draw() {
  background(0);
  values.forEach((elem, i) => {
    stroke(255);
    line(i, height, i, height - elem);
  });
}
