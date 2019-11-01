//Задание 1:
// Допустим, пользователь вводит названия городов через 
// пробел. Вы их присваиваете переменной. 
// Переставьте названия так, чтобы они были упорядочены 
// по алфавиту.

function sortCity(str) {
  return str
  .toLowerCase()
  .split(' ')
  .sort()
  .map(x=>x[0].toUpperCase()+x.slice(1))
  .join(' ');
}
//если честно, то код подсмотрен (кроме части с .sort), но код разобран
let str2 = prompt();
console.log(sortCity(str2)); 
let str1 = "Барнаул астрахань Сургут Ухта анапа";
console.log(sortCity(str1));

//Задание 2:
// Найти все вхождения подстроки в строку. 
// Строку и подстроку вводит пользователь.
function indexEnter (str, enter) {
	let indexes=[];
	for (i = 0; i < str.length; ++i) {
    
    if (str.substring(i, i + enter.length) == enter) {
      indexes.push(i);
    }
  }
  return indexes;
}

let str3 = "анапа астана анабиоз";
let str4 = "ана";
console.log(indexEnter(str3, str4)); 

//Задание 3 Написать функцию, которая проверяет, 
// является ли строка палиндромом (использовать стандартные методы)! 
// Палиндром — это слово или фраза, которые одинаково читаются по буквам 
// или по словам как слева направо, так и справа налево.

function palindrom (str) {
	str1 = str.toLowerCase();
	let back = [];
	
	for (let i = 0, n = str.length - 1; i < str.length; n--, i++) {
    		back[n] = str1[i];
       }
       console.log(back.join(""));
       if (back.join("")==str1) {
       	return console.log(`строка ${str} полиндром`)
       } else {
       	return console.log(`строка ${str} не полиндром`)
       }
}

let str5 = "АпаПа"
palindrom(str5);

// Задание 5* Функция принимает на вход строку и должна вернуть наиболее
//  длинную подстроку которая является палиндромом. 
//  Палиндром — это слово или фраза, которые одинаково читаются по буквам или п
//  о словам как слева направо, так и справа налево.

//пока сложно

// function mostPal (str) {
// 	let reverse = str.split("").reverse().join("")
	
// }



