const username = document.querySelector(`.username`);
const password = document.querySelector(`.password`);
const repassword = document.querySelector(`.repassword`);
const create_acc = document.querySelector(`.create_acc`);
const h2 = document.querySelector(`h2`);

function ChangeColor() {
  h2.style.color = randomColor({ hue: `orange`, luminosity: `light` });
}

create_acc.addEventListener(`click`, function (e) {
  e.defaultPrevented;
  if (
    username.value === `` ||
    password.value === `` ||
    repassword.value === ``
  ) {
    alert(`⚠️Please do not blank the inputs!⚠️`);
    return;
  } else if (password.value !== repassword.value) {
    alert(`⚠️Password and password check don't the same!⚠️`);
    password.value = ``;
    repassword.value = ``;
    return;
  } else {
    localStorage.setItem(`Username`, username.value);
    localStorage.setItem(`Password`, password.value);
    localStorage.setItem(`Before?`, `false`);
    alert(`Create new account complete✅`);
    username.value = ``;
    password.value = ``;
    repassword.value = ``;
    window.location.href = `/CuoiKhoa/Home/index.html`;
  }
});
