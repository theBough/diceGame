let dieOne;
let dieTwo;
let sum;
function setup() {
  createCanvas(400, 400);
  dieOne = Math.floor(Math.random()*6 +1 );
  dieTwo = Math.floor(Math.random()*6 +1 );
  sum = dieOne + dieTwo;
}

function draw() {
  background(220);
  textSize(50);
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

