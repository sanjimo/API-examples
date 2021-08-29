const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';
    //if there is no seach item
    if (searchText == '') {
        window.alert('Type your searching food name please!');
    }
    //if there is any search item
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchFood(data.meals))
    }
}

const displaySearchFood = meals => {
    const searchResult = document.getElementById('search-result');
    //clear data
    searchResult.textContent = '';
    if (meals.length == 0) {
        //message dite hbe..pore add korbo..
    }
    else {
        meals.forEach(meal => {
            //console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetail('${meal.idMeal}')" class="card border-warning">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                   <h5 class="card-title">${meal.strMeal}</h5>
                   <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>`;
            searchResult.appendChild(div);
        });
    }
}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    //first way
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    //second way
    //fetch(url)
    //  .then(res => res.json())
    // .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    //clear data
    mealDetails.textContent = '';
    div.classList.add('card');
    div.innerHTML = `
    <img width="200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-warning">Go YOUTUBE!</a>
    </div>
    `;
    mealDetails.appendChild(div);
}