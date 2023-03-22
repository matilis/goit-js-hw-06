const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.value.length === +inputEl.dataset.length
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
});

// Modul 6 zaj 11 -> wlasciwosci i atrybuty -> normalnie wartosc w 'dataset' zwraca "stringa" wlasciwosci i poprzez + na poczatku zmieniamy zmieniamy "stringa" na liczbe
