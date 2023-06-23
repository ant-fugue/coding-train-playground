// grid-related variables
const cols = 25;
const rows = 25;
const grid = new Array(cols);
let w;
let h;

// pathfiding-related variables
const openSet = [];
const closedSet = [];
let start;
let end;
let path;

class Spot {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0;
    // g is the cost of the cheapest path from start to node currently known.
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
    this.previous = null;
    this.wall = false;

    if (random(1) < 0.3) {
      this.wall = true;
    }
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
    if (this.wall) {
      fill(0);
    }
    noStroke(0);
    rect(this.i * w, this.j * h, w - 1, h - 1);
  }
}

function removeFromArray(arr, elt) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === elt) {
      arr.splice(i, 1);
    }
  }
}

function heuristic(a, b) {
  const d = abs(a.i - b.i) + abs(a.j - b.j);
  return d;
}

function backtrack(arr, current) {
  let temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;
  }
}

function setup() {
  createCanvas(400, 400);
  frameRate(5);
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
  start.wall = false;
  end.wall = false;
  openSet.push(start);
}

function draw() {
  background(0);

  // If there is no spot in the open set before the search finishes,
  // you cannot reach the goal
  if (openSet.length > 0) {
    // loop through all items in the open set
    // find the spot which has the biggest fscore
    // set the spot as a following procedual target
    let winner = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    const current = openSet[winner];

    // if the current spot is the goal, finish search
    if (current === end) {
      noLoop();
      console.log("DONE!");
    }

    // move the current item from the open set to the closed set
    removeFromArray(openSet, current);
    closedSet.push(current);

    // two roles of this part;
    // 1. calculating scores of neighbors
    // 2. adding neighbors to the open set
    const neighbors = current.neighbors;
    neighbors.forEach((neighbor) => {
      // don't go to a neighbor which is evaluated or is a wall
      if (!closedSet.includes(neighbor) && !neighbor.wall) {
        // every neighbor has 1 point from current node
        // in this example, the distance between current spot and its neighbor is always 1.
        let tempG = current.g + 1;

        let newPath = false;
        // if the neighbor is in the open set,
        if (openSet.includes(neighbor)) {
          // check if the current path is more efficient than existing one
          // if so, update the path
          if (tempG < neighbor.g) {
            neighbor.g = tempG;
            newPath = true;
          }
        }
        // else add the neighbor to the open set
        else {
          neighbor.g = tempG;
          newPath = true;
          openSet.push(neighbor);
        }
        // calculate the distance heuristically between the current neighbor and the goal
        if (newPath) {
          neighbor.h = heuristic(neighbor, end);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.previous = current;
        }
      }
    });

    // render grids, the closed set, the open set, and the current path
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].show(color(255));
      }
    }
    closedSet.forEach((elem) => elem.show(color(255, 0, 0)));
    openSet.forEach((elem) => elem.show(color(0, 255, 0)));
    path = [];
    backtrack(path, current);
    path.forEach((elem) => elem.show(color(0, 0, 255)));
  } else {
    console.log("no solution");
    noLoop();
    return;
  }
}
