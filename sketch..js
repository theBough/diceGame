let dieOne = 0;
let dieTwo = 0;
let sum;
let target;
let risk;
let money;
let button;
let winOrLose;

function setup() {
  createCanvas(400, 400);
  textFont("Verdana")
  money = 50;
  winOrLose = "Click Roll when Ready"
  design();
  inputBoxes();
}

function draw() {
  background(37, 150, 190);
  design();
  if (keyIsDown(13)) {
    
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
  fill(226, 135, 67);
  text(dieOne, 30,140);
  text(dieTwo, 95,140);
  textSize(17);
  text("Pick your number?", 200, 50);
  text("Risk?", 200, 100);
  text(winOrLose,200,225)
  button = createButton("ROLL");
  button.position(10,200);
  button.size(190,150);
  button.style('font-size','30px');
  let col = color(135,62,35)
  button.style('background-color',col)
  button.mousePressed(playerRolled)
  
}
function inputBoxes(){
  target = createInput();
  target.position(200, 60);
  target.size(30);
  target.value(0);
  risk = createInput();
  risk.position(200, 110);
  risk.size(30);
  risk.value(0);
}
function playerRolled(){
  let m = risk.value();
  if(m > money){
    winOrLose = "You don't have enough!"
    return 0;
  }
  money = money - m;
  let g = target.value();
  dieOne = Math.floor(Math.random() * 6 + 1);
  dieTwo = Math.floor(Math.random() * 6 + 1);
  sum = dieOne+dieTwo;
  if(sum == g){
    winOrLose = "Winner!"
    if(g == 2 || g== 12){
      money = money + (m*36);
    }else if(g==3 || g == 11){
      money = money + (m*18);
    }else if(g==4 || g == 10){
      money = money + (m*12);
    }else if(g==5 || g == 9){
      money = money + (m*9);
    }else if(g==6 || g == 8){
      money = money + (m*(5/36));
    }else if(g==7){
      money = money + (m*6);
    }
  }else{
    winOrLose = "Loser"
  }
}
