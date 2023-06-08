let values = [];

let i = 0;
const w = 10;

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < floor(width / w); i++) {
    values.push(random(height));
  }
  frameRate(5);
}

function draw() {
  background(0);
  bubbleSort();
  values.forEach((elem, i) => {
    stroke(0);
    fill(255);
    rect(i * w, height - elem, w, elem);
  });
}

function bubbleSort() {
  // i is declared as a global variable, and increment this in every frame
  // if i is local, in every frame browser renders the sorted state, not the ongoing sorting process
  if (i < values.length) {
    for (let j = 0; j < values.length - i; j++) {
      const a = values[j];
      const b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    noLoop();
  }
  i++;
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
