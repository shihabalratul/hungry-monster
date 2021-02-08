for (let i = 0; i <= 7; i++) {
	let id = 52770 + i;
	console.log(id);

	fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
		.then(res => res.json())
		.then(data => {
			const array = data.meals[0];
			const menu = document.getElementById("menu");
			const menuDiv = document.createElement("div");
			menuDiv.className = '';
			const mealInfo = `
			<div class="p-4 bg-light m-2 meal-radius">
			<img class="w-100 meal-radius" src=${array.strMealThumb}>
			<p class="d-flex justify-content-center pt-2 fw-bold">${array.strMeal}</p>
			</div>
		`
			menuDiv.innerHTML = mealInfo;
			menu.appendChild(menuDiv);

			// randomMeal(array);

		})
}
// function randomMeal(array) {
// 	// for(let i=0; i<=8; i++){
// 	console.log(array)
// 	const menu = document.getElementById("menu");
// 	const menuDiv = document.createElement("div");
// 	menuDiv.className = 'd-flex';
// 	const mealInfo = `
// 			<div class="meals p-3 bg-light ">
// 			<img class="img-thumbnail rounded" src=${array.strMealThumb}>
// 			<p>${array.strMeal}</p>
// 			</div>
// 		`
// 	menuDiv.innerHTML = mealInfo;
// 	menu.appendChild(menuDiv);
// 	// }
// }