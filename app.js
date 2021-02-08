// FETCH DATA BY ID
for (let i = 0; i <= 7; i++) {
	let id = 52770 + i;
	console.log(id);

	fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
		.then(res => res.json())
		.then(data => {
			const array = data.meals[0];
			createElement(array);
		})
}

// CREATE NEW ELEMENT
function createElement(array) {
	
	const menu = document.getElementById("menu");
	const menuDiv = document.createElement("div");
	menuDiv.className = "p-4 bg-light meal-radius meal"
	menuDiv.addEventListener("click", function () {
		mealDetails(array)
	})
	const mealInfo = `
			<img class="w-100 meal-radius" src=${array.strMealThumb}>
			<p class="d-flex justify-content-center pt-2 fw-bold">${array.strMeal}</p>
			
		`
	menuDiv.innerHTML = mealInfo;
	menu.appendChild(menuDiv);
}

// SEARCH FOR MEAL
function search() {
	removeContent();
	const inputKeyword = document.getElementById('search-input').value;
	console.log(inputKeyword)
	const notFound = document.getElementById('not-found');

	if(inputKeyword == false){

		notFound.innerHTML = `
		<h1 class="d-flex justify-content-center mt-5 pt-5">Sorry no result found</h1>
		`
	}
	else{
		notFound.innerHTML = ''
		const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
		fetch(url + inputKeyword)
			.then(res => res.json())
			.then(data => {
				data.forEach(element => {
					createElement(element);
				});
				
			})
	}
	

}

// SHOW MEAL DETAILS AND INGREDIENT
function mealDetails(array){
	removeContent();
	const mealDetails= document.getElementById("mealDetail");
		const ingredientsDiv=document.createElement("div")
		ingredientsDiv.className ="text-align"
		const ingredients=`
		<img src='${array.strMealThumb}' class="image-align d-block mx-auto meal-radius my-3">
		<h2>${array.strMeal}</h2>
		<h4>Ingredients</h4>
		<ul>
		<li>${array.strMeasure1} ${array.strIngredient1}</li>
		<li>${array.strMeasure2} ${array.strIngredient2}</li>
		<li>${array.strMeasure3} ${array.strIngredient3}</li>
		<li>${array.strMeasure4} ${array.strIngredient4}</li>
		<li>${array.strMeasure5} ${array.strIngredient5}</li>
		<li>${array.strMeasure6} ${array.strIngredient6}</li>
		</ul>
		`
		ingredientsDiv.innerHTML=ingredients;
		mealDetails.appendChild(ingredientsDiv);

}

//REMOVE HOME PAGE CONTENTS
function removeContent(){
	const contentBody = document.getElementById('menu');
	const meal = document.getElementsByClassName("meal");
	contentBody.innerHTML = '';
}

