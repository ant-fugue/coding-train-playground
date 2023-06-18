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
    this.neighbors = [];
  }

  addNeighbors(grid) {
    const i = this.i;
    const j = this.j;
    if (0 < i) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (0 < j) {
      this.neighbors.push(grid[i][j - 1]);
    }

    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
  }

  show(color) {
    fill(color);
    noStroke(0);
    rect(this.i * w, this.j * h, w - 1, h - 1);
  }
}

// function removeFromArray(arr, elt) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === elt) {
//       arr.splice(i, 1);
//     }
//   }
// }

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

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }

  // setting the starting point and the goal
  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  openSet.push(start);
}

function draw() {
  background(0);

  // if (openSet.length > 0) {
  //   let winner = 0;
  //   for (let i = 0; i < openSet.length; i++) {
  //     if (openSet[i].f < openSet[winner].f) {
  //       winner = i;
  //     }
  //   }
  //   const current = openSet[winner];

  //   if (current === end) {
  //     console.log("DONE!");
  //   }

  //   removeFromArray(openSet, current);
  //   closedSet.push(current);
  // }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  closedSet.forEach((elem) => elem.show(color(255, 0, 0)));
  openSet.forEach((elem) => elem.show(color(0, 255, 0)));
}
