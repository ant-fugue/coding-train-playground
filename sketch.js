let values = [];

let i = 0;

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < width; i++) {
    values.push(random(height));
  }
}

function draw() {
  background(0);

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

  values.forEach((elem, i) => {
    stroke(255);
    line(i, height, i, height - elem);
  });
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
