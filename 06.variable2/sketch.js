// let x = 30, y = 30;
// let velocity_x = 1, velocity_y = 1
// let accel_x = 0.2, accel_y = 0.2;
// let friction = 0.99;

// function setup() {
//   createCanvas(400, 400);
//   frameRate(144); // try to change
// }
// function draw() {
//   background(200);
//   ellipse(x, y, 30, 30);

//   // velocity_x += accel_x;
//   // velocity_y += accel_y;

//   velocity_x *= friction;
//   velocity_y *= friction;

//   x += velocity_x;
//   y += velocity_y;

//   textSize(15);
//   text(frameCount + ' : ' + frameRate(), 10, 30)
// }

let x = 150, y = 150;
let d = 30;
let friction = 0.99;
let theta = 0.0;
// let d1 = 200, d2 = 200, theta = 0.0;
// let x = 0, y = 0;
// let R = 0, G = 0, B = 0;
function setup() {
//   createCanvas(400, 400);
//   frameRate(60);
  createCanvas(500, 500);
  // frameRate(60);
  frameRate(20);
  background(0);
}
function draw() {
  strokeWeight(random(50));
  stroke(random(255), random(255), random(255));
  point(mouseX, mouseY);
  // stroke(R , B, G);
  // strokeWeight(3);
  // fill(R, G, B);
  // background(200);
  // ellipse(x, y, d1, d2);
  // R++;
  // G++;
  // B++;
  // R %= 255;
  // G %= 234;
  // B %= 123;
  // d1 = height/2 + height/2 * sin(theta);
  // d2 = height/2 + height/2 * sin(theta);
  // x = width/2 + width/2 * sin(theta);
  // y = height/2 + height/2 * sin(theta);
  // // theta += 0.0333;
  // background(200);
  // x = mouseX;
  // // let y = height/2 + height/2 * cos(theta);
  // let y = map(sin(theta), -1, 1, 0, height);

  // line(x, y-d, x, y+d);
  // ellipse(x, y, d, d);
  // theta += 0.00933;


}
