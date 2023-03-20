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
ulTag.classList.add("item");

ingredients.forEach(function (e) {
  const liTagName = document.createElement("li");
  liTagName.innerText = e;
  ulTag.append(liTagName);
});
