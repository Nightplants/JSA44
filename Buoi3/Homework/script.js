alert(`Bài 1`)
A = Number(prompt(`Nhập số A: `))
alert(A * 2)

alert(`Bài 2`)
A = Number(prompt(`Nhập số A: `))
B = Number(prompt(`Nhập số B: `))
C = Number(prompt(`Nhập số C: `))
alert((A - B) * C)

alert(`Bài 3`)
letter = prompt(`Nhập chữ cái in hoa: `)
alert(letter.toLowerCase())

alert(`Bài 4`)
N = Number(prompt(`Nhập số N: `))
var numbers = 0
for (i = (N - 1) / 2 + 1; i <= N; i++) {
    numbers += 1
}
alert(numbers)

alert(`Bài 5`)
N = Number(prompt(`Nhập số N: `))
var numbers = 0
for (i = N + 1; i <= N**2; i++) {
    numbers += 1
} 
alert(numbers)

alert(`Bài 6`)
function reverseString(input) {
    return input.split(``).reverse().join(``);
} 
Z = prompt(`Nhập chuỗi Z: `)
alert(reverseString(Z))

alert(`Bài 7`)
A = Number(prompt(`Nhập số A: `))
B = Number(prompt(`Nhập số B: `))
alert((A + B) + (A * B))

alert(`Bài 8`)
letter = prompt(`Nhập chữ cái in thường: `)
alert(letter.toUpperCase())

alert(`Bài 9`)
function circularShift(letter, n) {
    const alphabet = `abcdefghijklmnopqrstuvwxyz`;
    const startIndex = alphabet.indexOf(letter);
    const shiftedIndex = (startIndex + n) % 26;
    return alphabet[shiftedIndex];
}
A = prompt(`Nhập chữ cái: `)
N = Number(prompt(`Nhập số N: `))
alert(circularShift(A, N))

alert(`Bài 10`)
function circularShift(letter) {
    const alphabet = `abcdefghijklmnopqrstuvwxyz`;
    const startIndex = alphabet.indexOf(letter);
    const shiftedIndex = (startIndex) % 26;
    return alphabet[shiftedIndex];
}
A = prompt(`Nhập chữ cái: `)
alert(circularShift(A.toLowerCase()))