const welcome = document.querySelector(".welcome")
welcome.textContent = `Welcome, ${localStorage.getItem("Username")}!`