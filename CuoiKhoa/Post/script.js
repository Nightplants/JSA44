const upload = document.querySelector(`.upload`);
const container = document.querySelector(`.container`);
const fileInput = document.querySelector(`.fileInput`);
const maxVisible = 4;

upload.addEventListener(`click`, () => {
  fileInput.click();
});

fileInput.addEventListener(`change`, () => {
  const files = Array.from(fileInput.files);
  files.slice(0, maxVisible).forEach((file, index) => {
    const url = URL.createObjectURL(file);
    const wrapper = document.createElement(`div`);
    wrapper.classList.add(`preview`);
    if (file.type.startsWith(`image/`)) {
      const img = document.createElement(`img`);
      img.src = url;
      wrapper.appendChild(img);
    } else if (file.type.startsWith(`video/`)) {
      const video = document.createElement(`video`);
      video.src = url;
      video.controls = false;
      wrapper.appendChild(video);
    }

    container.appendChild(wrapper);
  });
});
