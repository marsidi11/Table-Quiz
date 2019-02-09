function a() {
	document.getElementById("question").value = "Who is president of USA?";
}
function b() {
	document.getElementById("question").value = "Where is the Statue of Liberty located?";
}
function c() {
	document.getElementById("question").value = "Which is the highest rated movie on IMDB?";
}
function d() {
	document.getElementById("question").value = "Who has won the Champions League most?";
}
function e() {
	document.getElementById("question").value = "Which is the most listened song in Youtube?";
}
function f() {
	document.getElementById("question").value = "Who is most followed person on Instagram?";
}
function g() {
	document.getElementById("question").value = "Which is the biggest City in the World?";
}
function h() {
	document.getElementById("question").value = "How many states are there in the United States?";
}
function i() {
	document.getElementById("question").value = "Which one is the first 64-bit operating system?";
}
function Submit() {
	var able = document.f1.answer.value;
			document.getElementById("answerBox").value = "";
	if (able == "Donald Trump") {
		document.getElementById("back1").style.visibility = "visible";
	}

	else if (able == "New York") {
		document.getElementById("back2").style.visibility = "visible";
	}

	else if (able == "The Shawshank Redemption") {
		document.getElementById("back3").style.visibility = "visible";
	}

	else if (able == "Real Madrid") {
		document.getElementById("back4").style.visibility = "visible";
		document.getElementById("d").style.visibility = "hidden";
	}

	else if (able == "Despacito") {
		document.getElementById("back5").style.visibility = "visible";
	}

	else if (able == "Cristiano Ronaldo") {
		document.getElementById("back6").style.visibility = "visible";
	}

	else if (able == "Shanghai") {
		document.getElementById("back7").style.visibility = "visible";
	}

	else if (able == "50") {
		document.getElementById("back8").style.visibility = "visible";
	}

	else if (able == "Linux") {
		document.getElementById("back9").style.visibility = "visible";
		document.getElementById("i").style.visibility = "hidden";
	}

	else {
		alert("Wrong! Try Again.")
	}
}