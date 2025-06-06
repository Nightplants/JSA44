// // const divElement = document.querySelector(".container");
// // console.log(divElement);
// const nameInput = document.querySelector(".name");
// const passwordInput = document.querySelector(".password");
// const btnSubmit = document.querySelector(".submit");

// btnSubmit.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("click click");
//   const nameValue = nameInput.value;
//   const passwordValue = passwordInput.value;
//   console.log(nameValue);
//   console.log(passwordValue);
//   localStorage.setItem("Name", nameValue);
//   localStorage.setItem("Password", passwordValue);
//   alert("Đăng ký thành công");
//   window.location.href = "home.html";
//   // removeItem là xóa một mục chỉ định trong LocalStorage còn clear là xóa tất cả các mục trong LocalStorage
// });

//Bài tập
const taskInput = document.querySelector(".task");
const levelInput = document.querySelector(".level");
const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const taskValue = taskInput.value;
    const levelValue = levelInput.value;
    localStorage.setItem("Task", taskValue);
    localStorage.setItem("Level", levelValue);
    alert("Tạo công việc thành công!");
    window.location.href = "home.html";
})