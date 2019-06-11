class Recipe {
    constructor(title, serving_size, ingredients) {
        this.title = title;
        this.serving_size = serving_size;
        this.ingredients = ingredients;
    }
}
const recipe1 = new Recipe('Pizza', 2, [ 'chees', 'Tomato sauce', 'bread flour' ]);

function printRecipe(obj) {
    console.log(`*${obj.title}`);
    console.log(`*Serves: ${obj.serving_size}`);
    console.log(`*ingredients:`);
    for (let i = 0; i < obj.ingredients.length; i++) {
        console.log(`     *${obj.ingredients[i]}`);
    }
}
printRecipe(recipe1);
