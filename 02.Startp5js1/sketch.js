
let myNum = 30;
console.log(myNum);
console.log(myNum + 50);
console.log(myNum);
myNum = myNum + 30;
console.log(myNum);

// 같다 ==, 선언 = 

const yourNum = 20;
console.log(yourNum);
console.log(yourNum-1);
console.log(yourNum-1);
const PI = 3.14;
console.log(PI*4);

let HP = 100;
console.log(HP);
HP = HP - 10;
console.log(HP);

const enemy = 10;



function setup() 
{
  console.log("Hello world!");
  createCanvas(300, 300);
  console.log(3);
  console.log(4);
  console.log("Hello");
  console.log("He)llo");
  //console.log("hel")lo");
  console.log('helloooo');
  console.log("hello"+"world");
  console.log("score : "+myNum+50);
  console.log(myNum+50);
  //string = 문자열 = ""안에 들어가 있음
  //string + 숫자 = 문자열로 인식함!!!

}

function draw() 
{
  background(0);
  ellipse(150, 150, 150, 150);
  /*console.log(1);
  console.log("Hello");
  //console.log(1);*/
}