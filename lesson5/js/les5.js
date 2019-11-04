//Объект как ассоциативные массивы
// Будем смотреть как объект хранения данных (не ООП)

// символ - уникальный идентификатор, тип данных 
// не стркоа и не массив, уникален
// храним по ключам, а не числам
let symbId = Symbol();
//символ - это функция

symId = Symbol("id");
let symId2 = Symbol("id");
//это будет два разных символа, две разные ячейки
console.log(symId);
// alert - только строки
// alert(symId.toString());

//есть description - оставляет только описание
console.log(symId.description);

//глобальный реестр символов, key - имя переменнйо внутри объекта
//если не хотим одинаковые индентификаторы для разных символов
// с помощью индекса for
let globalSym = Symbol.for("Идентификатор");
let globalSym2 = Symbol.for("Идентификатор");
//ссылка на одну и туже область
console.log(Symbol.keyFor(globalSym));
console.log(Symbol.keyFor(globalSym2));


//для хранения данных в паре ключ-значение
let obj = {}; //пустой объект
//инфу получаем по тайтлам
// литеральный способ создания обхекта
let article = {
	// [id]: 2 - так вставляется символ
	title: "JavaScript", //нулевой массив
	text: "Текст статьи", //1 элемент, двоеточие обязательно
	author: "Алексей",
	date: null 
	};
//в качестве значения любой тип данных в т.ч. функция
// ключи - строки и сиволы только
console.log(article.title);

//Доступ к свойству
let title = article.title;
//написали свойство, к которому хотим обратиться
console.log(title);
// или, просто есть ситуации, когда нельзя юзануть выше
title=article["title"];
console.log(title);

console.log(article.date); //undefined - Т.к. нет такого ключа
//поэтому пишем null,если надо запоолнить ничем

//изменить значение свойства
article.date = new Date().toDateString();
console.log(article);
// toDateString(); - приводит дату к строке

//добавить новое свойство
//символ, например
let id = Symbol("article id");
article[id] = 1;
console.log(article);

article.description = "описание статьи";
console.log(article);

//проверка на наличие свойств в объекте
// if (article.img === undefined) {
// 	//не оправдывает себя, если уже есть undefined
// 	console.log("В объекте нет свойства img");
// } - лучше не юзать
//2 вариант
if(!("img" in article)) {
	console.log("В объекте нет свойства img");
}
if("img" in article) {
	console.log("В объекте есть свойства img");
}
//а что если есть, но его значение undefined?
//3 вариант
console.log(article.hasOwnProperty("img")); 
// false - если нет такого свойства

//доступ к свойству через переменную
let propName = "title";
//как получить доступ к свойству, который в переменной
// через квадратные скобки
console.log(article[propName]);
// console.log(article.propName); - не подходит
let imgProp = "img";
//img - ключ - js.png - значение, суем через переменную
article[imgProp] = "js.png";
console.log(article);
//article.img = "js.png";
// article["img"] = "js.png";

//перебор объекта for in
//на каждой итерации цикла в перем propName будет попадать
for (let propName in article) {
console.log("значение propName " + propName);
console.log("значение article[propName] " + article[propName]);
}
//если ключ - символ,то он не виден перербором for in
console.log(Object.keys(article));
// Object.keys - возвращает массив с ключами данного обхекта
console.log(Object.getOwnPropertyNames(article));
// так же без символов
//для отображения символа нужна следующая строка
console.log(Object.getOwnPropertySymbols(article));

/*
Написать функцию getData, которая принимает
на вход массив, имя свойства, значение свойства.
Функция возвращает массив со статьями
*/
/*
Например:
// вернет массив с 2 статьями
getData(articles, "author", "Виталий");
// вернет массив с 1 статьей
getData(articles, "title", "PHP");
*/
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

function getData(arr, prop, value) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value){
            console.log(arr[i][prop]);
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

let res = getData(articles, "author", "Виталий");
console.log(res);

article = {
    [id]: 2,
    title: "JavaScript",
    text: "Текст статьи",
    author: "Алексей",
    printInfo: function () { // метод
        console.log(`Статья: ${this.title}, автора ${this.author}`);
    }
};
//this.title - будет JavaScript
//строками выше вводим свою функцию

// доступ к методам
// вызов метода
article.printInfo();

// добавить / переопределить метод
article.printObj = function () {
    console.log(article.author);
    console.log(this.author);
};
article.printObj();


//чуток символов
let book = {
    [id]: 1,
    title: "Выразительный JavaScript"
};
console.log(book);

id = Symbol("someId");
book[id] = 34;
console.log(book[id]);

for (let prop in book){
    console.log(book[prop]);
}

// деструкторизация (es6)
let userInfo = {
    userId: 1,
    login: "qwe",
    name: "Григорий"
};
let {userId, name, login} = userInfo;
console.log(userId, name, login);
console.log(userInfo);

arr = [1, "qwe", "Григорий", 38];
let [uId, uLogin, ...other] = arr;
console.log(uId, uLogin, other);
console.log(arr);