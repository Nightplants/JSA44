const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const overlay = document.getElementById("overlay");
const searchInput = document.getElementById("searchInput");

function getRandomStars() {
  const stars = Math.floor(Math.random() * 2) + 4;
  return "⭐".repeat(stars) + "☆".repeat(5 - stars);
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    popupImage.style.backgroundImage = `url('${card.dataset.image}')`;
    popupTitle.textContent = card.dataset.title;
    popupDescription.textContent = card.dataset.description;
    popup.querySelector(".rating").textContent = getRandomStars();
    popup.classList.add("show");
    overlay.classList.add("show");
  });
});

overlay.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.classList.remove("show");
});

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  cards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    const description = card.dataset.description.toLowerCase();
    card.style.display =
      title.includes(keyword) || description.includes(keyword)
        ? "block"
        : "none";
  });
});

const logoutButton = document.getElementById("logoutBtn");
if (logoutButton) {
  logoutButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
      alert("Bạn đã đăng xuất thành công!");
      window.location.href = "../Sign_in/index.html";
    }
  });
}
