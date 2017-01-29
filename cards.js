'use strict';
console.log('ready');

const input = document.getElementById("text-area");
const createButton = document.getElementById("create-button");
const cardDiv = document.getElementById("card-div");
const body = document.getElementById("body");
let inputValue = "";

console.log('createButton:', createButton);
createButton.addEventListener("click", makeCard);
body.addEventListener("click", deleteCard);

function makeCard(e) {

	inputValue = input.value;
	let card = `<article class="card">
				<p> ${inputValue} </p> 
				<button class="delete">
				Delete</button> 
				</article>`;

	cardDiv.innerHTML += card;
	
}	


function deleteCard (e) {
	if (e.target.className === "delete") {
		let cardToDelete = e.target.parentElement;
		console.log('cardToDelete:', cardToDelete);
		cardDiv.removeChild(cardToDelete);
	}
}



