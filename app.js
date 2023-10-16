const name = document.querySelector(".gato");
const btnOne = document.querySelector("#petBtn");
const btnTwo = document.querySelector("#talkBtn");
const btnThree = document.querySelector("#ignoreBtn");
const btnFour = document.querySelector("#fightBtn");
const texto1 = document.querySelector("#dialogueboardtext");


btnOne.addEventListener("click", function () {
        gato.src = "happycat.gif";
		texto1.textContent = "The cat is very happy!"; 

		setTimeout(() => {
			gato.src = "gato2.gif";
		  }, "3000");

		  setTimeout(() => {
			texto1.textContent = "WHAT WILL YOU DO NEXT?";
		  }, "4000");  
		 
		  
 });

btnTwo.addEventListener("click", function () {
	gato.src = "talkingcat.gif";
	texto1.textContent = "Cat says MEOW MEOW MEOW"; 

	setTimeout(() => {
		gato.src = "gato2.gif";
	  }, "3000");

	setTimeout(() => {
		texto1.textContent = "WHAT WILL YOU DO NEXT?";
	}, "4000");  
	 
});

btnThree.addEventListener("click", function () {
	gato.src = "angrycat.jpg";
	texto1.textContent = "Cat is angry that you ignored him"; 

	setTimeout(() => {
		gato.src = "gato2.gif";
	  }, "3000");

	setTimeout(() => {
		texto1.textContent = "WHAT WILL YOU DO NEXT?";
	  }, "4000");  
	 
});

btnFour.addEventListener("click", function () {
	gato.src = "fightingcat.gif";
	texto1.textContent = "READY TO GO"; 

	setTimeout(() => {
		gato.src = "gato2.gif";
	  }, "3000");

	setTimeout(() => {
		texto1.textContent = "WHAT WILL YOU DO NEXT?";
	  }, "4000"); 
});
