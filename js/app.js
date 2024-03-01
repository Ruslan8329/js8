let massive = [67, 5, 8, 4, 12, -4, -10, 6];
let sum = 0;

for (let i = 0; i < massive.length; i++) {
  if (massive[i] > 0) {
    sum += massive[i];
  }
}
console.log(sum);

//////////////////////////////////////////////2////////////////////////////////////////////////////

let massive1 = [4, 345, 76, -23, 45, -7, -9, 10];
let sum1 = 0;

for (let i = 0; i < massive1.length; i++) {
  if (massive1[i] < 0) {
    sum1 += 1;
  }
}
console.log(sum1);

///////////////////////////////////////////////3//////////////////////////////////////////////////

let sum2 = 12;
let massive2 = [35, 75, 87, 9, 7, 5, 12, 3, 55];
let filterNum = [];

for (let i = 0; i < massive2.length; i++) {
  if (massive2[i] === sum2) {
    filterNum.push(massive2[i]);
  }
}
console.log(filterNum);

////////////////////////////////////////////4///////////////////////////////////////////////////////

let massive3 = [56, 34, 8, 90, 1, 45, 567, 77];
let sum3 = 0;

for (let i = 0; i < massive3.length; i++) {
  if (massive3[i] % 2 === 0) {
    sum3 += massive3[i];
  }
}
console.log(sum3);

///////////////////////////////////////////6///////////////////////////////////////////////////////////

let massive4 = [67, 867, 35, -9, 56, 90, -3, 5];
let foundNum = [];
let index = 0;

for (let i = 0; i < massive4.length; i++) {
  if (massive4[i] < 0) {
    index = i;
  }
}

console.log(index);

///////////////////////////////////////////////9//////////////////////////////////////////////////////

let massive5 = [56, 756, 3, -7, 66, 9, -12, 33];
let sum4 = 0;

for (let i = 0; i < massive5.length; i++) {
  if (massive5[i] < 0) {
    massive5 = true;
  }
}
console.log(massive5);
