let dieOne;
let dieTwo;
let sum;
let target;
let risk;

function setup() {
  createCanvas(400, 400);
  dieOne = Math.floor(Math.random()*6 +1 );
  dieTwo = Math.floor(Math.random()*6 +1 );
  sum = dieOne + dieTwo;
  target = createInput();
  target.position(10,220);
  risk = createInput();
  risk.position(10,320);
}

function draw() {
  background(220);
  textSize(24);
  text("What Number are you tring to roll?",10,200)
  text("How much do you wanna risk?",10,300)
  text(dieOne, 50,50)
  text(dieTwo, 100,50)
  if(keyIsDown(13)){
    dieOne = Math.floor(Math.random()*6 +1 );
    dieTwo = Math.floor(Math.random()*6 +1 );
  }else{
    sum = dieOne + dieTwo;
  }
    
  text("The Sum is: " + sum, 50,100) ;
}

