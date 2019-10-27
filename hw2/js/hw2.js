
//Задание 1
let massive = [0, -1, -2, -3, -4, -5 , -6, -7, -8, -9, -10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i= 0; i<massive.length; i++) 
{
for (let n = 0; n < massive.length; n++) 
	{
	if (massive[i]+massive[n]===7) {
		console.log("Первое число "+massive[i]+" Индекс массива "+i);
		console.log("Второе число "+massive[n]+" Индекс массива "+n);
		}
	break; //без данной функции будут выведены остальные пары
	}
}

Задание 2
for (let i = 1; i <= 100; i++) 
{
	
	if (i%5===0 && i%3===0) {
		console.log("ThreeFive" + i);
	}
	else if (i%3===0) 
	{
		console.log("Three " + i);
	} else if (i%5===0 && !i%3===0)
	{
		console.log("Five " + i);
	
	} 

}

//Задание 3

let cleanser = 8;
let dishes = 20;
do {
	cleanser = cleanser - 0.5;
	dishes = dishes - 1;
	console.log("осталось "+cleanser+" моющего средства");
	if (dishes===0) {
		console.log("Итого осталось "+cleanser+"моющего средства");
		break;
	} else if (cleanser===0) {
		console.log("осталось "+dishes+" немытых тарелок");
		break;
	}
}
while (cleanser > 0 && dishes!==0)

//Задание 4
let mass1 = [10, 23, 67, 42];
let mass2 = [56, 14, 39, 100];
let mid1 = 0;
let mid2 = 0;
console.log(mass1+" "+mass2);
for (let i = 0; i < mass1.length; i++) {
	mid1 += mass1[i];
	mid2 += mass2[i];

	if (i=== mass1.length-1)
	{
	mid1 = mid1 / mass1.length;
	mid2 = mid2 / mass2.length;
		
		if (mid1 > mid2) 
		{
			console.log("Среднеарфитческая первого массива больше");
		}
		else if (mid1 < mid2) 
		{
			console.log("Среднеарфитческая второго массива больше");
		}
		else 
		{
			console.log("Среднеарфитческие массивов равны");
		}	
	}
	
}

// //Задание 5.1

// //вводом задаются элементы массива
let array = [];
let n = 0;

do {
array.push(parseInt(prompt("Числа для массива")));
	n++;
}  while (n!=3)
console.log(array);

// // в обратном порядке
n = array.length;
do {
	console.log(array[n-1])
	n--;
} while (n > 0);

//Задание 5.2
let progression = 1;

for (let i = 0; i < 20; i++) {
	progression *= progression;
	console.log(progression);
}

//Задание 5.3. - треугольник
let n = 0;
for (let i = 1; i <= 10; i++) {
	for (n = 0; n < i; n++) {
		console.log("#");
	}
}
