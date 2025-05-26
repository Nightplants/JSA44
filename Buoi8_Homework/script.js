function PrintMyName() {
  console.log("Tên tôi là Bảo Huy");
  alert("Tên tôi là Bảo Huy");
}

let changed = false;
function ChangeName() {
  if (changed === false) {
    let name = prompt("Nhập tên của bạn");
    let elementName = document.querySelector(".chg-name");
    changed = true;
    elementName.innerText = name;
  } else {
    let elementName = document.querySelector(".chg-name");
    changed = false;
    elementName.innerText = "Trịnh Bảo Huy";
  }
}

function ShowHide() {
  let model = document.querySelector(".model");
  if (model.style.display === "none") {
    model.style.display = "flex";
  } else {
    model.style.display = "none";
  }
}

function ChangeColor() {
  let model = document.querySelector(".model");
  if (model.style.borderColor === "red") {
    model.style.borderColor = "blue";
  } else {
    model.style.borderColor = "red";
  }
}
