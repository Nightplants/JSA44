alert(`Bài 125`);
a = prompt(`Nhập a: `);
b = prompt(`Nhập b: `);
c = prompt(`Nhập c: `);
let delta = b * b - 4 * a * c;
if (delta < 0) {
  alert(`No solution`);
} else if (delta == 0) {
  alert(`x1 = x2 = ${-b / (2 * a)}`);
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  alert(`x1 = ${x1}, x2 = ${x2}`);
}

alert(`Bài 1`);
a = Number(prompt(`Nhập a: `));
if (a % 2 == 0) {
  alert(`${a} là số chẵn`);
} else {
  alert(`${a} là số lẻ`);
}

alert(`Bài 2`);
a = Number(prompt(`Nhập a: `));
b = Number(prompt(`Nhập b: `));
if (a > b) {
  alert(`${a} lớn hơn`);
} else if (a < b) {
  alert(`${b} lớn hơn`);
} else {
  alert(`2 số bằng nhau`);
}

alert(`Bài 3`);
a = Number(prompt(`Nhập tuổi của bạn: `));
if (a < 18) {
  alert(`Bạn chưa đủ tuổi để thi`);
} else {
  alert(`Bạn đã đủ tuổi để thi`);
}

alert(`Bài 4`);
a = Number(prompt(`Nhập điểm trung bình của bạn: `));
if (a < 5) {
  alert(`Học lực của bạn là yếu`);
} else if (a < 6) {
  alert(`Học lực của bạn là trung bình`);
} else if (a < 8) {
  alert(`Học lực của bạn là khá`);
} else {
  alert(`Học lực của bạn là giỏi`);
}

alert(`Bài 5`);
a = Number(prompt(`Nhập một năm bất kỳ: `));
if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
  alert(`${a} là năm nhuận`);
} else {
  alert(`${a} không phải là năm nhuận`);
}

alert(`Bài 6`);
a = Number(prompt(`Nhập số a: `));
if (a < 0) {
  alert(`${a} là số âm`);
} else if (a > 0) {
  alert(`${a} là số dương`);
} else {
  alert(`Đây là số 0`);
}

alert(`Bài 7`);
a = Number(prompt(`Nhập lượng điện đã dùng: `));
if (a <= 50) {
  alert(`Tiền điện là: ${a * 1000}`);
} else {
  alert(`Tiền điện là: ${50 * 1000 + (a - 50) * 1200}`);
}

alert(`Bài 8`);
password = prompt(`Nhập mật khẩu: `);
if (password == `123456`) {
  alert(`Đăng nhập thành công`);
} else {
  alert(`Sai mật khẩu`);
}

alert(`Bài 9`);
a = Number(prompt(`Nhập số a: `));
if (10 <= a && a <= 100) {
  alert(`${a} nằm trong khoảng từ 10 đến 100`);
} else {
  alert(`${a} không nằm trong khoảng từ 10 đến 100`);
}

alert(`Bài 10`);
a = Number(prompt(`Nhập số a: `));
b = Number(prompt(`Nhập số b: `));
operator = prompt(`Nhập phép toán (+, -, *, /): `);
if (operator == `+`) {
  alert(`${a + b}`);
} else if (operator == `-`) {
  alert(`${a - b}`);
} else if (operator == `*`) {
  alert(`${a * b}`);
} else if (operator == `/`) {
  if (b == 0) {
    alert(`Không thể chia cho 0`);
  } else {
    alert(`${a / b}`);
  }
} else {
  alert(`Phép toán không hợp lệ`);
}
