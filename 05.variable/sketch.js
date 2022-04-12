// // let x = 75;
// // let y = 50;
// // let d1 = 40;
// // let d2 = 40;


// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(200);
//   // ellipse(x, y, d1, d2); // Left
//   // x = x + 100;
//   // ellipse(x, y, d1, d2); // Left
//   // x = x + 100;
//   // ellipse(x, y, d1, d2); // Right

  
// }

// let x1;
// let x2;
// let y;
// x1 = 0
// y1 = 0

// // x1 = 50;
// // x2 = 250;
// // y = 30;
// let d1;
// d1 = 10;
// let c1;
// c1 = 0
// let R, G, B;
// B = 0;

let x = 300, y = 200, c = 0, d = 100;
let R = 0, G = 0, B = 0;




function setup() 
{
  createCanvas(700, 400);
 

  // number(integer, float..), char, string
  // Boolean, array, object(class)
}
 
function draw()
{
  background(0);
  // circle(150, y-20, 30, 30);
  // line(x1, y, x2, y);
  // line(x1, y * 2, x2, y * 2);
  // line(x1, y * 3, x2, y * 3);
  // line(x1, y * 4, x2, y * 4);
  // y = y + 1;
  // y %= 300 // %/ = y = y % 300 // % = 나머지 = Modulus
  // print(y);
  // //noFill(); // delete the circle color
  // fill(0, 0, B, 150);
  // B++;
  // c1 = c1 + 1.7;
  // c1 = c1 % 255;
  // circle(x1, y1, d1); // draw circle
  // x1 = x1+ 1;
  // y1 = y1+ 1;
  // x1 %= 300;
  // y1 %= 300;
  // d1 = d1 + 1; // increase the radius of circle
  // d1 = d1 % 300; // return to original radius 
  

  // rectMode(CENTER);
  // rect()
  push();
  noStroke();
  textFont("D2coding");
  text("Distance", 0, 12)
  pop();


  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, y+d/2, 700, y+d/2);
  
  push();
  fill(R, 0, 0)
  stroke(255, 255, 0);
  R++;
  R %= 255;
  ellipse(x, y, d, d);
  ellipse(x+d, y, d, d);


  noFill();
  triangle(x, y, x+d/2, y-d, x+d, y);
  pop();
  x = x + 2;
  x %= 700;
 


}