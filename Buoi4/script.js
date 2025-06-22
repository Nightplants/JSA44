score = Number(prompt(`Nhập điểm của bạn: `));
if (0 < score && score > 10) {
  alert(`Điểm không hợp lệ`);
} else if (score < 5) {
  alert(`Điểm của bạn là F`);
} else if (score >= 5 && score < 6) {
  alert(`Điểm của bạn là D`);
} else if (score >= 6 && score < 7) {
  alert(`Điểm của bạn là C`);
} else if (score >= 7 && score < 8) {
  alert(`Điểm của bạn là B`);
} else if (score >= 8 && score < 9) {
  alert(`Điểm của bạn là A`);
} else {
  alert(`Điểm của bạn là A+`);
}

alert(`Bài 123`);
a = Number(prompt(`Nhập a: `));
b = Number(prompt(`Nhập b: `));
c = Number(prompt(`Nhập c: `));
let smallest = 0;
if (a > b) {
  smallest = b;
} else {
  smallest = a;
}
if (smallest > c) {
  smallest = c;
}
alert(`Số nhỏ nhất là: ${smallest}`);
if (a > b) {
  smallest = a;
} else {
  smallest = b;
}
if (smallest < c) {
  smallest = c;
}
alert(`Số lớn nhất là: ${smallest}`);

alert(`Bài 135`);
a = Number(prompt(`Nhập cạnh a: `));
b = Number(prompt(`Nhập cạnh b: `));
c = Number(prompt(`Nhập cạnh c: `));
function checkSquareTriangle(a, b, c) {
  if (a * a + b * b === c * c) {
    return true;
  } else if (a * a + c * c === b * b) {
    return true;
  } else if (b * b + c * c === a * a) {
    return true;
  } else {
    return false;
  }
}
if (checkSquareTriangle(a, b, c)) {
  alert(`Yes`);
} else {
  alert(`No`);
}
