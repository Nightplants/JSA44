let my_input = document.querySelector(`#my_input`);
let my_button = document.querySelector(`#my_button`);
let my_output = document.querySelector(`.output`);

my_button.addEventListener(`click`, function (e) {
  let input_value = my_input.value;
  my_output.textContent = input_value;
});
