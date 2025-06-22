const welcome = document.querySelector(`.welcome`);
if (localStorage.getItem(`Before?`) === `true`) {
  welcome.textContent = `Welcome back, ${localStorage.getItem(`Username`)}!`;
} else {
  welcome.textContent = `Welcome, ${localStorage.getItem(`Username`)}!`;
  localStorage.setItem(`Before?`, `true`);
}
