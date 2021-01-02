// variable collect all the flipcard

let flipcard = document.querySelectorAll(".flipcard");
let score = document.querySelectorAll(".table")[0].children;
let lose = score[0].children[1];
let won = score[1].children[1];

let index = 2;
let chance;
let result = [];
let scoredL = 0;
let scoredW = 0;

flipcard.forEach(cards => {
  cards.addEventListener("click", e => {
    if (index >= 1) {
      e.currentTarget.classList.add("active");
      index--;
      chance = e.currentTarget.children[1].children[0].alt;

      result.push(chance);
    }

    if (chance === result[0] && result[1] && result[2]) {
      index = "";
      result = "";
      console.log("wooow you won Welldone");
      scoredW++;
      won.innerHTML = scoredW;
    }

    if (chance === result[0] && result[1]) {
      index++
      console.log("You have extra point");

    }


    if (chance !== result[0] && result[1]) {
      console.log("i am sorry you lose");
      index = "";
      result = "";
      scoredL++;
      lose.innerHTML = scoredL;
    }
    console.log(result);
    console.log(scoredL);
    console.log(scoredW);
  });
});

function Restart() {
  flipcard.forEach(cards => {
    cards.classList.remove("active");
    result = [];
    index = 2;
  });
}
