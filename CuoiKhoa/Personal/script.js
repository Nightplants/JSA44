document.addEventListener("DOMContentLoaded", function () {
  const usernameElement = document.querySelector(".username");
  const emailElement = document.getElementById("email");
  const memberSinceElement = document.getElementById("memberSince");
  const favoritePlaceElement = document.getElementById("favoritePlace");
  const postList = document.getElementById("postList");
  const logoutButton = document.getElementById("logoutBtn");
  const messageBox = document.getElementById("messageBox");

  const username = localStorage.getItem("username") || "Tên người dùng";
  const email = localStorage.getItem("email") || "user@email.com";
  const memberSince = localStorage.getItem("memberSince") || "2024";
  const favoritePlace = localStorage.getItem("favoritePlace") || "Đà Nẵng";
  const posts = JSON.parse(localStorage.getItem("userPosts") || "[]");

  usernameElement.textContent = username;
  emailElement.textContent = email;
  memberSinceElement.textContent = memberSince;
  favoritePlaceElement.textContent = favoritePlace;

  postList.innerHTML = "";
  if (posts.length === 0) {
    postList.innerHTML = "<li>Chưa có bài viết nào.</li>";
  } else {
    posts.forEach(function (post) {
      const li = document.createElement("li");
      li.textContent = post;
      postList.appendChild(li);
    });
  }

  function showMessage(message, isSuccess = false) {
    messageBox.textContent = message;
    messageBox.classList.remove("show", "error", "success");
    messageBox.classList.add("show", isSuccess ? "success" : "error");

    setTimeout(() => {
      messageBox.classList.remove("show");
    }, 3000);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        showMessage("✅ Bạn đã đăng xuất thành công!", true);
        setTimeout(() => {
          window.location.href = "../Sign_in/index.html";
        }, 1500);
      }
    });
  }
});
