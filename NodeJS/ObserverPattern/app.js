const pizzaIndividual = require('./IndividualPizza')
const pizzaMedium = require('./MediumPizza')
const pizzaFamiliar = require('./FamiliarPizza')


const createIndividualPizza = () => {
    pizzaIndividual
    .on("cookFinished", () => {
        console.log(`PizzaIndividual is ready to release.`)
        // no clearing interval of release
    })
    .on("cookStarted", () => console.log("PizzaIndividual is in the oven"))
    .on("charredPizza", () =>
        console.error("OOPS! The PizzaIndividual is charred...")
    )
    .add("mozzarella")
    .add("Meat")
    .cook()
}

const createMediumPizza = () => {
    pizzaMedium
    .on("ingredientAdded", ing => console.log(`${ing} added`))
    .on("maxIngredientsReached", ing =>
      console.log(`Max ingredients (${pizzaMedium.maxIngredients}) reached`)
    )
    .on("ingredientRemoved", ing => console.log(`${ing} removed`))
    .on("errorRemovingIngredient", ing =>
      console.log(`Can not remove ${ing} because is not in the pizza`)
    )
    .on("cookStarted", () => console.log("Pizza is in the oven."))
    .on("cookFinished", release => {
      console.log(`Pizza is ready to release.`)
      clearTimeout(release)
      console.info("Pizza was released!")
    })
    .add("Tomato")
    .add("Mushrooms")
    .add("Scarmoza")
    .add("Bone")
    .remove("Bone")
    .add("Pepper")
    .remove("Peper")
    .add("Onion")
    .add("Pepperoni")
    .add("Oregano")
    .cook()
}

const createFamiliarPizza = () => {
    pizzaFamiliar
    .on("cookFinished", () => {
      console.log(`PizzaFamiliar is ready to release.`)
      // no clearing interval of release
    })
    .on("cookStarted", () => console.log("PizzaFamiliar is in the oven"))
    .on("charredPizza", () =>
      console.error("OOPS! The PizzaFamiliar is charred...")
    )
    .add("mozzarella")
    .add("Meat")
    .cook()
}
  
createIndividualPizza()
createMediumPizza()
createFamiliarPizza()