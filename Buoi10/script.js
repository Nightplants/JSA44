let my_input = document.querySelector("#my_input");
let my_button = document.querySelector("#my_button");

my_button.addEventListener("click", function (e) {
  let input_value = my_input.value;
  console.log(input_value);
});
