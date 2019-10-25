// однострочный комментарий - все инструкции заканчивается ;
// Javascript - объектно-ориентированный язык
// интерпретирует язык со слабой динамической типизацией
// интерпретатор уэе встроен в браузер
// для валидации данных форм - ввод и корректность
// связываться с элементами хтмл
// клиентские события, расчеты в браузере
// заявки запроса на сервер
// данные сохраняются в переменные, выделяется память и туда записывается

// объявление переменных (создание)
// 3 способа
var login = "qwerty";
// 2 способ
let user_name = "Алексей";
// вывод информации, otladka
console.log(login, user_name);
// отличаются областью видимости, вар - глобальная область видимости
// может быть ограничения функций
// let - видимость на блок
console.log(window);
// вар может во все функции попасть
// переопределение значения переменной что была объявлена ранее
login = "adfgg";
user_name = "Василий";

// неизменны - все буквы заглавные, новые слова через нижнее подчеркивание
const VERSION_CODE = 345;
let some_data;
some_data = "Данные";
some_data = "другие данные";
console.log(some_data);

// типы данных
// числа - number
let age = 18;
let temp = -32;
let zero = 0;
let width = 49.7;
// строки - тип string - с ковычками
let reg_info = "Регистарция прошла успшено";
let auth_info = 'Авторизация прошла успешно';
let greeting = 'Добро пожаловать в "сюда"';
//       \\ - экранируют кавычки
console.log(greeting);

// логический тип boolean - Либо true либо false
let active = true;
let stopped = false;

// значение неизестно - null;
// значение не присвоено - undefined
let undefinedvalue;
console.log(undefinedvalue);
let unknownvalue = null;
console.log(unknownvalue);
// определить тип данных - возвращает
console.log(typeof active);
console.log(typeof age);
console.log(typeof login);

// операторы
// бинарные и унарные
// арифметические
// +-/* %-остаток от деления
let height = 45;
height = height * 2;
console.log(height);

console.log(3+8); //11
console.log('3'+8); // если строка+ число, то склеются
// конкатенация - склейка
console.log(+'3'+8); //+'3' - приводится тройка к числу
console.log(+'string'); //NaN - not a number
console.log(+true); // 1

console.log(34 /'2');
console.log(34 *'2');
console.log(34 - '2');

//проверка на Nun
console.log(isNaN("string")); //true
console.log(isNaN("23")); //false
console.log(isNaN("23px")); //true
console.log(isNaN(false)); //false
console.log(isNaN(true)); //false

console.log(34 / 0); //infinity
console.log(-34 / 0); //-infinity

console.log(9%2);
console.log(546%10);

// операторы присваивания =
// = \ += \ *= \ /= \ %=
let num = 10;
num = num +10; //20 num += 10 тоже самое
num = num -10; //20 num -= 10 тоже самое
num = num *10; //20 num *= 10 тоже самое
num = num /10; //20 num /= 10 тоже самое
num = num %10; //20 num %= 10 тоже самое
console.log(num)

// Операторы сравнения - либо true либо false
// >  <   =    >=   <=
// == равенство
// != неравенство
// === строгое равенство
// !== строгое неравенство
height = 140;
width = '140';
num = 500;

login = 'qwerty';
let login2 = 'asd';

console.log(height == width); //true может число к строке приравнять
console.log(height === width); //false неравны, еще и тип данных чекает

console.log(num > width); // true
console.log(height > width);// false
console.log(height >= width); //true

console.log(login < login2); // utf-16 - сравниваются
//сравниваются номера в табличке. первые буквы, посимвольно

//инкремент и декремент
// инкремент - увеличивает на 1
// декремент - уменьшает значение на 1
num = 2;
console.log(++num);
// сначала увеличивает, потом возвращает значение

// префиксная форма ++, постфиксная форма ++
num = 2;
console.log(num++);
console.log(num);
// сначало возвращает, потом увеличивает

// с декрементом так же
num = 2;
console.log(--num);

num = 2;
console.log(num--);
console.log(num);

let result = num++ - num++ + num++ - --num
//7-8+9-9
console.log(result)

//операторы || - ИЛИ
//! - НЕ
//&& - И

//тернанрый оператор ?
// result = (условие) ? значение1 : значени2;
// приосходит проверка условия, если тру, то оператор возвращает значени1, а если фолс, то значение2
width = 450;
height = 300;

(height < width) && (height > 100)
(height < width) ||(height > 100)
(!height < width) && (height > 100)
result = (height < width) ||(height > 100) // true

result = height > width ? "высота больше ширины" : "ширина больше высоты";
console.log(result)
// преобразование строки в число
// parseInt - считывает число, пока не дойдет до нечисла
age = '13 лет';
age = parseInt(age);
console.log(age);


// parseFloat считывает дробь, воспринмает только точку
width = '1.5em' 
width = parseFloat (width);
console.log(width);
