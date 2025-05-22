let body = document.body;
body.style.margin = "0";
body.style.padding = "0";
body.style.backgroundColor = "black";
body.style.fontFamily = "Arial, sans-serif";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.color = "white";
body.style.textAlign = "center";

let container = document.getElementById("container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.gap = "20px";

let title = document.getElementById("title");
title.style.fontSize = "24px";
title.style.margin = "0";

let instruction = document.getElementById("instruction");
instruction.style.fontSize = "18px";
instruction.style.margin = "0";
instruction.style.display = "inline-block";
instruction.style.width = "55%";

let phoneFrame = document.getElementById("phone-frame");
phoneFrame.style.border = "10px solid #333";
phoneFrame.style.borderRadius = "30px";
phoneFrame.style.padding = "10px";
phoneFrame.style.backgroundColor = "#111";
phoneFrame.style.width = "300px";
phoneFrame.style.height = "auto";
phoneFrame.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";

let cameraUI = document.getElementById("camera-ui");
cameraUI.style.position = "relative";
cameraUI.style.width = "100%";
cameraUI.style.height = "500px";
cameraUI.style.backgroundColor = "#000";
cameraUI.style.borderRadius = "20px";
cameraUI.style.overflow = "hidden";

let iconFlash = document.getElementById("icon-flash");
iconFlash.style.position = "absolute";
iconFlash.style.top = "20px";
iconFlash.style.left = "20px";
iconFlash.style.fontSize = "24px";
iconFlash.style.color = "white";

let iconCog = document.getElementById("icon-cog");
iconCog.style.position = "absolute";
iconCog.style.top = "20px";
iconCog.style.right = "20px";
iconCog.style.fontSize = "24px";
iconCog.style.color = "white";

let shutter = document.getElementById("shutter");
shutter.style.position = "absolute";
shutter.style.bottom = "30px";
shutter.style.left = "50%";
shutter.style.transform = "translateX(-50%)";
shutter.style.width = "60px";
shutter.style.height = "60px";
shutter.style.background = "white";
shutter.style.borderRadius = "50%";
shutter.style.border = "5px solid #ccc";
