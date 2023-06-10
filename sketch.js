const values = [];

// There are two possible values in states:
// -1: is not a pivot index
// 0: is a pivot index
const stateOfValues = [];

let i = 0;
const w = 10;

function setup() {
  createCanvas(400, 300);
  for (let i = 0; i < floor(width / w); i++) {
    values.push(random(height));
    stateOfValues[i] = -1;
  }
  frameRate(5);

  // When quickSort() is a syncronous function, a sorting finishes before the draw loop starts.
  // Although, now quickSort() is an async function,
  // there is a possibility that sorting does not finish even after the draw loop starts.
  // Especially in this case, swap() is delayed certain amount of times,
  // so you can see the sorting process visually understandable enough.
  quickSort(values, 0, values.length - 1);
}

function draw() {
  background(0);
  values.forEach((elem, i) => {
    stroke(0);
    if (stateOfValues[i] === 0) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    rect(i * w, height - elem, w, elem);
  });
}

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  const index = await partition(arr, start, end);

  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end),
  ]);
}

async function partition(arr, start, end) {
  let pivotIndex = start;
  const pivotValue = arr[end];
  // the current element is pivot index
  stateOfValues[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(arr, pivotIndex, end);

  return pivotIndex;
}

async function swap(arr, a, b) {
  await sleep(100);
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
