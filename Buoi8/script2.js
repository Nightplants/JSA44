function printMyName() {
    console.log("My name is Henry");
}

function ChangeName() {
    let name = prompt("Nhập tên của bạn");
    let elementName = document.querySelector("#chg-name");
    elementName.innerText = name;
}