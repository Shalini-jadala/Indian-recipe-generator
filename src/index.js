function displayRecipe(response){
  console.log("recipe generated");

new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
  delay: 2,
  cursor:"",
});

}
function generateRecipe(event){
    event.preventDefault();
let inputs =document.querySelector("#user-input");
let apiKey = "0a8c6e7ct4a98df4436abe8fo0c14f17";
let prompt = `user instructions: Generate a recipe about ${inputs.value}`;
let context = `you are a very good cooking expert and love to write testy recipes. Your mission is to generate a short recipes with emojis in basic HTML.Make sure to use user instructions. Do not include html on top of page.Sign the recipe with 'SheCodes AI' inside a <strong> element and place it in center`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


let recipeElement = document.querySelector("#recipe");
recipeElement.classList.remove("hidden");
recipeElement.innerHTML = `Generating Recipe <span class = "generating">&#x1F9C9 &#x1F9C9 . . .</span>`;


console.log("Generating recipe");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);


axios.get(apiURL).then(displayRecipe);


}

let recipeFormElement = document.querySelector("#recipe-generator");
recipeFormElement.addEventListener("submit", generateRecipe);