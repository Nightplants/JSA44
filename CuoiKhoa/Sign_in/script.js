const username = document.querySelector(`.username`);
const password = document.querySelector(`.password`);
const sign_in = document.querySelector(`.sign_in`);
const h2 = document.querySelector(`h2`);

function ChangeColor() {
  h2.style.color = randomColor({ hue: `orange`, luminosity: `light` });
}

sign_in.addEventListener(`click`, function (e) {
  e.defaultPrevented;
  if (username.value === `` || password.value === ``) {
    alert(`⚠️Please do not blank the inputs!⚠️`);
    return;
  }
  const users = { ...localStorage };
  if (users.Username !== username.value) {
    alert(
      `⚠️Don`t find any user, please check the username or create a new account!⚠️`
    );
    return;
  } else if (users.Password !== password.value) {
    alert(`⚠️Wrong password!⚠️`);
    return;
  } else {
    alert(`Sign in complete✅`);
    localStorage.setItem(`Before?`, `true`);
    password.value = ``;
    username.value = ``;
    window.location.href = `/CuoiKhoa/Home/index.html`;
  }
});
