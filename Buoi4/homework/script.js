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
