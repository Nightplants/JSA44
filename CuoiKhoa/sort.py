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
  background-image: url("/CuoiKhoa/src/image/Posting.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.texts {
  position: block;
  margin: 10px 80px 0;
  background-color: rgba(0, 0, 0, 0.412);
}

.container {
  position: relative;
  display: flex;
  position: absolute;
  gap: 10px;
  overflow-x: auto;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 80px;
  top: 310px;
  left: 80px;
  right: 80px;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(20px);
  border-radius: 20px;
}

.preview {
  position: relative;
  width: 120px;
  height: 80px;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
}

.preview img,
.preview video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload {
  padding: 8px 16px;
  position: absolute;
  font-size: large;
  left: 90px;
  bottom: 245px;
  border-radius: 30px;
  background: transparent;
  backdrop-filter: invert(75%);
  border-width: 3px;
  cursor: pointer;
}

.upload:hover {
  background: rgba(255, 255, 255, 0.235);
}

.posting {
  display: block;
  resize: vertical;
  height: 180px;
  position: fixed;
  bottom: 25px;
  left: 80px;
  right: 80px;
  border-radius: 20px;
  border: 2px solid black;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  text-align: justify;
  padding: 10px 20px;
  font-size: 25px;
  border: 3px solid black;
  scroll-margin-right: 5px;
  resize: none;
  cursor: auto;
}

.posting::placeholder {
  color: rgba(250, 235, 215, 0.679);
}

::-webkit-scrollbar {
  background-color: transparent;
  width: 10px;
  border-radius: 100px;
  margin-right: 20em;
}

::-webkit-scrollbar-track {
  margin-block: 6px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
"""

print(sort_css_properties_by_full_length(css_input))
