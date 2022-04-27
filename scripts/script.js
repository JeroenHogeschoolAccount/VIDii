// JavaScript Document


// Info scherm 1 - Game Boy 1989
var deButtonStart1 = document.getElementById("start1");
var deInfo1 = document.getElementById("info1");

deButtonStart1.addEventListener("click", infoTeZien1);

function infoTeZien1() {
	deInfo1.classList.toggle("grijs");
}


// Info scherm 2 - Game Boy Pocket
var deButtonStart2 = document.getElementById("start2");
var deInfo2 = document.getElementById("info2");

deButtonStart2.addEventListener("click", infoTeZien2);

function infoTeZien2() {
	deInfo2.classList.toggle("geel");
}


// Info scherm 3 - Game Boy Color 
var deButtonStart3 = document.getElementById("start3");
var deInfo3 = document.getElementById("info3");

deButtonStart3.addEventListener("click", infoTeZien3);

function infoTeZien3() {
	deInfo3.classList.toggle("rood");
}


// Info scherm 4 - Game Boy Zwart 
var deButtonStart4 = document.getElementById("start4");
var deInfo4 = document.getElementById("info4");

deButtonStart4.addEventListener("click", infoTeZien4);

function infoTeZien4() {
	deInfo4.classList.toggle("blauw");
}


// Info scherm 5 - Nintendo DS Lite
var deButtonStart5 = document.getElementById("start5");
var deInfo5 = document.getElementById("info5");

deButtonStart5.addEventListener("click", infoTeZien5);

function infoTeZien5() {
	deInfo5.classList.toggle("zwart");
}


// Info scherm 6
var deButtonStart6 = document.getElementById("start6");
var deInfo6 = document.getElementById("info6");

deButtonStart6.addEventListener("click", infoTeZien6);

function infoTeZien6() {
	deInfo6.classList.toggle("wit");
}



// La open en dicht doen
var deButtonLa = document.getElementById("laButton");
var deLa = document.getElementById("la");

deButtonLa.addEventListener("click", laOpenDoen);

function laOpenDoen() {
	deLa.classList.toggle("open");
}


document.addEventListener('keydown', function (e) {
    if (e.keyCode == 40) {
        deLa.classList.add("open");
    }
});

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 38) {
        deLa.classList.remove("open");
    }
});



// Muziek
// Ik wilde graag iets met geluid proberen, helaas kreeg ik het zelf net niet voor elkaar. Ik zag toevallig dat Amber ook iets met geluid had gemaakt - en heb daarom naar haar JavaScript bestand gekeken. Hier heb ik van geleerd en dit vervolgens toegepast in mijn werk.
var geluidAanDoen = document.querySelector(".muziekje");

var audioBestand = document.querySelector("main> ol > li:first-of-type > audio");
geluidAanDoen.addEventListener("click", muziekGaatAan);

function muziekGaatAan() {
    if (audioBestand.paused ) {
        audioBestand.play();
    } else {
        audioBestand.pause();
    }
}
