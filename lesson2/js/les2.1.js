// массивы
//в переменные будут севится много переменныъ
let arr = [];
// [] - символ массива, пока пустой
let colors = ["red", "blue", "white", "green"];
// массив состоит их элементов
//элементы пронумерованы индексами начиная с 0
// доступ к элементам
// осуществляется по индексу..
console.log(colors[2]);
console.log(colors[3]);

// изменение элементов массива
colors[2] = "yellow";
console.log(colors[2]);
console.log(colors);

//длина массива .length
console.log(colors.length);
//перебирание массива циклом
for (let i=0; i < colors.length; i++)
{
	console.log("Цвет: "+colors[i]);
}
// вывод товара - однотипное действие
// методы для работы с массивами вдруг уже реализовано
colors.pop(); //удалить и возвратить последний последдний элемент
let lastElem = colors.pop(); //вернет - значит запишет прин надобности
colors.push("black", "pink"); //добавляет элементы в конец массива
console.log(colors); // в конце работают быстрее

let firstElem=colors.shift(); // удаляет первые элементы
colors.unshift("orange", "brown") //добавляет первые элементы массива

console.log(colors);

//содерижтся ли элемент в массиве? (нужный и возвращает тру или фолс)
console.log(colors.includes("orange")); //true

let nums = [4, 67, 23, 90];
//найти сумму элементов массива
let summ = 0;
for (let i = 0; i < nums.length; i++) {
	
	summ += nums[i];
}
console.log(summ);
