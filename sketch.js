
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  createCanvas(1200,400);  
}

function draw(){

 r = map(mouseX,1,1200,0,255);
 g = map(mouseX,0,1200,20,244);
 b = map(mouseX,0,1200,10,247);

background(r,g,b);
fill(255);
ellipse(mouseX,250,60,60);

}