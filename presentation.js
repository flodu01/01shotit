var state = 0;

document.getElementById("10").addEventListener("click", function () {
	if (state == 0) {
		document.getElementById("7").style.backgroundImage = "none";
		document.getElementById("7").style.backgroundColor = "rgb(102,204,102)";
		document.getElementById("6").style.backgroundImage = "none";
		document.getElementById("6").style.backgroundColor = "rgb(123,210,102)";
		document.getElementById("5").style.backgroundImage = "none";
		document.getElementById("5").style.backgroundColor = "rgb(102,204,102)";
		document.getElementById("4").style.backgroundImage = "none";
		document.getElementById("4").style.backgroundColor = "rgb(184,223,101)";
		
		document.getElementById("20").style.backgroundImage = "none";
		document.getElementById("20").style.backgroundColor = "rgb(255,241,100)";
		document.getElementById("21").style.backgroundImage = "none";
		document.getElementById("21").style.backgroundColor = "rgb(245,235,100)";
		document.getElementById("22").style.backgroundImage = "none";
		document.getElementById("22").style.backgroundColor = "rgb(214,229,100)";
		document.getElementById("23").style.backgroundImage = "none";
		document.getElementById("23").style.backgroundColor = "rgb(214,229,100)";
		state = 1;
	}
	else {
		document.getElementById("7").style.backgroundColor = "none";
		document.getElementById("7").style.backgroundImage = "url(img45.jpg)";
		document.getElementById("6").style.backgroundColor = "none";
		document.getElementById("6").style.backgroundImage = "url(img42.jpg)";
		document.getElementById("5").style.backgroundColor = "none";
		document.getElementById("5").style.backgroundImage = "url(img44.jpg)";
		document.getElementById("4").style.backgroundColor = "none";
		document.getElementById("4").style.backgroundImage = "url(img42.jpg)";

		document.getElementById("20").style.backgroundColor = "none";
		document.getElementById("20").style.backgroundImage = "url(img55.jpg)";
		document.getElementById("21").style.backgroundColor = "none";
		document.getElementById("21").style.backgroundImage = "url(img54.jpg)";
		document.getElementById("22").style.backgroundColor = "none";
		document.getElementById("22").style.backgroundImage = "url(img46.jpg)";
		document.getElementById("23").style.backgroundColor = "none";
		document.getElementById("23").style.backgroundImage = "url(img47.jpg)";
        state=0;
	}
})

