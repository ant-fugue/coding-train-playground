class Boid {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
  }

  // steer towards the average heading of local flockmates
  align(boids) {
    const perceptionRadius = 50;
    const steering = createVector();
    let total = 0;
    for (const other of boids) {
      const d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other !== this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      // this is the average heading velocity
      steering.div(total);
      // the steering velocity = the average heading velocity - the boid velocity
      steering.sub(this.velocity);
    }
    return steering;
  }

  // force = math * acceleration
  // assuming that the math of all boids are the same,
  // in this simulation force = accleration
  flock(boids) {
    const alignment = this.align(boids);
    this.acceleration = alignment;
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  }

  show() {
    strokeWeight(8);
    stroke(255);
    point(this.position.x, this.position.y);
  }
}
