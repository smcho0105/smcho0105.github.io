let x = 20, y = 80, w = 460, h = 50;
let size = 100, slider = 20;
function setup()
{
  createCanvas(500, 500);
}

function draw()
{
  background(0);
  if (mouseIsPressed)
  {
    if ((x <= mouseX && mouseX <= x + w) && (y <= mouseY && mouseY <= y + h))
    {
      slider = mouseX;
      size = map(slider, x, x + w, 100, width);
    }
  }
  fill(0, 0, 255);
  ellipse(width/2, height/2, size, size);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text('Size : ' + int(size), width/2, 50);
  rect(x, y, w, h);
  fill(255, 0, 0);
  rect(slider, y, 10, h);
  sliderMy(x, y, w, h, size);
  // fill(255);
  // textSize(30);
  // textAlign(CENTER, CENTER);
  // if (key === 'a')
  // {
  //   text('a', width/2, height/2);
  // }
  // else if (key === 'b')
  // {
  //   text('b', width/2, height/2);
  // }
  // else if (key === 'c')
  // {
  //   text('c', width/2, height/2);
  // }
  // else
  // {
  //   text('None', width/2, height/2);
  // }
  
  
  // switch(key)
  // {
  //   case 'a' :
  //   case 'v' :
  //     text('a', width/2, height/2);
  //     break;
  //   case 'b' :
  //     text('b', width/2, height/2);
  //     break;
  //   case 'c' :
  //     text('c', width/2, height/2);
  //     break;
  //   default :
  //   text('None', width/2, height/2);
  //   break;
  //   // break = 나오기
  // }
}

function sliderMy(x, y, w, h, size)
{

}
