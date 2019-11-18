//самолет москва - нью йорк 
//время в полете 10 часов во сколько самолет прилетит в нью йорк по местному времени
//если из Мсоквы он выолетает в  22:15 28 декабря

let dataTime = "2019-12-28 22:15";
let moscow = "Europe/Moscow";
let new_york = "America/New_York";

function arrival (departureTime, departurePlace, arrivalPlace, hours) {
	// let moscowOffset = moment.tz.zone("departurePlace").parse();
	// let newyorkOffset = moment.tz.zone("arrivalPlace").parse();

	let arrivalTime = moment(departureTime).tz(arrivalPlace);
	console.log(arrivalTime.format("YYYY MMMM DD HH:mm"));
	// arrivalTime = arrivalTime.add(moscowOffset-newyorkOffset, "minutes");
	return arrivalTime.add(hours, "hours").format("YYYY MMMM DD HH:mm");
}

console.log(arrival(dataTime, moscow, new_york, 10));
