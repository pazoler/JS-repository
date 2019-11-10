
//вопрос: как не дать измениться "подарку" при его повторном нажатии?

let gifts = ['Ничего', 'Конфетка', 'Пожелание не болеть', 'Обзывательство конкурента', 'Плакат с динозавром'];

function randomGift (arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}


function createBlock(n) {
	let field = document.createElement("div");
	field.id = ("container");
	for (let i = 0; i < n*n; i++) {
		let gift = document.createElement("p");
		gift.classList.add("hide");
		gift.innerText = "Подарок";
		field.prepend(gift);
	}
	document.body.prepend(field);
}

createBlock(4);


let presentsContainer = document.getElementById("container");
presentsContainer.addEventListener("click", showGift);

let click = 0;
function showGift(event) {
		
	let clickElem = event.target;
	console.log(clickElem);
	
	let present = randomGift(gifts);
	
	if (present) {
		
		click += 1;
		console.log(click);
		if (click == 3) {
			this.removeEventListener('click', showGift);
		}
		clickElem.innerText = present;
		clickElem.classList.add("present");
		

	}
	}
