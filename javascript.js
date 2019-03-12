// Questions List

var ques = {
	q0: "Who is president of USA?",
	q1: "Where is the Statue of Liberty located?",
	q2: "Which is the highest rated movie on IMDB?",
	q3: "Who has won the Champions League most?",
	q4: "Which is the most listened song in Youtube?",
	q5: "Who is most followed person on Instagram?",
	q6: "Which is the biggest City in the World?",
	q7: "How many states are there in the United States?",
	q8: "Which one is the first 64-bit operating system?"
}

// Questions In Every Box

var questions = [ques.q0, ques.q1, ques.q2, ques.q3, ques.q4, ques.q5, ques.q6, ques.q7, ques.q8];

// Shuffle Function

function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		var m = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[m]] = [arr[m], arr[i]];
	}
}

// Shuffling Array [Questions]

shuffle(questions);

// Get Postion of Arrey

var rand0 = questions.indexOf(ques.q0)
var rand1 = questions.indexOf(ques.q1)
var rand2 = questions.indexOf(ques.q2)
var rand3 = questions.indexOf(ques.q3)
var rand4 = questions.indexOf(ques.q4)
var rand5 = questions.indexOf(ques.q5)
var rand6 = questions.indexOf(ques.q6)
var rand7 = questions.indexOf(ques.q7)
var rand8 = questions.indexOf(ques.q8)
console.log("img/img" + rand0 + ".png")

// Show Question

function a() {
	document.getElementById("question").value = questions[0];
}
function b() {
	document.getElementById("question").value = questions[1];
}
function c() {
	document.getElementById("question").value = questions[2];
}
function d() {
	document.getElementById("question").value = questions[3];
}
function e() {
	document.getElementById("question").value = questions[4];
}
function f() {
	document.getElementById("question").value = questions[5];
}
function g() {
	document.getElementById("question").value = questions[6];
}
function h() {
	document.getElementById("question").value = questions[7];
}
function i() {
	document.getElementById("question").value = questions[8];
}

// Check if Answer is Right

function check() {
	var able = document.f1.answer.value;
	able = able.toUpperCase()
	document.getElementById("answerBox").value = "";

	if (able == "DONALD TRUMP" || able == "TRUMP") {
		document.getElementById("box" + rand0).src = "img/img0.png";
	}

	else if (able == "NEW YORK") {
		document.getElementById("box" + rand1).src = "img/img1.png";
	}

	else if (able == "THE SHAWSHANK REDEMPTION") {
		document.getElementById("box" + rand2).src = "img/img2.png";
	}

	else if (able == "REAL MADRID") {
		document.getElementById("box" + rand3).src = "img/img3.png";
	}

	else if (able == "DESPACITO") {
		document.getElementById("box" + rand4).src = "img/img4.png";
	}

	else if (able == "CRISTIANO RONALDO" || able == "RONALDO") {
		document.getElementById("box" + rand5).src = "img/img5.png";
	}

	else if (able == "SHANGHAI") {
		document.getElementById("box" + rand6).src = "img/img6.png";
	}

	else if (able == "50") {
		document.getElementById("box" + rand7).src = "img/img7.png";
	}

	else if (able == "LINUX") {
		document.getElementById("box" + rand8).src = "img/img8.png";
	}

	else {
		alert("Wrong! Try Again.")
	}
}

// Submit Button

function Submit() {
	check();
}

// Enter Key

function keyDown() {
	if (event.keyCode == 13) {
		check();
	}
}