const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulTag = document.getElementById("ingredients");
console.log(ulTag);

const styleEl = document.querySelectorAll("style");

ingredients.forEach(function (e) {
  const liTagName = document.createElement("li");
  liTagName.innerText = e;

  ulTag.append(liTagName);
});
