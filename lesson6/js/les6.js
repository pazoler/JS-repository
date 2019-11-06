//будем зырить как обращаться к элементам
//узлы - теги, комментарий, текст. Все, что в доке 
// можно разделить на узлы
//html - DOM - document object model
//все можно представить как объект, поэтому можно юзать свойства и модули
console.log(document);
console.log(document.body); //только в body доступ

//можно получать доступ к соседним элементам, дочерним
//родительским

let list = document.getElementById('list');
// перемешение по DOM дереву

console.log(list.childNodes); // все дочерние узлы
console.log(list.children); // все теги

//обе щтуки выше - коллекции
//перебор DOM коллекций
//for of - для коллекций, for in - для объектов
for (let elem of list.children) {
    console.log(elem);
}
console.log(list.firstChild); //просто узлы
console.log(list.lastChild);

console.log(list.firstElementChild); //просто теги
console.log(list.lastElementChild);

//соседи
console.log(list.previousSibling); //узлы (предыдущий)
console.log(list.nextSibling);

console.log(list.previousElementSibling); //теги
console.log(list.nextElementSibling);

console.log(list.parentNode); //родительский узел
console.log(list.parentElement); //родительский узел

// поиск элементов в DOM дереве
//1 по id - уже увидели
list = document.getElementById('list');
console.log(list);
//2 по значению атрибута name
let elemByName = document.getElementsByName('data');
console.log(elemByName);
console.log(elemByName[0]);
//3 по имени тега
let elemByTag = document.getElementsByTagName('li');
console.log(elemByTag);
//4 по имени класса 
let elemByClassName = document.getElementsByClassName('some-class');
console.log(elemByClassName);
//5 по css селектору #id .класс тег - передаем как выглядит в css
let elemByCSS = document.querySelector("ul>li");
//выдаст первый дочерний li элемента ul
let elemsByCSS = document.querySelectorAll('input[type=text]');
//вернет все инпуты, где type = text

//создание элементов
let div = document.createElement("div");

//работа с атрибутами
div.setAttribute("id", "container");
//div <id = "container">
//если уже есть, то перезапишется
console.log(div.hasAttribute("id")); //true - атрибут есть
console.log(div.getAttribute("id")); //значение 

//cssText - свойство стайл, а стайл свойство див
//ковычки на ё, где текст - много можно вставить
div.style.cssText = `
width = 500 px;
`

//получить все стили элементов
let listStyles = getComputedStyle(list);
console.log(listStyles);
console.log(listStyles.background);
console.log(listStyles.marginTop);

//работа с классами
//добавить класс со следующим именем
//свойством объекта является обхект а add уже метод
div.classList.add("class-name");
// div <class = "class-name">
//удалить класс
div.classList.remove("class-name");
//toggle добавить / удалить - если нет - поставит, нет - удалит
div.classList.toggle("class-name");
//contains - true или false если есть
div.classList.contains("class-name");

//добавление элементов в HTML
//... означает, что можно несколько 
//в скобках - что добавляем.
// elem.append(...elem) добавляет элементы во внутрь элем в конец
// elem.prepend(...elem) добавляет  элементы во внутрь элем в начало
// elem.before(...elem) добавляет перед элементом
// elem.after(...elem) добавляет после элемента

// elem.replaceWith(...elem) замена
// elem.remove(...elem) удаление
// elem.clone(...elem) клонирование


//создаем 5 тегов р и добавляем в див
for (let i = 0; i <5; i++) {
    let p = document.createElement("p");
    p.textContent = `Текстовый абзац: ${i}`; //доступ к тексту- выкидываются теги добавляем через =
//p.innerText - теги не выкидывает
    p.classList.add("border");
    div.append(p);
}

//конечная строчка добавления в тело
document.body.prepend(div);

//Таблички - для существующей
let allTables = document.getElementsByTagName("table");
let table = allTables[0];
table.setAttribute("border");

//заголовок
let caption = table.createCaption();
caption.innerText = "Заголовок таблицы";

//ряд в таблицу
let row = table.insertRow(0);

// ячейки в ряд
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);

cell1.innerText = "Cell 1";
cell2.innerText = "Cell 2";

