let dieOne;
let dieTwo;
let sum;
let target;
let risk;
let money;

function setup() {
  createCanvas(400, 400);
  textFont("Verdana")
  money = 50;
  design();
}

function draw() {
  background(37, 150, 190);
  design();
  if (keyIsDown(13)) {
    dieOne = Math.floor(Math.random() * 6 + 1);
    dieTwo = Math.floor(Math.random() * 6 + 1);
  } else {
    sum = dieOne + dieTwo;
  }
}
function design() {
  stroke(226,135,67);
  strokeWeight(1);
  fill(226, 135, 67);
  text("Dice Game", 150, 20);
  text("Money: " + money, 10, 50);
  text("Die 1 ", 10, 100);
  text("Die 2 ", 75, 100);
  fill(238, 238, 228);
  rect(10, 110, 55, 55, 20);
  rect(75, 110, 55, 55, 20);
  textSize(17);
  fill(226, 135, 67);
  text("Pick your number?", 10, 200);
  text("Risk?", 10, 300);
  target = createInput();
  target.position(10, 220);
  target.size(30);
  risk = createInput();
  risk.position(10, 320);
  risk.size(30);
  //text("The Sum is: " + sum, 50,100) ;
}
