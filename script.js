let button = document.querySelector("button");
let form = document.querySelector("form");
let input = document.querySelector("input[type='number']");
let divInput = document.querySelector(".divInput");
let myRed = document.querySelector(".bad");
let myOrange = document.querySelector(".good");
//ADD or LESS
let plus = document.querySelector(".plus");
let less = document.querySelector(".less");
let firstRate = true;
let choiceNumber;
let randomNumber = Math.round(Math.random() * 10);

//REPONSE
let goodRes = document.querySelector(".good");
let badRes = document.querySelector(".bad");
myRed.style.display = "none";
myOrange.style.display = "none";
plus.style.display = "none";
less.style.display = "none";

console.log("Le nombre est de " + randomNumber);

input.addEventListener("input", (e) => {
  const typeMyNumber = () => {
    choiceNumber = e.target.value;
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    typeMyNumber();
    if (choiceNumber == randomNumber) {
      const veryGood = () => {
        myRed.style.display = "none";
        plus.style.display = "none";
        less.style.display = "none";
        myOrange.style.display = "";
      };

      return veryGood();
    } else if (choiceNumber < randomNumber) {
      const lessRandom = () => {
        plus.style.display = "";
        less.style.display = "none";
        myRed.style.display = "";
        firstRate = false;
      };
      return lessRandom();
    } else {
      const plusRandom = () => {
        myRed.style.display = "";
        less.style.display = "";
        plus.style.display = "none";
        firstRate = false;
      };
      return plusRandom();
    }
  });
});
