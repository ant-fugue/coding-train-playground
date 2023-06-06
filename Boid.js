class Boid {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(2, 4));
    this.acceleration = createVector();
    this.maxForce = 0.2;
    this.maxSpeed = 4;
    this.perceptionRadius = 100;
  }

  edge() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

  // steer towards the average heading of local flockmates
  align(boids) {
    const steering = createVector();
    let total = 0;
    for (const other of boids) {
      const d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other !== this && d < this.perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      // this is the average heading velocity
      steering.div(total);
      // the magnitude of flocks is the same
      steering.setMag(this.maxSpeed);
      // the steering velocity = the average heading velocity - the boid velocity
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  // steer to move toward the average position of local flockmates
  cohere(boids) {
    const steering = createVector();
    let total = 0;
    for (const other of boids) {
      const d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other !== this && d < this.perceptionRadius) {
        steering.add(other.position);
        total++;
      }
    }
    if (total > 0) {
      // this is the average position of local flockmates
      steering.div(total);
      // get the velocity from the  current position to the average position
      steering.sub(this.position);
      // the magnitude of flocks is the same
      steering.setMag(this.maxSpeed);
      // the steering velocity = the average heading velocity - the boid velocity
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  // steer to avoid crowding local flockmates
  separate(boids) {
    const steering = createVector();
    let total = 0;
    for (const other of boids) {
      const d = dist(
        this.position.x,
        this.position.y,
        other.position.x,
        other.position.y
      );
      if (other !== this && d < this.perceptionRadius) {
        const diff = p5.Vector.sub(this.position, other.position);
        // The further the distance, the lower the avoiding magnitude
        diff.div(d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      // this is the average position of local flockmates
      steering.div(total);
      // the magnitude of flocks is the same
      steering.setMag(this.maxSpeed);
      // the steering velocity = the average heading velocity - the boid velocity
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  // force = math * acceleration
  // assuming that the math of all boids are the same,
  // in this simulation force = accleration
  flock(boids) {
    const alignment = this.align(boids);
    const cohesion = this.cohere(boids);
    const separation = this.separate(boids);
    this.acceleration.add(separation);
    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  show() {
    strokeWeight(8);
    stroke(255);
    point(this.position.x, this.position.y);
  }
}
