const upload = document.querySelector(`.upload`);
const container = document.querySelector(`.container`);
const fileInput = document.querySelector(`.fileInput`);
const maxVisible = 4;

upload.addEventListener(`click`, () => {
  fileInput.click();
});

fileInput.addEventListener(`change`, () => {
  const files = Array.from(fileInput.files);
  container.innerHTML = ``;
  files.slice(0, maxVisible).forEach((file, index) => {
    const url = URL.createObjectURL(file);
    const wrapper = document.createElement(`div`);
    wrapper.classList.add(`preview`);
    if (file.type.startWith(`image/`)) {
      const img = document.createElement(`img`);
      img.src = url;
      wrapper.appendChild(img);
    } else if (file.type.startWith(`video/`)) {
      const video = document.createElement(`video`);
      video.src = url;
      video.controls = false;
      wrapper.appendChild(video);
    }

    if (index === maxVisible - 1 && files.length > maxVisible) {
      const overlay = document.createElement(`div`);
      overlay.className = `overlay`;
      overlay.innerText = `+${files.length - maxVisible} more...`;
      wrapper.appendChild(overlay);
    }

    container.appendChild(wrapper);
  });
});
