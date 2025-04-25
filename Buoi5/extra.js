n = Number(prompt(`Nhập n là số giây: `));

if (n > 3600) {
  hours = Math.floor(n / 3600);
  n = n % 3600;
} else {
  hours = `00`;
}
if (n > 60) {
  minutes = Math.floor(n / 60);
  n = n % 60;
} else {
  minutes = `00`;
}

if (String(hours).length == 1) {
  hours = "0" + String(hours);
}
if (String(minutes).length == 1) {
  minutes = "0" + String(minutes);
}

alert(`${hours}:${minutes}:${n}`);
