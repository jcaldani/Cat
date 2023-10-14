const name = document.querySelector(".gato");
const btnOne = document.querySelector("#petBtn");
const btnTwo = document.querySelector("#talkBtn");
const btnThree = document.querySelector("#ignoreBtn");
const btnFour = document.querySelector("#fightBtn");

btnOne.addEventListener("click", function () {
        gato.src = "happycat.gif";
 });

btnTwo.addEventListener("click", function () {
	gato.src = "talkingcat.gif";
});

btnThree.addEventListener("click", function () {
	gato.src = "angrycat.jpg";
});

btnFour.addEventListener("click", function () {
	gato.src = "fightingcat.gif";
});
