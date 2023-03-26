const sizeEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

sizeEl.addEventListener("input", () => {
  textEl.style.fontSize = `${sizeEl.value}px`;
});
