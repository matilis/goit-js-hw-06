const nameEl = document.querySelectorAll("li.item");
console.log("Number of categories: ", nameEl.length);

for (let i = 0; i < nameEl.length; i++) {
  console.log("Category: ", nameEl[i].children[0].innerText);
  console.log("Elements: ", nameEl[i].children[1].childElementCount);
}
