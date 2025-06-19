const welcome = document.getElementsByClassName(".welcome")
welcome.innerHTML = `Welcome ${localStorage.getItem("Username")}`