import re


def sort_css_properties_by_full_length(css_code: str) -> str:
    blocks = re.findall(r"([^{]+)\{([^}]+)\}", css_code, re.DOTALL)
    result = []

    for selector, properties in blocks:
        # Tách từng dòng thuộc tính (bằng dấu ;) và loại bỏ khoảng trắng 2 đầu
        props = [
            line.strip() + ";" for line in properties.strip().split(";") if line.strip()
        ]

        # Sắp xếp theo tổng chiều dài (bao gồm mọi khoảng trắng, dấu, đơn vị...)
        props.sort(key=lambda x: len(x))

        # Ghép lại block
        block = selector.strip() + " {\n"
        for prop in props:
            block += f"  {prop}\n"
        block += "}"
        result.append(block)

    return "\n\n".join(result)


# 🧪 Ví dụ sử dụng:
css_input = """
* {
  color: antiquewhite;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/CuoiKhoa/src/image/Posting.png");
}

.post-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 80px;
  padding: 15px;
  border-radius: 16px;
  background: rgba(45, 45, 45, 0.3);
  backdrop-filter: blur(20px);
  border: 3px ridge rgba(60, 60, 60, 0.3);
}

.post-text {
  font-size: 25px;
  margin: 5px 0;
}

.post-wrapper-media {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.post-wrapper .preview {
  width: 120px;
  height: 80px;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
}

.container {
  gap: 10px;
  top: 310px;
  left: 80px;
  right: 80px;
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  max-height: 80px;
  position: relative;
  position: absolute;
  border-radius: 20px;
  justify-content: center;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.45);
}

.preview {
  width: 120px;
  height: 80px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
}

.preview img,
.preview video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload,
.post {
  bottom: 245px;
  cursor: pointer;
  font-size: large;
  padding: 8px 16px;
  border-width: 3px;
  position: absolute;
  border-radius: 30px;
  background: transparent;
  backdrop-filter: invert(75%);
}

.upload {
  left: 90px;
}

.post {
  right: 90px;
}

.upload:hover,
.post:hover {
  background: rgba(255, 255, 255, 0.235);
}

.posting {
  left: 80px;
  right: 80px;
  bottom: 25px;
  resize: none;
  cursor: auto;
  height: 180px;
  display: block;
  position: fixed;
  font-size: 25px;
  resize: vertical;
  padding: 10px 20px;
  border-radius: 20px;
  text-align: justify;
  border: 2px solid black;
  border: 3px solid black;
  scroll-margin-right: 5px;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.25);
}

.posting::placeholder {
  color: rgba(250, 235, 215, 0.679);
}

::-webkit-scrollbar {
  width: 10px;
  margin-right: 20em;
  border-radius: 100px;
  background-color: transparent;
}

::-webkit-scrollbar-track {
  margin-block: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background: rgba(0, 0, 0, 0.25);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}

"""

print(sort_css_properties_by_full_length(css_input))
