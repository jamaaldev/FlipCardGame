// variable collect all the flipcard
let images = document.querySelector('.flip_container');
let flipcard;

let score = document.querySelectorAll(".table")[0].children;
let lose = score[0].children[1];
let won = score[1].children[1];

let index = 2;
let chance;
let result = [];
let scoredL = 0;
let scoredW = 0;
let allPic;

window.onload = () => {
  GeneratorImg()
}

function GeneratorImg() {

  let a = Math.floor((Math.random() * 3) + 1);
  let b = Math.floor((Math.random() * 3) + 1);
  let c = Math.floor((Math.random() * 3) + 1);
  let d = Math.floor((Math.random() * 3) + 1);


  allPic = `
  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${a}.jpg" alt="fat${a}"></div>
  </div>

  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${c}.jpg" alt="fat${c}"></div>
  </div>

  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${b}.jpg" alt="fat${b}"></div>
  </div>

  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${c}.jpg" alt="fat${c}"></div>
  </div>

  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${d}.jpg" alt="fat${d}"></div>
  </div>

  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${b}.jpg" alt="fat${b}"></div>
  </div>

  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${c}.jpg" alt="fat${c}"></div>
  </div>

  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${a}.jpg" alt="fat${a}"></div>
  </div>

  <div class="flipcard">
    <div class="front">?</div>
    <div class="back"><img src="./images/fat${d}.jpg" alt="fat${d}"></div>
  </div>

  
    `;

  images.innerHTML = '';
  result = [];
  index = 2;
  images.innerHTML += allPic;

  flipcard = document.querySelectorAll(".flipcard");


  flipcard.forEach((cards) => {


    cards.addEventListener("click", e => {
      if (index >= 1) {
        e.currentTarget.classList.add("active");
        e.currentTarget.classList.add("noclick");
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

};


function Restart() {

  flipcard.forEach(cards => {
    cards.classList.remove("active");
    cards.classList.remove("noclick");
    result = [];
    index = 2;
    allPic = '';

  });
}
