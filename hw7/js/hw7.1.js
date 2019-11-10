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

let goods = [
        {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        {
            title: "Флейта",
            price: 900,
            count: 50
        },
        {
            title: "Арфа",
            price: 3400,
            count: 5
        }
];


function generateTable(arr) {
  
  let div = document.createElement("div");
      div.id = "allTable";
  let table = document.createElement("table");
  let caption = table.createCaption();
  caption.innerText = "Заголовок таблицы";
  // console.log(arr);
  // console.log(arr[0]);
  for (let i = 0; i < arr.length; i++) 
  {
    let row = table.insertRow(i);
    if (i == 0) {
      row.id= "firstRow";
    }
    let arrValue = Object.values(arr[i]);
    let arrKey = Object.getOwnPropertyNames(arr[i]);
  
    for (n = 0; n < arrValue.length; n++)
    {
      if (i == 0) {
      let cell = row.insertCell(n);
      cell.innerText = arrKey[n].toUpperCase();
      console.log(arrKey[n]);
      row.append(cell);
      } else 
      {
      let cell = row.insertCell(n);
      cell.innerText = arrValue[n];
     
      row.append(cell);
      }
     }
     
  }
 
  div.append(table);
  document.body.prepend(div);
}
generateTable(goods);

let firstRow = document.getElementById("firstRow");
firstRow.addEventListener("click", sortTable);

let newTable = [];
function sortTable (event) {
let clickElem = event.target;
//для получения содержимого - textContent
console.log(clickElem);
let sorted = clickElem.textContent.toLowerCase();
console.log(sorted);

newTable = goods.sort((a, b) => (a.sorted > b.sorted) ? -1 : ((b.sorted > a.sorted) ? 1 :0));
generateTable(newTable);
}






