// grid-related variables
const cols = 5;
const rows = 5;
const grid = new Array(cols);
let w;
let h;

// pathfiding-related variables
const openSet = [];
const closedSet = [];
let start;
let end;

class Spot {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
  }

  show(color) {
    fill(color);
    noStroke(0);
    rect(this.x * w, this.y * h, w - 1, h - 1);
  }
}

function setup() {
  createCanvas(400, 400);
  w = width / cols;
  h = height / rows;

  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  // making spots
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  // setting the starting point and the goal
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  openSet.push(start);
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  closedSet.forEach((elem) => elem.show(color(255, 0, 0)));
  openSet.forEach((elem) => elem.show(color(0, 255, 0)));
}
