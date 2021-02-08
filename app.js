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
		mealDetails('${array.idMeal}')
	})
	const mealInfo = `
			<img class="w-100 meal-radius" src=${array.strMealThumb}>
			<p class="d-flex justify-content-center pt-2 fw-bold">${array.strMeal}</p>
			
		`
	menuDiv.innerHTML = mealInfo;
	menu.appendChild(menuDiv);
}
function search() {
	const contentBody = document.getElementById('menu');
	const meal = document.getElementsByClassName("meal");
	contentBody.innerHTML = ''
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
				data.meals.forEach(element => {
					createElement(element);
				});
				
			})
	}
	

}

// const mealDetails = id => {
// 	console.log(menu);
// 	const contentBody = document.getElementById('content-body');
// 	console.log(array);
// 	contentBody.removeChild(menu);
// 		fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
// 		.then(res => res.json())
// 		.then(data => {
// 			for(let i=1; i<=20;i++){
// 			const array = data.meals[0];
// 			const mealDetail = `
// 			<img class="w-75 meal-radius" src=${array.strMealThumb}>
// 			`
// 		}
// 		})



// }


