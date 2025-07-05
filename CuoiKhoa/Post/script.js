const post = document.querySelector(`.post`);
const upload = document.querySelector(`.upload`);
const container = document.querySelector(`.container`);
const fileInput = document.querySelector(`.fileInput`);

upload.addEventListener(`click`, () => {
  fileInput.click();
});

fileInput.addEventListener(`change`, () => {
  const files = Array.from(fileInput.files);
  container.innerHTML = ``;
  files.slice(0, 4).forEach((file, index) => {
    const url = URL.createObjectURL(file);
    const wrapper = document.createElement(`div`);
    wrapper.classList.add(`preview`);

    const removeBtn = document.createElement(`button`);
    removeBtn.textContent = `×`;
    removeBtn.className = `remove-media`;
    removeBtn.onclick = function () {
      wrapper.remove();
    };
    if (file.type.startsWith(`image/`)) {
      const img = document.createElement(`img`);
      img.src = url;
      wrapper.appendChild(img);
    } else if (file.type.startsWith(`video/`)) {
      const video = document.createElement(`video`);
      video.src = url;
      video.controls = true;
      wrapper.appendChild(video);
    }
    wrapper.appendChild(removeBtn);
    container.appendChild(wrapper);
  });
});

post.addEventListener(`click`, function (e) {
  e.preventDefault();
  const text = document.querySelector(`.posting`).value.trim();
  const previews = document.querySelectorAll(`.preview`);
  if (text === `` && previews.length === 0) {
    alert(`Vui lòng viết gì đó hoặc chọn media trước khi đăng!`);
    return;
  }
  if (!confirm(`Bạn có chắc chắn muốn đăng bài này?`)) return;
  const postWrapper = document.createElement(`div`);
  postWrapper.classList.add(`post-wrapper`);
  if (previews.length > 0) {
    const mediaContainer = document.createElement(`div`);
    mediaContainer.classList.add(`post-wrapper-media`);
    previews.forEach((preview) => {
      const clone = preview.cloneNode(true);

      const btn = clone.querySelector(`.remove-media`);
      if (btn) btn.remove();
      mediaContainer.appendChild(clone);
    });
    postWrapper.appendChild(mediaContainer);
  }
  if (text) {
    const paragraph = document.createElement(`p`);
    paragraph.textContent = text;
    paragraph.classList.add(`post-text`);
    postWrapper.appendChild(paragraph);
  }
  document.body.insertBefore(postWrapper, document.querySelector(`form`));
  document.querySelector(`.posting`).value = ``;
  container.innerHTML = ``;
  fileInput.value = ``;
});

const logoutButton = document.getElementById(`logoutBtn`);
if (logoutButton) {
  logoutButton.addEventListener(`click`, function (e) {
    e.preventDefault();
    if (confirm(`Bạn có chắc chắn muốn đăng xuất không?`)) {
      localStorage.clear();
      alert(`Bạn đã đăng xuất thành công!`);
      window.location.href = `../Sign_in/index.html`;
    }
  });
}
