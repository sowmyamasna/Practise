let recipeObj = {
    title: "Tomato Pasta",
    image: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: [
      "Pasta",
      "Oil",
      "Onions",
      "Salt",
      "Tomato Pasta Sauce",
      "Cheese",
    ],
  };
  
  document.getElementById("title").textContent = recipeObj.title;
  document.getElementById("photo").src = recipeObj.image;
  
  indexList = recipeObj.ingredients;
  let ul = document.getElementById("itemList");
  
  indexList.forEach(function (recipeObj) {
    let li = document.createElement("li");
    li.textContent = recipeObj;
    ul.appendChild(li);
  });