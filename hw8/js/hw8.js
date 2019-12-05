//не получается создать несколько кроликов
let canvas = document.getElementsByTagName("canvas")[0];

canvas.width = 900;
canvas.height = 600;

let ctx = canvas.getContext("2d");
//ctx.fillstyle - определяем цвет
ctx.fillStyle="green";
ctx.fillRect(0, 0, 900, 600);
// ctx.strokeRect (0,0,900,600);
let tiger = {
	img: "tiger.png",
	x: 22,
	y: 15,
	width: 128,
	height: 128
};

function drawImg(obj) {
	let img = new Image();
	
	img.src = "img/" + obj.img;
	
	img.onload = () =>{
		ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
	}
	

}

let n=0;

function scaleX () {
	
	return Math.random() * (900-128);
}

function scaleY () {
	return Math.random() * (600-128);
};


let rabbit = {
	img: "rabbit.png",
	x: scaleX(),
	y: scaleY(),
	width: 128,
	height: 128
};

function move(obj, event) {

if (event.code == "KeyD") {
	
	clearImg(obj);
	obj.x += 5;
	drawImg(obj);
} else if (event.code == "KeyA") {
	
	clearImg(obj);
	obj.x -= 5;
	drawImg(obj);
} else if (event.code == "KeyW") {
	
	clearImg(obj);
	obj.y -= 5;
	drawImg(obj);
} else if (event.code == "KeyS") {
	
	clearImg(obj);
	obj.y += 5;
	drawImg(obj);
}


if ((obj.x <= (rabbit.x + 128) && obj.x >= (rabbit.x - 128)) && (obj.y <= (rabbit.y + 128) && obj.y >= (rabbit.y - 128))) {
		clearImg(rabbit);
		n++;
		console.log(`съедено ${n} кроликов`);
		rabbit.x=scaleX();
		rabbit.y=scaleY();
		createRabbit(rabbit);
		return n;
	} 
}


drawImg(tiger);
document.addEventListener("keydown", 
	move.bind(document, tiger));


function clearImg(obj) {
	ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}


function createRabbit (subj) {
	
	
	let img = new Image();
	img.src = "img/" + subj.img;
	img.onload = () =>{
		ctx.drawImage(img, subj.x, subj.y, subj.width, subj.height);
	}
	
};

createRabbit (rabbit);



// function eatRabbit (obj, subj) {
// 	if ((obj.x <= (subj.x + 128) && obj.x >= (subj.x - 128)) && (obj.y <= (subj.y + 128) && obj.y >= (subj.y - 128))) {
// 		clearImg(obj);
// 		let n;
// 		n++;
// 		console.log(`съедено ${n} кроликов`);
// 	} 
// }

// eatRabbit (tiger, rabbit);
