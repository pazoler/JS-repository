// синтаксис ветвления
// if (условие) { 
// 	блок кода если условие true (если выполняется, то внутрь блока скобок)

// }

// Если не выполняется, то идет дальше вне скобок

let age = 17;

if (age >= 18) {
	console.log("Добро пожаловать")
}
 else (
	console.log("не добро пожаловать"));

// в зависимости от значений переменной
//задать тегу body определенный цвет
let season = "gfdbfd";
if (season==="summer") {
	document.body.style.background = "green"
	} else if (season==="autumn") {
	document.body.style.background = "orange"
	} else if (season==="spring") {
	document.body.style.background = "yellow"
	} else if (season==="winter") {
	document.body.style.background = "blue"
	} else {console.log("Введите время года")};

let day = "суббота";
if (day === "воскресенье" || day === "суббота") {
	console.log("Выходной")
}

// оператор выбора switch проверяет на строгое равенсство
//код выоплняется до Break
//  : - Объединение кейсов
// default - аналог else
let ticketNumber = "22222"
switch (ticketNumber) {
	case "11111":
	alert("Большой приз");
	break;
	case "22222":
	case "33333":
	alert("Middle prize");
	break;
	case "44444":
	case "55555":
	case "66666":
	alert("small prize");
	break;
	default:
	alert("try again");

}

// циклы для выполения однотипоного действия несколько раз
// while И for
// //while (условие) {
// 	тело цикла (выполняется тело) и пока условие не будет выполняться, не выйдем из цикла
// }
// одно выполнение цикла - итерация


// let key= null;
// while (key !== "admin") {
// 	key = prompt("введите ключ");
// }
// console.log(key);



// в промт вводят данные пользователи

//цикл с постусловием do ... while

// do { - тело цикла выполнится первый раз, а потом от условия
// 	тело цикла
// } while(условие);
// область видимости let - текущий блок - далее см
do {
let code = "value";
} while(false);

// числа  от 1 до 4
let a = 5;

do {
	console.log("a="+a);
	a--;
} while (a);
//проверяет либо на тру либо на фолс
//0, null, undefined - преобразуется в фолс, 
// ""- false, a " " - true

//дано 5 попыток, чтобы  угадать число
let attempCount=5;
let answer = 345;

//prompt возвращает строчку
// for (инициализация; условие; обновление счетчика)
// for (let i = 1; i <= attempCount; i++) {
// 	//тело цикла
// 	let data = prompt("Угадай число");
// 	if (parseInt(data)===answer) {

// 	alert("Вы угадали");
// 	break; //выход из цикла
// 	}
	
// }

// вывести четные числа от 3 до 58


for (let n = 3; n <= 58; n++) {
	if (n%2===0) {
		console.log(n);
	}
}




