let dieOne;
let dieTwo;
let sum;
let target;
let risk;
let money;

function setup() {
  createCanvas(400, 400);
  money  =50;
  design();
  
  
  target = createInput();
  target.position(10,220);
  risk = createInput();
  risk.position(10,320);
}

function draw() {
  background(37,150,190);
  design();
  if(keyIsDown(13)){
    dieOne = Math.floor(Math.random()*6 +1 );
    dieTwo = Math.floor(Math.random()*6 +1 );
  }else{
    sum = dieOne + dieTwo;
  }
}
function design(){
  fill(226,135,67);
  text("Dice Game", 150,20);
  text("Money: " + money,10, 50);
  text("Die 1: " + dieOne, 10,100);
  textSize(24);
  text("What Number are you trying to roll?",10,200)
  text("How much do you wanna risk?",10,300)
  text("The Sum is: " + sum, 50,100) ;
  
}

