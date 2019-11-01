let str1 = 'строка в одинарных ковычках';
let str2 = "строка в двойных ковычках";

// строчки представлены массивом, где каждая буква свой элемент
str1 = 'Строка с "текстом в кавычках"';
str1 = 'Строка с текстом в кавычках';
console.log(str1, str2);

let lower = str1.toLowerCase();
//возвращает всо в нижнем регистре
console.log(lower);
//возвращает всо в верхнем регистре
let upper = str1.toUpperCase();
console.log(upper);

//выдает тру или фолс в зависимости от того,
// начинается или заканчивается как указано
console.log(str1.startsWith("Ст"));
console.log(str1.endsWith("Ст"));

str1 = "ABC";
str1 = "FGTRH";

console.log(str1.localeCompare(str2));
//0 если равны
// -1 - если первая str1 меньше
//1 - если вторая str2 меньше
// не по длине, а по utf 16

//шаблоны
let age = 34;
let name = "Tom";
console.log(`Имя пользователя: ${name}, возвраст ${age} года`);


//написать функцию - конвертер строки
//принимает на вход строкуи флаг
// возвращает преобразованную строку
// возможности в зависимости от флага 
// 1 - перевод всех символом в нижний регистр
// 2 - перевод всех символов в верзний регистр
// 3 - перевод всех символов в нижний и первых букв слов в верхний регистр

// function stringConverter(str, flag) {
// 	let string;
// 	let num = 1;
// 	if (flag === 1) {
// 		string = str.toUpperCase();
// 	}
// 	if (flag === 2) {
// 		string = str.toLowerCase();
// 	}

// 	if (flag === 3) {
// 		for (i = 0; i < str.length; i++) 
// 		{
// 			if (num === 0) 
// 			{
// 				string[i] = str[i].toLowerCase();
// 				if (str[i] == " ") 
// 				{
// 				num === 1;
// 				}	
// 			} else if (num === 1) 
// 			{
// 				string[i] = str[i].toUpperCase();
// 				num === 0;
// 			}
			
			
				
// 		}
// 	}
// 	return string
// }

// console.log(stringConverter("gdfh hsfg hwh", 3))

console.log(str2.includes("строка"));
//сообщает, содержит ли строка данное слово

function isSpam(str, ...word) {
	
	for (let i = 0; i < word.length; i++) {
	if (str.includes(word[i])) {
		console.log(word[i]);
		return true;
	}
	}
	return false;
}
