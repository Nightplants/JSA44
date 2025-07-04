const post = document.querySelector(`.post`);
const upload = document.querySelector(`.upload`);
const container = document.querySelector(`.container`);
const fileInput = document.querySelector(`.fileInput`);

upload.addEventListener(`click`, () => {
  fileInput.click();
});

fileInput.addEventListener(`change`, () => {
  const files = Array.from(fileInput.files);
  files.slice(0, 4).forEach((file, index) => {
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

post.addEventListener("click", function (e) {
  e.preventDefault();
  const text = document.querySelector(".posting").value.trim();
  const previews = document.querySelectorAll(".preview");
  if (text === "" && previews.length === 0) {
    alert("Please write something or select media before posting!");
    return;
  }
  const postWrapper = document.createElement("div");
  postWrapper.classList.add("post-wrapper");
  if (previews.length > 0) {
    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add("post-wrapper-media");
    previews.forEach((preview) => {
      const clone = preview.cloneNode(true);
      mediaContainer.appendChild(clone);
    });
    postWrapper.appendChild(mediaContainer);
  }
  if (text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.classList.add("post-text");
    postWrapper.appendChild(paragraph);
  }
  document.body.insertBefore(postWrapper, container);
  document.querySelector(".posting").value = "";
  container.innerHTML = "";
  fileInput.value = "";
});
