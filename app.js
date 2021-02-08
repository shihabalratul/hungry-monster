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

function mealDetails(array){
	removeContent();
	const mealDetails= document.getElementById("mealDetail");
		const ingredientsDiv=document.createElement("div")
		const ingredients=`
		<img src='${array.strMealThumb}' class="image-align d-block mx-auto meal-radius mt-4">
		<p>${array.strMeasure1} ${array.strIngredient1}</p>
		<p>${array.strMeasure2} ${array.strIngredient2}</p>
		<p>${array.strMeasure3} ${array.strIngredient3}</p>
		<p>${array.strMeasure4} ${array.strIngredient4}</p>
		<p>${array.strMeasure5} ${array.strIngredient5}</p>
		<p>${array.strMeasure6} ${array.strIngredient6}</p>
		`
		ingredientsDiv.innerHTML=ingredients;
		mealDetails.appendChild(ingredientsDiv);

}
function removeContent(){
	const contentBody = document.getElementById('menu');
	const meal = document.getElementsByClassName("meal");
	contentBody.innerHTML = '';
}

