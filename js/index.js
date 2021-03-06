// Write your Pizza Builder JavaScript in this file.
let random = 0
// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: 'pepperoni',
    price: 1
  },
  mushrooms: {
    name: 'Mushrooms',
    price: 1
  },
  greenPeppers: {
    name: 'Green Peppers',
    price: 1
  },
  whiteSauce: {
    name: 'White sauce',
    price: 3
  },
  glutenFreeCrust: {
    name: 'Gluten-free crust',
    price: 5
  }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}



// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function (oneMushroom) {
    if (state.mushrooms === true) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });

}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function (onePepper) {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  })



}





function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function (sauce) {
    if (state.whiteSauce === false) {
      sauce.removeAttribute("sauce-white");
    } else {
      sauce.setAttribute("class", "sauce-white");
    }
  })


}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  document.querySelectorAll('.crust').forEach(function (crust) {
    if (state.glutenFreeCrust === false) {
      crust.removeAttribute("crust-gluten-free");
    } else {
      sauce.setAttribute("class", "crust-gluten-free");
    }
  })




}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.removeAttribute("active");
  })
}




document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  console.log(random)
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


document.querySelector('.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});


document.querySelector('.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  console.log("souce-test")
  renderEverything();
});




function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`