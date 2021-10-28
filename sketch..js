let dieOne;
let dieTwo;
let sum;
let target;
let risk;
let money;
let button;

function setup() {
  createCanvas(400, 400);
  textFont("Verdana")
  money = 50;
  design();
  inputBoxes();
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
  text("Pick your number?", 200, 50);
  text("Risk?", 200, 100);
  button = createButton("ROLL");
  button.position(10,200);
  button.size(200,150);
  button.style('font-size','30px');
  let col = color(135,62,35)
  button.style('background-color',col)
  button.mousePressed(playerRolled)
  
}
function inputBoxes(){
  target = createInput();
  target.position(200, 60);
  target.size(30);
  risk = createInput();
  risk.position(200, 110);
  risk.size(30);
}
function playerRolled(){
  let m = risk.value();
  money = money - m;
}




