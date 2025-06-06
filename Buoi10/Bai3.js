let capitalInput = document.querySelector(".CapitalInput");
let Lowercase = document.querySelector(".Lowercase");

Lowercase.addEventListener("click", function (e) {
  let capitalValue = capitalInput.value;
  console.log(capitalValue.toLowerCase());
});
