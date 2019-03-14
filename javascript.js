// Shuffle Function

function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		var m = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[m]] = [arr[m], arr[i]];
	}
}

// Questions List

var ques = {
	q0: "Who is president of USA?",
	q1: "Where is the Statue of Liberty located?",
	q2: "Which is the highest rated movie on IMDB?",
	q3: "Who has won the Champions League most?",
	q4: "Which is the most listened song in Youtube?",
	q5: "Who is most followed person on Instagram?",
	q6: "Which is the biggest City in the World?",
	q7: "How many states are there in the USA?",
	q8: "Which one is the first 64-bit operating system?", // Linux
	q9: "How many continents are in World?", // 7
	q10: "What is the capital of Turkey?", // Ankara
	q11: "Which is the largest desert on earth?", // Sahara
	q12: "What is the largest city in Canada?", // Toronto
	q13: "How many oscars did the Titanic movie got?", // 11
	q14: "What is the name of B.Munich football stadium?", // Allianz Arena
	q15: "Which country has won the World Cup most times?",
	
	q16: "How many World Cup's does Germany has?", // 4
	q17: "The Eiffel Tower is built in...", // 1889 
	q18: "When did the 1st World War began?", // 1914
	q19: "Which country gifted 'Statue of Liberty' to USA?", // France
	q20: "Which river is passing through the Paris City?", // Seine
	q21: "Which country has the most number of lakes?", // Canada
	q22: "Only continent in the world without a desert is: ", // Europe
	q23: "Las Vegas city is located in the US state of...", // Nevada
	q24: "Where the headquater of 'Google' is located?", // California
	q25: "When the social media Facebook was founded?", // 2004
	q26: "Which one is the longest river in Europe?", // Volga
	q27: "In which city the UNICEF research centre is?"  // Florence
}

// Object To Array

var obj = Object.values(ques);

// Shuffling List to get random questions from {object}

var list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
shuffle(list);	

// List Random // To Show Questions

var m0 = list[0];
var m1 = list[1];
var m2 = list[2];
var m3 = list[3];
var m4 = list[4];
var m5 = list[5];
var m6 = list[6];
var m7 = list[7];
var m8 = list[8];

// Questions Active In Every Box

var questions = [obj[m0], obj[m1], obj[m2], obj[m3], obj[m4], obj[m5], obj[m6], obj[m7], obj[m8]];

// Get Postion of Question // For BOX + rand...

var rand0 = questions.indexOf(ques.q0);
var rand1 = questions.indexOf(ques.q1);
var rand2 = questions.indexOf(ques.q2);
var rand3 = questions.indexOf(ques.q3);
var rand4 = questions.indexOf(ques.q4);
var rand5 = questions.indexOf(ques.q5);
var rand6 = questions.indexOf(ques.q6);
var rand7 = questions.indexOf(ques.q7);
var rand8 = questions.indexOf(ques.q8);
var rand9 = questions.indexOf(ques.q9);
var rand10 = questions.indexOf(ques.q10);
var rand11 = questions.indexOf(ques.q11);
var rand12 = questions.indexOf(ques.q12);
var rand13 = questions.indexOf(ques.q13);
var rand14 = questions.indexOf(ques.q14);
var rand15 = questions.indexOf(ques.q15);

var rand16 = questions.indexOf(ques.q16);
var rand17 = questions.indexOf(ques.q17);
var rand18 = questions.indexOf(ques.q18);
var rand19 = questions.indexOf(ques.q19);
var rand20 = questions.indexOf(ques.q20);
var rand21 = questions.indexOf(ques.q21);
var rand22 = questions.indexOf(ques.q22);
var rand23 = questions.indexOf(ques.q23);
var rand24 = questions.indexOf(ques.q24);
var rand25 = questions.indexOf(ques.q25);
var rand26 = questions.indexOf(ques.q26);
var rand27 = questions.indexOf(ques.q27);


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

	else if (able == "7") {
		document.getElementById("box" + rand9).src = "img/img9.png";
	}

	else if (able == "ANKARA") {
		document.getElementById("box" + rand10).src = "img/img10.jpg";
	}

	else if (able == "SAHARA") {
		document.getElementById("box" + rand11).src = "img/img11.jpg";
	}

	else if (able == "TORONTO") {
		document.getElementById("box" + rand12).src = "img/img12.jpg";		
	}

	else if (able == "11") {
		document.getElementById("box" + rand13).src = "img/img13.jpg";
	}

	else if (able == "ALLIANZ ARENA") {
		document.getElementById("box" + rand14).src = "img/img14.jpeg";	
	}

	else if (able == "BRAZIL") {
		document.getElementById("box" + rand15).src = "img/img15.jpg";
	}

	else if (able == "4") {
		document.getElementById("box" + rand16).src = "img/img16.jpg";
	}

	else if (able == "1889") {
		document.getElementById("box" + rand17).src = "img/img17.jpg";
	}

	else if (able == "1914") {
		document.getElementById("box" + rand18).src = "img/img18.jpg";
	}

	else if (able == "FRANCE") {
		document.getElementById("box" + rand19).src = "img/img19.jpg";
	}

	else if (able == "SEINE") {
		document.getElementById("box" + rand20).src = "img/img20.jpg";
	}

	else if (able == "CANADA") {
		document.getElementById("box" + rand21).src = "img/img21.jpg";
	}

	else if (able == "EUROPE") {
		document.getElementById("box" + rand22).src = "img/img22.jpg";
	}

	else if (able == "NEVADA") {
		document.getElementById("box" + rand23).src = "img/img23.jpg";
	}

	else if (able == "CALIFORNIA") {
		document.getElementById("box" + rand24).src = "img/img24.jpg";
	}

	else if (able == "2004") {
		document.getElementById("box" + rand25).src = "img/img25.png";
	}

	else if (able == "VOLGA") {
		document.getElementById("box" + rand26).src = "img/img26.jpg";
	}

	else if (able == "FLORENCE") {
		document.getElementById("box" + rand27).src = "img/img27.png";
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