
function generateRecipe(event){
    event.preventDefault();

    new Typewriter("#recipe", {
  strings: "List of Ingrediants",
  autoStart: true,
  delay: 2,
});
}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);