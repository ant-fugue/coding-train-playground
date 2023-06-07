let values = [];

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < width; i++) {
    values.push(random(height));
  }

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  }
}

function draw() {
  background(0);
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
