let drops = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 100; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  drops.forEach((d) => {
    d.fall();
    d.show();
  });
}
