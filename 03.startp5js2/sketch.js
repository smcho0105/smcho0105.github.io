
let num = 150;

function setup() {
  
  createCanvas(300, 300);
  background(230);
  //ellipse(num, num, 30, 30);
  //text("Hello",0, 10); // corner = left bottom
  //text("Hello",0, 0, 10, 100); // corner = left top

  //text("Hello", 136, 154);
  //text("Hello my name is sungmo", 10, 10, 100, 30); 
  // 칸이 작다 -> 문자열의 개행(줄변환)이 자동으로

  //textSize(30);
  //text("Hello", 100, 100);
  /*textSize(12);
  text("안녕", 100, 140);
  text("안녕", 100, 160);
  textSize(20);
  text("안녕", 100, 160);*/

  // horizAlign (LEFT, CENTER, or RIGHT)
  // vertAlign (TOP, BOTTOM, CENTER, or BASELINE)
  // line(150, 0 , 150, 300);
  // textSize(30);
  // line(0, 100, 300, 100);
  // textAlign(CENTER, CENTER);
  // textSize(30);
  // text("Hello World", 150, 100);

  strokeWeight(0.5);
  ellipse(50, 50, 100, 100);

  fill(150, 60); // 같은 fill function이지만, 매개변수가 다를 수 있다.
  textSize(50);
  //fill('red'): // 잘 쓰지않을 것 (색깔 코드, RGB 픽셀 값)
  fill('#93b3b7');
  strokeWeight(3);
  stroke('green');
  text('word', 10, 30);


  noStroke();
  fill(0, 102, 153);
  text('word', 10, 60);
  fill(0, 102, 153, 90);
  text('word', 10, 90);


}

function draw() {
 

  //num = num + 10;

}