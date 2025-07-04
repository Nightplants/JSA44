document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const usernameInput = form.querySelector('input[type="text"]');
  const passwordInput = form.querySelectorAll('input[type="password"]')[0];
  const confirmInput = form.querySelectorAll('input[type="password"]')[1];
  const submitBtn = form.querySelector("button[type='submit']");

  const messageBox = document.createElement("div");
  messageBox.className = "message-box";
  form.insertBefore(messageBox, submitBtn);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirm = confirmInput.value.trim();

    usernameInput.classList.remove("error");
    passwordInput.classList.remove("error");
    confirmInput.classList.remove("error");
    messageBox.classList.remove("show", "error", "success");

    let errorMessage = "";
    let success = false;

    if (!username || !password || !confirm) {
      errorMessage = "Vui lòng điền đầy đủ thông tin.";
      if (!username) usernameInput.classList.add("error");
      if (!password) passwordInput.classList.add("error");
      if (!confirm) confirmInput.classList.add("error");
    } else if (password !== confirm) {
      errorMessage = "Mật khẩu xác nhận không khớp.";
      passwordInput.classList.add("error");
      confirmInput.classList.add("error");
    } else {
      // Lưu thông tin vào localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      success = true;
    }

    if (success) {
      messageBox.textContent = "✅ Tạo tài khoản thành công!";
      messageBox.classList.add("show", "success");
      setTimeout(() => {
        window.location.href = "../Home/index.html";
      }, 1500);
    } else {
      messageBox.textContent = errorMessage;
      messageBox.classList.add("show", "error");
    }
  });
});
