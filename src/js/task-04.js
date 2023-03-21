let counterValue = 0;

const btnPlus = document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue = counterValue + 1;
    document.getElementById("value").innerHTML = counterValue;
  });

const btnMinus = document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue = counterValue - 1;
    document.getElementById("value").innerHTML = counterValue;
  });
