// функция выполняет одно действие
// именованные функции
// обхявление функции, num1..2 - аргументы функции
function sum(num1, num2) {
// тело функции, var так же сделает функцию локальной
// let res = num1 + num2;
return num1+num2;
// return res; //возвращает значение из функции. Ретурн нужен.
}
let a = 1;
let b = 2;
let m = 3;
let n =4;
// вызов функции
res = sum(a, b);
console.log(res);
res = sum(m, n);
console.log(res);

// значение аргументов по умолчанию
function greeting(userName="Гость") {
	userName = userName || "Гость"; // старый вариант по умолчанию
console.log("Добро пожаловать "+userName);
}
// если данные не передаем, можно использовать по умолчанию (="Гость",например), появилась в es6
let name = "Tim";
greeting(name);
greeting();

// даны 2 числа - нудна функция которая принимает на вход 2 числаи  возвращает min;
function defineMin(min1, min2) {
	if (!min1 || !min2) {
		console.log("Данные не перерданы");
		return;
	}
	if (typeof min1 !== "number" || typeof min2 !== "number") {
		console.log("Данные не числа");
		return
	}
	return (min1 < min2) ? min1 : min2;
}

min = defineMin();
console.log(min);
min = defineMin(4, 2, 3, 1); //в таком случае читает только первые 2 элемента
console.log(min);
// что бы лишнего не запихали - введем проверку


//функция, которая складывает содержимое массива
function getArray(someArr) {
	let sum = 0;
	for (let i = 0; i < someArr.length; i++) {
		sum += someArr[i];
	}
	return sum;
}


// console.log(getArray(MASSIVE));

function changeStr(someStr) {
	someStr += "продолжение строки"; //приклеиваем строку 
}

function changeArr(someArr) {
	for (let i = 0; i < someArr.length; i++) {
	someArr[i] += 3; // к каждому элементу прибавляется 3 
	}
}

let str = "строка";
changeStr(str);
console.log(str); // ничего не приклеилось

arr = [2, 3, 4, 1];
changeArr(arr);
console.log(arr); // значения поменялись

// все примитивные типы : числа строки булевый тип null undefined передаются по значению
//объекты (массивы, функции и т.д) передаются по ссылке

let numVar1 = 5;
let numVar2 = numVar1; //передача по значению

numVar1 = 4; 
//numVar2 не поменяет на 4, они не связаны и занимают разные ячейки памяти, потому что присвоили
console.log(numVar1, numVar2); 

let arr1 = [1, 2, 3];
let arr2 = arr1; //скопировалась ссылка, а не значение
// Объекты таким образомнельзя сравнивать через ===
arr1[0] = 90;
console.log(arr1, arr2);

arr = [4, 7, 8];
let copyArr = arr.slice(); // через slice уже передаются значения массива
console.log(copyArr);

// функция, которая выводит от числа до 0 в обратном порядке
function printNums(num) {
	let i = num;
	while (i >= 0) {
		console.log(i);
		i--;
	}
		
	
}
printNums(3);

function printNums2(num) {
	if (num >= 0) {
		console.log(num);
		//рекурсивный вызов функции, рекурсию можно заменить циклом
		printNums2(num-1); // передает на 1 единицу меньше в большую функцию
	}
}
printNums2(4);

// переменное количество аргументов, принимает функция, но не передает - не пользоваться
//все что ввели при вызове передается в функцию
function printinfo() {
console.log(arguments);
console.log(arguments[0]);

for (let i = 0; i < arguments.length; i++) {
	console.log(arguments[i]);
}
}
printinfo("Mike", 31, "+7999999");

// оператор spread (...) es6
function printUserInfo (login, pwd, ...other) {
		console.log(login);
		console.log(pwd);
		console.log(other);
}
printUserInfo("login", "12345", "jihny", 18)
//в other все остальное пошло массимвом

function sum3(a, b, c) {
	return a + b + c;
}

arr = [1, 5, 9];
res = sum3(...arr); //передаем массив в res - разобрали элементы массива и сложили
// если строки - то они скрепляются
console.log(res);

//анонимные функции - функции без имени, нужно сохранять в переменные
 let subtractionNums = function (num1, num2) {
 	return num1 - num2;
 }
 console.log(subtractionNums(a, b)); 

 //Или
 res = subtractionNums(a,b);
 console.log(res);

 //Стрелочные функции (es6) тоже самое, но другой синтаксис, сохраняем в переменную и без function
subtractionNums = (num1, num2) => num1 - num2;
//если не одна строчка
subtractionNums = (num1, num2) => {
	//инструкция1
	//инструкция2
	//инструкция3
	return num1 - num2;
}

res = subtractionNums(a,b);
console.log(res);

arr = [2, 0, 9];
function sqrt(num) {
	return num*num;
}
// let sqrt = num => num*num; //тоже самое

//написать функцию, которая принимает на вход функцию и массив
//и обрабатывает каждый элемент массива перерданной функцией
function arrFunc(func, someArr) {
	let localArr = [];
	for (let i = 0; i < someArr.length; i++) {
	localArr[i] = func(someArr[i]);
	}
	return localArr;
}
console.log(arrFunc(sqrt, arr));

//разобраться с обычными функциями, как передать и как вернуть

//Замыканик 
function multi(num) {
	let x = num;
	return function (m) {
		return x * m;
	}
}

let multiSix = multi(6);
//вернули функцию, в которой есть 6
//в multixis вернули функцию
//multisix - получается функция, которая все на 6 перемножает
res = multiSix(5);
console.log(res);
res = multiSix(10);
console.log(res);

//самовызывающаяся функция
//просто запомнить синтаксис, функция единственное, что ограничивает var
//все именованные функции глобальную видимость имеют
(function (){
	console.log("самовызывающаяся функция");
} ())

//методы для работы с массивами

arr = [12, -56, 0, -2, 34, 67, -7];
// 1 forEach позволяет изменять элементы мыссива
arr.forEach(function (elem,index, array) {
	console.log("Элемент №" + index + "=" + elem);
	array[index] += 2;
	//изменяет все элементы на +2
});

console.log(arr);

//2 filter - возвращает новый массив
// состоящий из элементов прошелших проверку переданной функции
arr = [12, -56, 0, -2, 34, 67, -7];
let lessZero = (elem, index, array) => elem < 0;
//возвращает тру или фолс больше нуля или меньше
//lessZero - имя переменной в которую сохранена функция
//filter принимает на вход функцию
let newArr = arr.filter(lessZero);
console.log(newArr);
//выдал все элементы меньше нуля

//3 Map возвращает новый массив, состоящий
// из элементов, преобразованных переменной функцией
//юзает функцию на каждый элемент
//элементы точно заменит в отличие forEach
arr = [12, -56, 0, -2, 34, 67, -7];
let sqr  = (elem, index, array) => elem * elem;
newArr = arr.map(sqr);
console.log(newArr);

//4 метод some - удовлетворяет ли хоть какой элемент условию
arr = [12, -56, 0, -2, 34, 67, -7];
lessZero = (elem, index, array) => elem < 0;
res = arr.some(lessZero); //возвращает тру
console.log(res);

// 5 метод every, каждый 
// элемент должен удовлетворять условию
arr = [12, -56, 0, -2, 34, 67, -7];
lessZero = (elem, index, array) => elem < 0;
res = arr.every(lessZero); //возвращает false
console.log(res);

