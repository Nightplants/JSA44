document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const usernameInput = form.querySelector('input[type="text"]');
  const passwordInput = form.querySelector('input[type="password"]');
  const submitBtn = form.querySelector('button[type="submit"]');

  const messageBox = document.createElement("div");
  messageBox.className = "message-box";
  form.insertBefore(messageBox, submitBtn);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    let errorMessage = "";
    let success = false;

    usernameInput.classList.remove("error");
    passwordInput.classList.remove("error");
    messageBox.classList.remove("show", "error", "success");

    if (!username || !password) {
      errorMessage = "Vui lòng nhập đầy đủ thông tin.";
      if (!username) usernameInput.classList.add("error");
      if (!password) passwordInput.classList.add("error");
    } else {
      const storedUser = localStorage.getItem("username");
      const storedPass = localStorage.getItem("password");

      if (!username || !password) {
        errorMessage = "Vui lòng nhập đầy đủ thông tin.";
        if (!username) usernameInput.classList.add("error");
        if (!password) passwordInput.classList.add("error");
      } else {
        const storedUser = localStorage.getItem("username");
        const storedPass = localStorage.getItem("password");

        if (username !== storedUser || password !== storedPass) {
          errorMessage = "Tài khoản không tồn tại hoặc sai thông tin.";
          usernameInput.classList.add("error");
          passwordInput.classList.add("error");
        } else {
          messageBox.textContent = "✅ Đăng nhập thành công!";
          messageBox.classList.add("show", "success");
          setTimeout(() => {
            window.location.href = "../Home/index.html";
            usernameInput.textContent = ``;
            passwordInput.textContent = ``;
          }, 1500);
          return;
        }
      }

      messageBox.textContent = errorMessage;
      messageBox.classList.add("show", "error");
    }

    messageBox.textContent = errorMessage;
    messageBox.classList.add("show");
    messageBox.classList.add(success ? "success" : "error");
  });
});
