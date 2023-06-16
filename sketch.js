const cols = 5;
const rows = 5;
const grid = new Array(cols);

const openSet = [];
const closedSet = [];
let start;
let end;

class Spot {
  constructor() {
    this.f = 0;
    this.g = 0;
    this.h = 0;
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }

  // making spots
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Spot();
    }
  }

  // setting the starting point and the goal
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  openSet.push(start);
}

function draw() {
  background(0);
}
