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
	if (num%100 >= 12 && num%100 >= 14) {
		return num + " Дней";
	} else if (num%10 == 1) {
		return num + " День";
	} else if (num%10 >= 2 && num%10 <=4 ) {
		return num + " Дня";
	} else if (num%10 >= 5 && num%10 <= 9 && num%10 == 0) {
		return num + " Дней";
	}
}

//Не пониманию, почему не работает
console.log(countDay(151));
console.log(countDay(2));
console.log(countDay(548));
console.log(countDay(4));

//Задание 4
function getRandomArr(length=4, min=0, max=10) {
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


let arrArr = [];
let maxSum = 0;
let max = [];
//number - число массивов
function maxArr(number) {
	for (let i = 0; i < number; i++) {
		arrArr[i] = getRandomArr();
		console.log(sumArr(arrArr[i]));
		if (sumArr(arrArr[i]) > maxSum) {
			maxSum = sumArr(arrArr[i]);
			max = arrArr[i];
		}
	}
	console.log("максимальный массив "+max);
	console.log("сумма максимального массива "+maxSum);
}

maxArr(5);



