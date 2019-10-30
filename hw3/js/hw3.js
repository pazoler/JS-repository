// Задание 1

function sumN(num) {
	if (num < 0) {
		return "Нужно натуральное число";
	} else if (num < 10) {
		return num;
	} 
	   	return Math.floor(sumN(num/10))+num%10;

}

console.log(sumN(555));


//Задание 2

function range(start, end, step=1) {
	let arr = [];
	for (i = 0; i < (end - start)/step; i++) {
		arr[i] = start + i*step;
		}
		return arr;
}

console.log(range(2,15,2));

//Задание 3

function countDay(num) {
	if (num%100 === 12 || 13 || 14) {
		return num + " Дней";
	}
	else if (num%10 === 1) {
		return num + " День";
	}

	if (num%10 == 2 || 3 || 4) {
		return num + " Дня";
	} else if (num%10 == 5 || 6 || 7 || 8 || 9 ||0) {
		return num + " Дней";
	}
}

//Не пониманию, почему не работает
console.log(152);
console.log(countDay(2));
console.log(countDay(548));

//Задание 4
function getRandomArr(index, length=4, min=0, max=10) {
	let arr = [];
	for (let i = 0; i<length; i++) {
		arr[i] = Math.floor(Math.random()*(max-min+1))+min;
		}
		console.log(arr);
		return arr;
}

function sumArr( arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	
	return sum;
}

//Не получилось


// let max = 0;
// let NumMax = 0;
// let ArrMax = [];
// for ( i = 0; i < 5; i++) {
// 	console.log(sumArr(getRandomArr(i)));
// 	if (sumArr(getRandomArr(i)) > max) {
// 		max = sumArr(getRandomArr(i));
// 		ArrMax = getRandomArr(i);
// 	}
// 	console.log(ArrMax);
// }

