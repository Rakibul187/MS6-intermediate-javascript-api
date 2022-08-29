const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
                    <div class="card">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                            <button onclick="loadMealDetails(${meal.idMeal})" class="btn w-100 btn-warning">Details</button>
                        </div>
        `;
        mealsContainer.appendChild(mealDiv)
    });
}

const searchfood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log('searching', searchText)
    loadMeals(searchText);
}

const loadMealDetails = (idMeal) => {
    // console.log('mdccccccccccc', idMeal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    // console.log(meal)
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const detailDiv = document.createElement('div')
    detailDiv.classList.add('card')

    detailDiv.innerHTML = `
    <img class="h-25" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${meal.strMeal}</h3>
                        <h4 class="card-title">Origin: ${meal.strArea}</h4>
                        
                        <h6>Flavours: <span>${meal.strIngredient1}</span>, 
                        <span>${meal.strIngredient2}</span>, 
                        <span>${meal.strIngredient3}</span>, 
                        <span>${meal.strIngredient4}</span>, 
                        <span>${meal.strIngredient6} etc.</span></h6>
                        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                        <button class="bg-warning p-2 border border-0 rounded w-100">Order Now</button>
                    </div>
    `
    detailContainer.appendChild(detailDiv)
}
loadMeals('')
// loadMeals('fish')
// loadMeals('rice')
// loadMeals('puding')