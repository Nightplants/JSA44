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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: antiquewhite;
}

body {
  display: flex;
  justify-content: center;
  background-image: url(/CuoiKhoa/src/image/Sign-create.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  margin-top: 10%;
  backdrop-filter: invert(80%);
  border: 4px rgb(50, 135, 255) solid;
  border-radius: 10px;
  width: 315px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.container h2 {
  text-align: center;
  font-size: 35px;
  display: inline-block;
  text-align: center;
  cursor: default;
}

.container h2:hover {
  font-size: 40px;
}

.container input {
  width: 270px;
  height: 30px;
  border-radius: 5px;
  font-size: larger;
  background: rgba(255, 255, 255, 0.2);
}

.container input::placeholder {
  color: rgba(250, 235, 215, 0.4);
}

.container p {
  font-size: large;
  text-align: left;
  display: inline;
  margin-top: 0;
}

p a {
  color: rgb(255, 170, 52);
}

p a:hover {
  color: rgb(212, 124, 0);
}

.container .create_acc {
  width: max-content;
  padding: 0 30px;
  height: 40px;
  font-size: 22px;
  border-radius: 5px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.2);
}

.container .create_acc:hover,
input:hover {
  background: rgba(255, 255, 255, 0.475);
}

"""

print(sort_css_properties_by_full_length(css_input))
