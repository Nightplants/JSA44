alert(`Bài 1`);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}
alert(sum);

alert(`Bài 2`);
const students = [
  { name: "An", score: 8 },
  { name: "Bình", score: 9 },
  { name: "Châu", score: 7 },
];
var highestScore = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].score > highestScore) {
    highestScore = students[i].name;
  }
}
alert(highestScore);

alert(`Bài 3`);
const products = [
  { name: "Sách", quantity: 3 },
  { name: "Bút", quantity: 0 },
  { name: "Thước", quantity: 5 },
];
for (let i = 0; i < products.length; i++) {
  if (products[i].quantity === 0) {
    alert(`Sản phẩm ${products[i].name} đã hết hàng`);
  } else {
    alert(`Sản phẩm ${products[i].name} còn ${products[i].quantity} sản phẩm`);
  }
}

alert(`Bài 4`);
const items = ["cam", "xoài", "cam", "ổi", "cam"];
var repeated = 0;
for (let i = 0; i < items.length; i++) {
  for (let j = i + 1; j < items.length; j++) {
    if (items[i] === items[j]) {
      repeated++;
    }
  }
}
alert(`Có ${repeated} phần tử bị lặp lại`);

alert(`Bài 5`);
const students2 = [
  { name: "An", score: 7 },
  { name: "Bình", score: 8 },
  { name: "Châu", score: 9 },
];
var sum = 0;
for (let i = 0; i < students.length; i++) {
  sum += students[i].score;
}
var average = sum / students.length;
alert(`Điểm trung bình là: ${average}`);

alert(`Bài 6`);
const students3 = [
  { name: "An", score: 7 },
  { name: "Bình", score: 9 },
  { name: "Châu", score: 10 },
];
var higher8 = [];
for (let i = 0; i < students3.length; i++) {
  if (students3[i].score > 8) {
    higher8.push(students3[i].name);
  }
}
alert(higher8);

alert(`Bài 7`);
const number2 = [10, 20, 30];
let obj1 = {};
for (let i = 0; i < number2.length; i++) {
  obj1[`index ${i + 1}`] = number2[i];
}
console.log(obj1);
alert(obj1);

alert(`Bài 8`);
const cart = [
  { name: "Sách", price: 100, quantity: 2 },
  { name: "Bút", price: 10, quantity: 10 },
];
var total = 0;
for (let i = 0; i < cart.length; i++) {
  const item = cart[i];
  total = item.price * item.quantity;
}
alert(`Tổng tiền là: ${total}`);

alert(`Bài 9`);
const students4 = [
  { name: "An", score: 7 },
  { name: "Bình", score: 4 },
  { name: "Châu", score: 9 },
];
for (let i = 0; i < students4.length; i++) {
  if (students4[i].score < 5) {
    alert(`${students4[i].name} dưới 5 điểm`);
  } else {
    alert(`${students4[i].name} trên 5 điểm`);
  }
}

alert(`Bài 10`);
const students5 = [
  { name: "An", score: 7 },
  { name: "Bình", score: 4 },
  { name: "Châu", score: 9 },
];
for (let i = 0; i < students5.length; i++) {
  if (students5[i].score < 5) {
    students5[i]["trang thái"] = "Rớt";
  } else {
    students5[i]["trang thái"] = "Đậu";
  }
}
console.log(students5);
