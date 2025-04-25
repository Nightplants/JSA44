// let person1 = {
//   name: "John",
//   age: 30,
//   gender: "male",
// };

// let person2 = {
//   name: "Jane",
//   age: 22,
//   gender: "female",
// };

// alert(
//   `Tổng tuổi của ${person1.name} và ${person2.name} là ${
//     person1.age + person2.age
//   }`
// );
// if (person1.age > person2.age) {
//   alert(`${person1.name} lớn tuổi hơn ${person2.name}`);
// } else if (person1.age < person2.age) {
//   alert(`${person2.name} lớn tuổi hơn ${person1.name}`);
// } else {
//   alert(`${person1.name} và ${person2.name} bằng tuổi nhau`);
// }

// let student = {
//   name: "Trịnh Bảo Huy",
//   age: 11,
//   favourite: "Minecraft",
//   class: {
//     name: "5A8",
//     members: 22,
//   },
// };

// alert(student.class.members);

// Test
// a)
a = prompt(`Nhập a: `);
b = prompt(`Nhập b: `);
c = prompt(`Nhập c: `);
d = prompt(`Nhập d: `);
e = prompt(`Nhập e: `);
list = [a, b, c, d, e];
console.log(list);

//b)
key1 = prompt(`Nhập key1: `);
value1 = prompt(`Nhập value1: `);
key2 = prompt(`Nhập key2: `);
value2 = prompt(`Nhập value2: `);
key3 = prompt(`Nhập key3: `);
value3 = prompt(`Nhập value3: `);
key4 = prompt(`Nhập key4: `);
value4 = prompt(`Nhập value4: `);
key5 = prompt(`Nhập key5: `);
value5 = prompt(`Nhập value5: `);
let obj = {
  [key1]: value1,
  [key2]: value2,
  [key3]: value3,
  [key4]: value4,
  [key5]: value5,
};
console.log(obj);

numbers = [42, 17, 89, 3, 56, 78, 24, 66, 10, 35];

str1 = `${numbers[0]} + ${numbers[1]} + ${numbers[2]} + ${numbers[3]} + ${numbers[4]} + ${numbers[5]} + ${numbers[6]} + ${numbers[7]} + ${numbers[8]} + ${numbers[9]}`;
alert(str1);
console.log(str1);

sum =
  numbers[0] +
  numbers[1] +
  numbers[2] +
  numbers[3] +
  numbers[4] +
  numbers[5] +
  numbers[6] +
  numbers[7] +
  numbers[8] +
  numbers[9];
str2 = `${str1} = ${sum}`;
console.log(str2);

Sum = numbers[0] + numbers[numbers.length - 1];
Difference = numbers[0] - numbers[numbers.length - 1];
Product = numbers[0] * numbers[numbers.length - 1];
Quotient = numbers[0] / numbers[numbers.length - 1];
console.log(
  `Tổng: ${Sum}, Hiệu: ${Difference}, Tích: ${Product}, Thương: ${Quotient}`
);
