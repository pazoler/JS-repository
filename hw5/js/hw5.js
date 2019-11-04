// для домашнего задания номер 1 и 2
    let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };


    // для домашнего задания номер 3
    let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    	{ author: 'аааа', title: 'аааааа'} ];

//Задание 1:
// Написать функцию со следующими аргументами: 
// объект, from (значение от), to (значение до). 
// Функция должна вернуть объект с товарами, 
// цены которых лежат в диапазоне от значения from 
// до значения to. Пример вызова функции 
// getGoods(goods, 2000, 3000); в данном случае 
// функция должна вернуть все товары, у которых цена 
// в диапазоне от 2000 до 3000. Для проверки функции 
// используйте объект! goods из файла forHw.js.

// console.log(goods.piano.price);
// let piano = "piano";
// console.log(goods[piano].price);

function getGoods(object, from, to) {
  let newlist = [];
  for (let sub in object)
     {
   		// console.log(sub);
    if (object[sub].price >= from && object[sub].price <= to) 
    {
      newlist.push(object[sub].title);
    }
  }
  return Object.assign({}, newlist);
}
console.log(getGoods(goods, 800, 1300));

//Задание 2: Написать функцию addToCart(obj, title, countToCart) {} ,
 // где obj - объект, title - название товара, count - 
 // количество товара, которое нужно добавить в корзину. 
 // ункция ищет товар с указанным названием, если 
 // количество позволяет, то уменьшает количество товара 
 // а countToCart, если не позволяет, то выводит 
 // информацию об этом в консоль и завершает работу. 
 // Для проверки функции используйте объект! goods из 
 // файла forHw.js.
function addToCart(object, title, countCart) {
  for (let sub in object) {
    if (object[sub].title == title) 
    {
      if (object[sub].count >= countCart) 
      {
        object[sub].count = object[sub].count - countCart;
        return `Товар ${object[sub].title} в корзине ${countCart} шт., осталось ${object[sub].count}`;
      } else 
      {
        return `Не хватает товара: ${object[sub].title} ${countCart - object[sub].count} - штук `;
      }
    }
  }
}
console.log(addToCart(goods,"Арфа", 5));

//Задание 3 Напишите функцию, которая отсортирует 
// массив объектов books по значению свойства title. 
// Массив в файле forHw.js. Функцию сортировки разберите 
// самостоятельно (не получится, разбор на занятии).


//решение подсмотрено в интернете, но разобрано
function sortBooks(object) {
	return object.sort((a, b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 :0));
}

console.log(sortBooks(books));




