let fishImage, sandImage, needleImage, backgroundImage, font;
let waveBgm, sound1, sound2;
let stage = 0;

let fish = [];
let tt = 0.0;
let needleX, needleY;

let bar;
let barX = 300, barVelocity = 20;

let seaFish = [];

function preload()
{
  // load images
  fishImage = loadImage('image/fish.png');
  sandImage = loadImage('image/sand.png');
  needleImage = loadImage('image/needle.png');
  backgroundImage = loadImage('image/background.jpg')

  // load font
  font = loadFont('font/비트로 코어 OTF.otf')

  // load fish images
  seaFish[0] = loadImage('image/tuna.png');
  seaFish[1] = loadImage('image/salmon.png');
  seaFish[2] = loadImage('image/turtle.png');
  seaFish[3] = loadImage('image/boot.png');
  seaFish[4] = loadImage('image/ell.png');
  seaFish[5] = loadImage('image/flatfish.png');
  seaFish[6] = loadImage('image/mackerel.png');
  seaFish[7] = loadImage('image/anemonefish.png');

  // load sounds
  waveBgm = loadSound('sound/waveBgm.mp3');
  sound1 = loadSound('sound/띠링.mp3');
  sound2 = loadSound('sound/뾰로롱.mp3');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  for (i = 0; i < 2; i++)
  {
    fish[i] = new Fish();
  }

  bar = new Bar();

  frameRate(60);
  
  needleX = width/2;
  needleY = height - 150;

  barRange = random(100, 300);
  barRangeX = random(300, width - 300)

  textFont(font);
  image(backgroundImage, width/2, height/2, width, height);
  textSize(100);
  textAlign(CENTER, CENTER);
  text('Catch!', width/2, 300)
  textAlign(CENTER, BOTTOM);
  textSize(30);
  text('Press F11 and then press F5 to full screen', width/2, height);

  rectMode(CENTER);
  rect(width/2, height - 300, 100, 30);
  textSize(15);
  textAlign(CENTER, CENTER);
  text('start game', width/2 - 1, height - 304);

  waveBgm.loop();
  waveBgm.setVolume(0.5);
}

function touchStarted() 
{
  getAudioContext().resume();
}

function draw() 
{
  // stage 1 = Sea stage
  if (stage == 1)
  {
    wave();
    drawElement();
    biteCheck()
  }

  // stage 2 = timing game
  if (stage == 2)
  {
    timingGame();
    timingCheck();
  }
  
  // fish description
  if (stage == 3)
  {
    reset();
    fishName();
  }
}

function keyPressed()
{
  if (stage == 2 && keyCode == '32')
  {
    if ((barX - 50) > (bar.x - bar.range/2) && (barX + 50) < (bar.x + bar.range/2))
    {
      stage = 3;
      sound2.play();
    }
  else 
    {
      stage = 1;
    }
  }
  if (stage == 3 && keyCode == '13')
  {
    stage = 1;
  }
}

function mousePressed()
{
  if (stage == 0);
  {
    if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height - 315 && mouseY < height - 285)
    {
      stage = 1;
    }
  }
}

function needleMove()
{
  if(keyIsDown(LEFT_ARROW) && needleX > 0)
  {
    needleX -= 1;
  }
  if(keyIsDown(RIGHT_ARROW) && needleX + 35 < width)
  {
    needleX += 1;
  }
  if(keyIsDown(UP_ARROW) && needleY > 100)
  {
    needleY -= 1;
  }
  if(keyIsDown(DOWN_ARROW) && needleY + 50 < height)
  {
    needleY += 1;
  }
}

function wave()
{
  background('#58ACFA');

  push();
  noStroke();
  t = tt;
  fill('#00BFFF');
  beginShape();
  vertex(0, height);
  for (let x = 0; x <= width + 100; x += 10)
  {
    let y = 100 + 50 * noise(t);
    vertex(x, y);
    t += 0.015;
  }
  vertex(width + 100, height + 100);
  endShape();
  tt += 0.003;
  pop();

  image(sandImage, width/2, height - 300, width, 600);

  fill(0);
  textSize(25);
  textAlign(CENTER, CENTER);
  text('Use the arrow keys to move the needle, catch the fish', width/2, height - 70);
}

function drawElement()
{
  for (i = 0; i < 2; i++)
  {
    fish[i].display();
  }

  // draw needle
  push();
  strokeWeight(2);
  image(needleImage, needleX, needleY, 36,  50);
  line(needleX, needleY - 24, needleX, -100);
  needleMove();
  pop();
}

function biteCheck()
{
  let d1 = dist(needleX - 18, needleY, fish[0].x, fish[0].y);
  let d2 = dist(needleX - 18, needleY, fish[1].x, fish[1].y);
  
  if (d1 < 20 || d2 < 20)
  {
    stage = 2;
    sound1.play();
  }
}

function timingGame()
{
  background('#58ACFA');
  image(fishImage, width/2, height/2 - 100, width/2, height/2);

  rectMode(CENTER);
  fill(255);
  rect(width/2, height - 100, width - 300, 100);

  fill(255, 0, 0);
  rect(barX, height - 100, 50, 100);
  barX += barVelocity;
  if (barX > width - 175)
  {
    barVelocity *= -1
  }
  else if (barX < 175)
  {
    barVelocity *= -1
    needleX = width/2;
    needleY = height - 150;
  }
}

function timingCheck()
{
  fill(255, 0, 0, 100);
  bar.display()
  fish[0].reset();

  fill(0);
  textSize(25);
  textAlign(CENTER, BOTTOM);
  text('Press the space bar at the right time', width/2, height);
}

function reset()
{
  needleX = width/2;
  needleY = height - 150;

  background('#58ACFA');
  fish[0].fishInformation();
  bar.reset();
}

function fishName()
{
  fill(0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text('Type Enter to return to the sea', width/2, height - 100);

  if (fish[0].fish == 0)
  {
    text('Tuna', width/2, 100)
  }
  if (fish[0].fish == 1)
  {
    text('Salmon', width/2, 100)
  }
  if (fish[0].fish == 2)
  {
    text('Turtle', width/2, 100)
  }
  if (fish[0].fish == 3)
  {
    text('Trash', width/2, 100)
  }
  if (fish[0].fish == 4)
  {
    text('Ell', width/2, 100)
  }
  if (fish[0].fish == 5)
  {
    text('Flatfish', width/2, 100)
  }
  if (fish[0].fish == 6)
  {
    text('Mackerel', width/2, 100)
  }
  if (fish[0].fish == 7)
  {
    text('Anemonefish', width/2, 100)
  }
}
