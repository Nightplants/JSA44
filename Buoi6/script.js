// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0 && (i + 4) % 6 === 0) {
//     console.log(i);
//   }
// }

// for (i = 100; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 100; i >= 0; i--) {
//   if (i >= 50) {
//     console.log(i);
//   }
//   else {
//     console.log(100 - i);
//   }
// }

//Test
alert(`Bài 1`);
var string = ``;
for (let i = 1; i <= 10; i++) {
  string += i + ` `;
}
alert(string);

alert(`Bài 2`);
let a = Number(prompt(`Nhập số a: `));
let b = Number(prompt(`Nhập số b: `));
let sum = 0;
for (let i = a; i <= b; i++) {
  sum += i;
}
alert(`Tổng từ ${a} đến ${b} là: ${sum}`);

alert(`Bài 3`);
let n = Number(prompt(`Nhập số n: `));
let product = 1;
for (let i = 1; i <= n; i++) {
  product *= i;
}
alert(`Giai thừa của ${n} là: ${product}`);

alert(`Bài 4`);
var string = ``;
let line = ``;
for (let i = 1; i <= 9; i++) {
  line += i + ` `;
  if (i % 3 === 0) {
    string += line + `\n`;
    line = ``;
  }
}
alert(string);
