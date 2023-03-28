

// Favorite button $('.favButton').on('click', event => {        let favButton = $(event.target).parents()[1].favouriteDrinks;                let favouriteDrinks = localStorage.getItem("favouriteDrinks");        if (!favouriteDrinks){            localStorage.setItem("favouriteDrinks", JSON.stringify([]));            favouriteDrinks = JSON.parse(localStorage.getItem("favouriteDrinks"));        }
myDrink = $('#myDrink').text();
favouriteDrinks.push('myDrink');    })
// Button animation// let favButton = document.querySelector('.favButton');
// favButton.addEventListener('click', () => {//     favButton.classList.toggle('active');// })
