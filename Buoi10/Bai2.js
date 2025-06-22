let number1 = document.querySelector(`.number1`);
let number2 = document.querySelector(`.number2`);
let operator = document.querySelector(`.operators`);
let caculate = document.querySelector(`.caculate`);

caculate.addEventListener(`click`, function (e) {
  let num1 = number1.value;
  let num2 = number2.value;
  let op = operator.value;

  if (op === `+`) {
    console.log(num1 + num2);
  } else if (op === `-`) {
    console.log(num1 - num2);
  } else if (op === `*`) {
    console.log(num1 * num2);
  } else if (op === `/`) {
    if (num2 !== 0) {
      console.log(num1 / num2);
    } else {
      console.log(`Cannot divide by zero`);
    }
  }
});
