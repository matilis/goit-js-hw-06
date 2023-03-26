function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxEl = document.getElementById("boxes");
const inputEl = document.querySelector("input");

let newSizeW = 20;
let newSizeH = 20;

createBtn.addEventListener("click", () => {
  for (let i = 0; i < inputEl.value; i++) {
    const newBox = document.createElement("div");
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = (newSizeW += 10) + "px";
    newBox.style.height = (newSizeH += 10) + "px";
    boxEl.append(newBox);
  }
});

destroyBtn.addEventListener("click", () => {
  boxEl.innerHTML = "";
  inputEl.value = "";
  location.reload();
});

// dodawanie inny zapis:

// const createBoxes = () => {
//   for (let i = 0; i < document.querySelector("input").value; i++) {
//     const newBox = document.createElement("div");
//     newBox.style.backgroundColor = getRandomHexColor();
//     newBox.style.width = (newSizeW += 10) + "px";
//     newBox.style.height = (newSizeW += 10) + "px";
//     boxEl.append(newBox);
//   }
// };
// createBtn.addEventListener("click", createBoxes);

// usuwanie wpisujac liczbe elementow:

// 1 sposob
// destroyBtn.addEventListener("click", () => {
//   for (let i = 0; i < inputEl.value; i++) {
//     boxEl.removeChild(boxEl.lastElementChild);
//   }
// });

// 2 sposob
// const destroyDiv = () => {
//   for (let i = 0; i < inputEl.value; i++) {
//     boxEl.removeChild(boxEl.lastElementChild);
//   }
// };
// destroyBtn.addEventListener("click", () => destroyDiv(inputEl.value));
