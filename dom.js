/*let element1 = document.getElementsByTagName('p');
let element2 = document.getElementById("button");
let element3 = document.querySelector();*/

let rockk = document.querySelector("#rock");
let paperr = document.querySelector("#paper");
let scissorss = document.querySelector("#scissors");
let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let myScore = 0;
let comScore = 0;
let you = document.querySelector("#me");
let computer = document.querySelector("#com");
let result = document.querySelector("#message");

function final() {
  if (myScore > comScore) {
    result.style.display = "block";
    result.innerHTML = "You Win";
  } else if (myScore < comScore) {
    result.style.display = "block";
    result.innerHTML = "you lose";
  }
}

function computerChoice() {
  m = Math.random().toFixed(1);
  console.log(m);

  c = "";
  if (m >= 0.0 && m <= 0.3) {
    c = "rock";
  } else if (m >= 0.4 && m <= 0.6) {
    c = "paper";
  } else if (m >= 0.7 && m <= 1) {
    c = "scissors";
  }
  return c;
}
function score() {
  console.log(s1.src);
  console.log(s2.src);

  if (s1.src == rockk.src && s2.src == paperr.src) {
    comScore = comScore + 1;
  } else if (s1.src == rockk.src && s2.src == scissorss.src) {
    myScore = myScore + 1;
  } else if (s1.src == paperr.src && s2.src == rockk.src) {
    myScore = myScore + 1;
  } else if (s1.src == paperr.src && s2.src == scissorss.src) {
    comScore = comScore + 1;
  } else if (s1.src == scissorss.src && s2.src == rockk.src) {
    comScore = comScore + 1;
  } else if (s1.src == scissorss.src && s2.src == paperr.src) {
    myScore = myScore + 1;
  }
  console.log(myScore);

  you.innerHTML = "You :" + myScore;
  computer.innerHTML = "Computer :" + comScore;
  final();
}
function randomChoice() {
  c = computerChoice();
  if (c == "rock") {
    s2.src = rockk.src;
  } else if (c == "paper") {
    s2.src = paperr.src;
  } else if (c == "scissors") {
    s2.src = scissorss.src;
  }
}

function rock() {
  s1.src = rockk.src;
  randomChoice();
  score();
}

function paper() {
  s1.src = paperr.src;
  randomChoice();
  score();
}

function scissors() {
  s1.src = scissorss.src;
  randomChoice();
  score();
}

let light = false;

function handleButtonClick() {
  /*if (button.innerHTML == "Turn on light") {
    img1.src = "./images/lighton.png";
    button.innerHTML = "turn off light";
  } else if (button.innerHTML == "turn off light") {
    img1.src = "./images/lightoff.jpeg";
    button.innerHTML = "Turn on light";
  }*/

  if (light == false) {
    turnOn();
    light = true;
  } else {
    turnOff();
    light = false;
  }
}

function turnOn() {
  img1.src = "./images/lighton.png";
  button.innerHTML = "turn off light";
}

function turnOff() {
  img1.src = "./images/lightoff.jpeg";
  button.innerHTML = "Turn on light";
}
rockk.addEventListener("click", rock);
paperr.addEventListener("click", paper);
scissorss.addEventListener("click", scissors);

// button.addEventListener("click", handleButtonClick);

// button.onclick = handleButtonClick;

// document.addEventListener("click", handleButtonClick)
