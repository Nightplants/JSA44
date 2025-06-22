const upload = document.querySelector(`.upload`);
const container = document.querySelector(`.container`);
const fileInput = document.querySelector(`.fileInput`);
const maxVisable = 4;

upload.addEventListener(`click`, () => {
  fileInput.click();
});

fileInput.addEventListener(`change`, () => {
  const files = Array.from(fileInput.files);
  container.innerHTML = ``;
  files.slice(0, maxVisable).forEach((file, index) => {
    const url = URL.createObjectURL(file);
    const wrapper = document.createElement(`div`);
    wrapper.classList.add(`preview`);
  });
});
