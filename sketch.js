let values = [];

let i = 0;
const w = 10;

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < floor(width / w); i++) {
    values.push(random(height));
  }
  frameRate(5);
  quickSort(values, 0, values.length - 1);
}

function draw() {
  background(0);
  values.forEach((elem, i) => {
    stroke(0);
    fill(255);
    rect(i * w, height - elem, w, elem);
  });
}

function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  const index = partition(arr, start, end);
  console.log(index);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

function partition(arr, start, end) {
  let pivotIndex = start;
  const pivotValue = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      console.log(arr);
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
