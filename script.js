const API_URL = "https://random-flat-colors.vercel.app/api/random?count=5";
const colorPalette = document.getElementById("color-panel");
const colorPalette2 = document.getElementById("color-panel2");
const progressbar = document.getElementById("pbar");
const progressbarText = document.getElementById("ptext");
const addCreative = document.getElementById("addCreative");
const createCreative = document.getElementById("creativeCreation");
const cross = document.getElementById("close");
const handleCreate = document.getElementById("createCreative");
const formattedCreatives = document.getElementById("creatives");
const creative = [];

async function getColor() {
  const res = await fetch(API_URL);
  const { colors } = await res.json();
  createColorPalette(colors);
}

getColor();
function createColorPalette(colors) {
  colors.forEach((color) => {
    let btn = document.createElement("button");
    btn.style.backgroundColor = color;
    colorPalette.appendChild(btn);
  });
  colors.forEach((color) => {
    let btn = document.createElement("button");
    btn.style.backgroundColor = color;
    colorPalette2.appendChild(btn);
  });
}
handleProgressBar();
function handleProgressBar() {
  let creativeLen = creative.length === 5 ? 5 : creative.length + 1;
  progressbar.value = creativeLen * 20;
  progressbarText.innerText = creativeLen + "/ 5 Creatives";
}

addCreative.addEventListener("click", () => {
  if (creative.length === 5) {
    return;
  }
  createCreative.classList.toggle("toggle");
});
cross.addEventListener("click", () => {
  createCreative.classList.toggle("toggle");
});
handleCreate.addEventListener("click", () => {
  let title = document.getElementById("title").value;
  let subtitle = document.getElementById("subtitle").value;
});
