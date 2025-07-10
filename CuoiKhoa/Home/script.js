document.addEventListener("DOMContentLoaded", function () {
  const welcomeElement = document.querySelector(`.welcome`);
  const logoutButton = document.getElementById(`logoutBtn`);
  const username = localStorage.getItem(`username`);

  if (username) {
    if (localStorage.getItem(`hasVisitedHome`) === `true`) {
      welcomeElement.textContent = `Chào mừng trở lại, ${username}!`;
    } else {
      welcomeElement.textContent = `Chào mừng, ${username}!`;
      localStorage.setItem(`hasVisitedHome`, `true`);
    }
  }

  if (logoutButton) {
    logoutButton.addEventListener(`click`, function (e) {
      e.preventDefault();
      if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        alert("Bạn đã đăng xuất thành công!");
        window.location.href = "../Sign_in/index.html";
      }
    });
  }
});
