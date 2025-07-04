const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const overlay = document.getElementById("overlay");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    popupImage.style.backgroundImage = `url('${card.dataset.image}')`;
    popupTitle.textContent = card.dataset.title;
    popupDescription.textContent = card.dataset.description;
    popup.classList.add("show");
    overlay.classList.add("show");
  });
});

overlay.addEventListener("click", () => {
  popup.classList.remove("show");
  overlay.classList.remove("show");
});
