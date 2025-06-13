const username = document.querySelector(".username").value;
const password = document.querySelector(".password").value;
const sign_in = document.querySelector(".sign_in");

sign_in.addEventListener("click", function (e) {
  e.defaultPrevented();
  console.log("hello");
});

function pickColor() {
  var colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff3333",
    "#ffff00",
    "#ff6600",
  ];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
}
