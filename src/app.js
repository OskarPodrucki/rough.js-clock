//configuration
let roughSvg = rough.svg(document.getElementById("svg"));
const svg = document.getElementById("svg");
let color = "#FFC0CB";

let globalX = 610; //910
let globalY = 10; //300

//**======================================================================**

//timer
function getTime() {
	var today = new Date();

	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	var hour = today.getHours();
	if (hour < 10) hour = "0" + hour;

	var minute = today.getMinutes();
	if (minute < 10) minute = "0" + minute;

	var second = today.getSeconds();
	if (second < 10) second = "0" + second;

	var formattedDate = day + "/" + month + "/" + year;
	var formattedTime = hour + ":" + minute + ":" + second;

	document.getElementById("clock").innerHTML =
		formattedDate + " | " + formattedTime;

	setTimeout(getTime, 1000);
}

getTime();

//**======================================================================**

//adding clock
drawClock(globalX, globalY);

//function for drawing rectangles
function drawClock(x, y) {
	const clock = roughSvg.ellipse(x+350, y+350, 700, 700, {
		roughness: 0,
		fill: color,
		fillStyle: "solid",
	});
	clock.addEventListener("click", () => {
		console.log("click");
	});
	svg.appendChild(clock);
}

//===================================
