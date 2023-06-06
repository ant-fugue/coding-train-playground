const flock = [];

let alignmentSlider;
let cohesionSlider;
let separationSlider;

function setup() {
  createCanvas(640, 360);
  alignmentSlider = createSlider(0, 5, 1, 0.1);
  createP("alignment");
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  createP("cohesion");
  separationSlider = createSlider(0, 5, 1, 0.1);
  createP("separation");
  for (let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(51);

  for (let boid of flock) {
    boid.edge();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
}
