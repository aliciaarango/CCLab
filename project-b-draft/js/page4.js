
let instr1 = false;
let instr2 = false;
let button1Pressed = false;
let button2Pressed = false;
let faceRight = true;

let indoorRain;
let playSound = true;


let x = 250
let s = 1

let rain = [];

//Dialogue sequence variables
let playSequence = false;
let bgm;
let myFont;
let jumpscare;
let isDone = false;
let myImage
let logframes = 0;


function preload(){
  
  myFont = loadFont("assets/font.ttf")
  indoorRain = loadSound("assets/indoorRain.mp3")

  bgm = loadSound("assets/bgmPage4.mp3");
  myImage = loadImage("assets/bloodSplatter.png")
  //forestSound = loadSound("assets/forestAmbience.mp3")
}

function setup() {
  let myCanvas = createCanvas(1200, 600);
  myCanvas.parent("canvasContainer")
  
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255, 255, 255);
  textFont(myFont);
  
  foodUneaten = new remainsUneaten(175, 360);

  foodEaten = new remainsEaten(175, 360);

  littleRedRight = new LittleRedRidingHoodRight(0, 0, 2);

  //Sequence

  wolf = new Wolf(width / 2, height / 2 + 480, 4.5);
}

function draw() {
  background(10);
  
    if(playSound && playSequence == false){

    if(!indoorRain.isPlaying()){
      indoorRain.play();
    }
  }else{
    indoorRain.pause();
  }
  
    let p = new Raindrop(random(width), 100);
  rain.push(p);

  for (let i = 0; i < rain.length; i++) {
    let p = rain[i];
    p.update();
    p.display();
    p.splash();
    p.fade();
  }

  for (let i = rain.length - 1; i >= 0; i--) {
    if (rain[i].lifespan == true) {
      rain.splice(i, 1);
    }
  }

  noStroke();
  //wall
  fill(30, 30, 30);
  rect(0, 0, 400, height);
  rect(400, 0, width, 100);
  rect(400, 300, width, height)
  rect(650, 100, width, 200)

  //floor
  fill(50, 50, 50);
  rect(0, 500, width, height);
  //floorpost
  fill(10);
  rect(0, 490, width, 10);
  
    //window frame
  fill(20);
  rect(396, 96, 10, 210)
  rect(645, 96, 10, 210)
  rect(396, 96, 250, 10)
  //rect(396, 96, 258, 210);
  //window
  fill(50);
  //rect(400, 100, 250, 200);

  //window bars and sill
  fill(20);
  rect(400, 200, 250, 10);
  rect(520, 100, 10, 200);
  rect(392, 300, 266, 20);

  //figure in bed
  fill(60);
  quad(765, 352, 850, 300, width, 230, width, 355);
  //bed shadow
  fill(20, 200);
  rect(775, 0, width, 500);
  //bedpost
  fill(40);
  rect(765, 0, 20, 400);
  //bed
  fill(60);
  rect(750, 350, width, 200, 5);

  //pantry
  fill(40, 40, 40);
  rect(-10, 45, 195, 475, 5);
  fill(20, 20, 20);
  rect(-10, 50, 190, 470, 5);

  stroke(30, 30, 30);
  strokeWeight(2);

  strokeWeight(2);
  line(0, 150, 180, 150);
  fill(40, 40, 40);

  //upper cabinet doors
  noStroke();
  rect(50, 54, 126, 100, 5);
  rect(-80, 54, 128, 100, 5);

  //lower cabinet doors
  rect(0, 330, 178, 15);

  rect(51, 350, 126, 170, 5);
  rect(-10, 350, 59, 170, 5);

  fill(119, 119, 119);
  ellipse(80, 110, 10, 25);
  ellipse(15, 110, 10, 25);

  ellipse(90, 430, 10, 30);
  ellipse(10, 430, 10, 30);


  //bed curtain
  fill(80);
  beginShape();
  curveVertex(750, 0);
  curveVertex(750, 0);
  curveVertex(800, 100);
  curveVertex(900, 200);
  curveVertex(1020, 250);
  curveVertex(1070, 350);
  curveVertex(width, 400);
  curveVertex(width, 0);
  curveVertex(width, 0);
  endShape(CLOSE);

  //table
  fill(100);
  rect(200, 360, 10, 190);

  fill(100);
  rect(-10, 360, 250, 15, 5);

  if (button1Pressed && instr1 && instr2) {
    foodEaten.display();
  } else {
    foodUneaten.display();
  }
  
  push()
  translate(x,460);
  scale(s,1);
  littleRedRight.update()
  littleRedRight.display()
  pop()

      if (keyIsPressed == true) {
    if (keyCode === RIGHT_ARROW) {

      //bRight = true;
          s = 1;
      littleRedRight.left_leg = -littleRedRight.speed1 / 10;
      littleRedRight.right_leg = littleRedRight.speed1 / 10;
            x += littleRedRight.xSpd;

    } else if (keyCode === LEFT_ARROW) {

      //bRight = false;
    s = -1;
      littleRedRight.left_leg = -littleRedRight.speed1 / 10;
      littleRedRight.right_leg = littleRedRight.speed1 / 10;
          x -= littleRedRight.xSpd;

  
    }
  }

  push();
  if (button1Pressed == false) {
    fill(242, 180);
    stroke(242, 180);
    rectMode(CENTER);
    rect(width / 2 - 50, height / 2 - 100, 400, 150, 10);
    fill(0);
    noStroke();
    variable = map(sin(frameCount / 50), -1, 1, 24, 26);
    textAlign(CENTER, CENTER);
    textSize(25);
    textFont("Ariel");
    text("Go talk to grandmother.", width / 2 - 50, height / 2 - 135);

    textSize(15);
    text("Press arrow keys to move", width / 2 -50, height / 2 - 100);
    fill(0);
    rect(width / 2 -50 , height / 2 - 60, 60, 30, 10);
    fill(255);

    textSize(18);
    text("start", width / 2 -50, height / 2 - 60);
  }
  pop();

  if (button1Pressed && instr1 === false &&
    dist(x, 450, 750, 350) < 200
  ) {
    textStyle(BOLD);
    //textAlign(CENTER, CENTER)
    textAlign(CENTER, CENTER);
    textFont("Courier New", 20);
    text("Press '1' to talk", 750 - 15, 350 - 80);
  }

  if (
    button1Pressed &&
    instr1 &&
    button2Pressed == false &&
    dist(x, 450, 750, 350) < 200
  ) {
    push()
    fill(20, 200);
    stroke(20, 200);
    rectMode(CENTER);
    rect(750 -45, 350 - 160, 500, 150, 10);
    pop()
    textStyle(BOLD);
    textFont("Ariel", 22)
    textAlign(CENTER, CENTER);
    fill(200, 0, 0)
    //stroke(200, 0, 0)
    //textFont("Courier New", 20);
    textStyle(NORMAL);
    text("I'm so glad to see you, dear!", 750 - 45, 350 - 200);
    text("You must be tired. Why don't you first eat", 750 - 45, 350 - 160);
    text("the food I've prepared for you on the table?", 750 - 45, 350 - 120);
  }

  if (button1Pressed && instr1 &&
    instr2 == false &&
    dist(x, 450, foodUneaten.x, foodUneaten.y) < 200
  ) {
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    textFont("Courier New", 20);
    text("Press '2' to eat", foodUneaten.x - 15, foodUneaten.y - 80);
  }

  push();
  if (instr1 && instr2 && button1Pressed && button2Pressed == false) {
    fill(242, 180);
    stroke(242, 180);
    rectMode(CENTER);
    rect(width / 2 - 300, height / 2 - 100, 400, 130, 10);
    //textStyle(BOLD);
    textStyle(NORMAL);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textFont("Ariel", 25);
    text("Go talk to grandmother again.", width / 2 - 300, height / 2 - 115);
    fill(0);
    rect(width / 2 - 300, height / 2 - 65, 60, 30, 10);
    fill(255);

    textSize(15);
    text("Got it", width / 2 - 300, height / 2 - 65);
  }
  pop();

  if (instr1 && instr2 && button1Pressed &&
    button2Pressed &&
    dist(x, 450, 750, 350) < 200
  ) {
    textStyle(BOLD);
    //textAlign(CENTER, CENTER)
    textFont("Courier New", 20);
    text("Press '3'", 750 - 40, 350 - 80);
  }

if (instr1 && instr2 && button1Pressed &&
  button2Pressed &&
  dist(x, 450, 750, 350) < 200 && playSequence){
    background(0)
    dialogue();
  }

  if(isDone){
    r = map(frameCount, logframes, logframes + 100, 0, 255)
    fill(r, 0, 0);
    textSize(46);
    text("Go to next chapter", width/2, height/2)
  }

}

function mousePressed() {
  let d1 = dist(mouseX, mouseY, width / 2 - 50, height / 2 - 60);
  if (d1 < 20) {
    button1Pressed = true;
  }

  let d2 = dist(mouseX, mouseY, width / 2 - 300, height / 2 - 65);
  if (d2 < 20) {
    button2Pressed = true;
  }
}

function keyPressed() {
  if (key == "1") {
    instr1 = true;
  }

  if (key == "2") {
    instr2 = true;
  }

  if (key == "3"){
    playSequence = true;
    bgm.play();
    bgm.onended(handleEnd);
  }
}

class remainsUneaten {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(90);
    rect(-25, -50, 25, 50);
    fill(64, 0, 0, 100);
    rect(-22, -45, 20, 42);
    fill(45, 0, 0);
    ellipse(-15, -20, 30, 10);
    ellipse(10, -20, 30, 10);
    fill(70);
    quad(-15, 0, 15, 0, 45, -20, -45, -20);
    pop();
  }
}

class remainsEaten {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(90);
    rect(-25, -50, 25, 50);
    fill(64, 0, 0, 100);
    // rect(-22, -45, 20, 42)
    fill(45, 0, 0);
    //ellipse(-15, -20, 30, 10)
    //ellipse(10, -20, 30, 10)
    fill(70);
    quad(-15, 0, 15, 0, 45, -20, -45, -20);
    pop();
  }
}

class LittleRedRidingHoodRight {
  constructor(startX, startY, scaling) {
    this.x = startX;
    this.y = startY;
    this.xSpd = 0.9;
    this.left_leg = 0;
    this.right_leg = 0;

    this.scale = 1;
    this.scale_width = 1.15;

    this.scaling = scaling;
  }

  update() {
    this.speed4 = map(cos(frameCount / 20), -1, 1, -0.3, 0.3);
    this.speed1 = sin(frameCount / 20);
    //this.y += this.speed4 / 4;

    this.scale_width += this.speed4 / 280;

    //this.x += this.xSpd;
  }

  display() {
    push();
    translate(this.x, this.y);

    scale(this.scaling);

    push();

    // scale(this.scale, this.scale_width);

    //Legs
    push();
    noStroke();
    rotate(this.left_leg);
    fill("black");
    ellipse(-5, 20, 8, 60);
    pop();
    push();
    noStroke();
    fill("black");
    rotate(this.right_leg);
    ellipse(-5, 20, 8, 60);
    pop();

    scale(this.scale, this.scale_width);

    //Head
    noStroke();
    fill("white");
    ellipse(0, -48, 30);
    fill("black");
    stroke(0);
    bezier(12, -58, -2, -70, -23, -55, -12, -38);
    line(12, -58, -12, -38);

    //Eye
    noStroke();
    fill("black");
    ellipse(8, -48, 4, 8);
    fill(255);
    ellipse(9, -49, 2, 2);

    //Skirts
    beginShape();
    //stroke(80, 0, 0)
    fill(168, 0, 0);
    stroke(80, 0, 0);
    strokeWeight(0.5);
    curveVertex(33, 30);
    curveVertex(33, 30);
    curveVertex(15, -20);
    curveVertex(0, -30);
    curveVertex(-15, -20);
    curveVertex(-33, 30);
    curveVertex(-33, 30);
    endShape();
    arc(0, 29, 66, 15, 0, PI);

    push();
    translate(5, -45);
    beginShape();

    fill(168, 0, 0);
    curveVertex(0, 10);
    curveVertex(0, 10);
    curveVertex(0, -10);
    curveVertex(0, -20);
    curveVertex(-12, -20);
    curveVertex(-25, -8);
    curveVertex(-32, 10);
    curveVertex(-32, 10);
    endShape();
    arc(-16, 9, 32, 16, 0, PI);
    pop();

    pop();

    pop();
  }
}

class LittleRedRidingHoodLeft {
  constructor(startX, startY, scaling) {
    this.x = startX;
    this.y = startY;
    this.xSpd = 0.9;
    this.left_leg = 0;
    this.right_leg = 0;

    this.scale = 1;
    this.scale_width = 1.15;

    this.scaling = scaling;
  }

  update() {
    this.speed4 = map(cos(frameCount / 20), -1, 1, -0.3, 0.3);
    this.speed1 = sin(frameCount / 20);
    this.scale_width += this.speed4 / 280;
    
    
  }
  
  updatePosition(x){
    this.x = x;
  }

  display() {
    push();
    translate(this.x, this.y);

    scale(this.scaling);

    push();

    //Legs
    push();
    noStroke();
    rotate(this.left_leg);
    fill("black");
    ellipse(5, 20, 8, 60);
    pop();
    push();
    noStroke();
    fill("black");
    rotate(this.right_leg);
    ellipse(5, 20, 8, 60);
    pop();

    scale(this.scale, this.scale_width);

    //Head
    noStroke();
    fill("white");
    ellipse(0, -48, 30);
    fill("black");
    stroke(0);
    bezier(-12, -58, 2, -70, 23, -55, 12, -38);
    line(-12, -58, 12, -38);

    //Eye
    noStroke();
    fill("black");
    ellipse(-8, -48, 4, 8);
    fill(255);
    ellipse(-9, -49, 2, 2);

    //Skirts
    beginShape();
    stroke(80, 0, 0);
    strokeWeight(0.5);
    fill(168, 0, 0);
    curveVertex(33, 30);
    curveVertex(33, 30);
    curveVertex(15, -20);
    curveVertex(0, -30);
    curveVertex(-15, -20);
    curveVertex(-33, 30);
    curveVertex(-33, 30);
    endShape();
    arc(0, 29, 66, 15, 0, PI);

    push();
    translate(5, -45);
    beginShape();

    fill(168, 0, 0);
    curveVertex(-8, 10);
    curveVertex(-8, 10);
    curveVertex(-8, -10);
    curveVertex(-8, -20);
    curveVertex(5, -20);
    curveVertex(17, -8);
    curveVertex(24, 10);
    curveVertex(24, 10);
    endShape();
    arc(8, 9, 32, 20, 0, PI);
    pop();

    pop();

    pop();
  }
}


class Raindrop {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.width = 0.5;
    this.height = 15;
    this.spdY = random(2, 3);
    // this.splashed = false;
    this.lifespan = false;
    // this.finished = false;
    this.r = this.r;
    this.g = this.g;
    this.b = this.b;
    this.alpha = 200;
  }
  // methods (functions): particle's behaviors
  update() {
    // (add)
    this.y += this.spdY;

    this.r = 150;
    this.g = 150;
    this.b = 150;
  }

  splash() {
    if (this.y > height - 20) {
      this.spdY = 0;
      this.width = 22;
      this.height = 2;
      //this.lifespan = true;
      //this.splashed = true;
      this.alpha -= 20;
    }
  }

  fade() {
    if (this.alpha <= 0) {
      this.lifespan = true;
    }
  }

  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    stroke(this.r, this.g, this.b, this.alpha);
    strokeWeight(1);
    noFill();
    ellipse(0, 0, this.width, this.height);

    pop();
  }
}

function dialogue() {
  t = [
    "You look soaked from the rain, my dear.",
    " Why don’t you take off your wet clothes and climb into bed?",
    "Little Red Riding Hood did as she was told.",
    "Grandmother, what big arms you have...",
    "All the better to hug you with, my dear!",
    "Grandmother, what big legs you have...",
    "All the better to run with, my child!",
    "Grandmother, what big ears you have...",
    "All the better to hear with, my dear!",
    "Grandmother, what big eyes you have...",
    "All the better to see with, my child!",
    "Grandmother, what big teeth you have...",
    "All the better to eat you with, my dear.",
  ];

  textFont(myFont)
  textSize(36);
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);

  if(bgm.currentTime() > 0 && bgm.currentTime() <= 8){
    r1 = map(bgm.currentTime(), 0, 8, 0, 150)
    fill(r1, 0, 0)
    text("Unbeknownst to Little Red Riding Hood, the food she", width/2, height/2 - 30)
    text("had just consumed was the flesh and blood of her own grandmother.", width/2, height/2 + 30)
  } 
  
  else if (bgm.currentTime() > 8 && bgm.currentTime() <= 15.6) {
    r2 = map(bgm.currentTime(), 10, 13, 255, 0)
    fill(r2, 0, 0);
    text(t[0], width / 2, height / 2 - 30);
    text(t[1], width / 2, height / 2 + 30);
  } 
  
  
  else if (bgm.currentTime() > 15.6 && bgm.currentTime() <= 23.3) {
    r3 = map(bgm.currentTime(), 17, 19, 255, 0)
    fill(r3);
    text(t[2], width / 2, height / 2);
    
    
    
   } else if (bgm.currentTime() > 23.3 && bgm.currentTime() <= 25.4) {
    fill(255);
    text(t[3], width / 2, height / 2); 
     
    } else if (bgm.currentTime() > 25.4 && bgm.currentTime() <= 31.3) {
    r4 = map(bgm.currentTime(), 27, 30, 255, 0)
    fill(r4, 0, 0);
    text(t[4], width / 2, height / 2);
     
     
  } else if (bgm.currentTime() > 31.3 && bgm.currentTime() <= 33) {
    fill(255);
    text(t[5], width / 2, height / 2);
    
  } else if (bgm.currentTime() > 33 && bgm.currentTime() <= 39) {
    r5 = map(bgm.currentTime(), 34, 36, 255, 0)
    fill(r5, 0, 0);
    text(t[6], width / 2, height / 2);
    
    
    
  } else if (bgm.currentTime() > 39 && bgm.currentTime() <= 40.8) {
    fill(255);
    text(t[7], width / 2, height / 2);
  } else if (bgm.currentTime() > 40.8 && bgm.currentTime() <= 42.8) {
    fill(255, 0, 0);
    text(t[8], width / 2, height / 2);
    
    
    
  } else if (bgm.currentTime() > 42.8 && bgm.currentTime() <= 44.6) {
    fill(255);
    text(t[9], width / 2, height / 2);
  } else if (bgm.currentTime() > 44.6 && bgm.currentTime() <= 46.6) {
    fill(255, 0, 0);
    text(t[10], width / 2, height / 2);
    
    
    
  } else if (bgm.currentTime() > 46.6 && bgm.currentTime() <= 48.4) {
    fill(255);
    text(t[11], width / 2, height / 2);
  } else if (bgm.currentTime() > 48.4 && bgm.currentTime() <= 50.5) {
    //fill(255, 0, 0);
    //textSize(60)
    //text(t[12], width / 2, height / 2);
    background(0)
     push()
    wolf.display();
    pop()

    
    //background(0)
    
  } else if (bgm.currentTime() > 52.3 && bgm.currentTime() <= 54) {
    fill(255, 0, 0);
        textSize(60)
    text(t[12], width / 2, height / 2);
    //background(0)


  } else if (bgm.currentTime() > 54) {
    //fill(255, 0, 0);
    //text(t[12], width / 2, height / 2);
    background(0)
    //trigger = true;
     //push()
    //wolf.display();
    //pop()
    image(myImage, 0, 0, 1200, 600);
    
  } else {
    //trigger = true;
  }
}

function handleEnd(){
isDone = true;
logframes = frameCount;
}

class Wolf {
  constructor(start_x, start_y, sizeScale) {
    this.x = start_x;
    this.y = start_y;
    this.scale = sizeScale;
  }

  display() {
    translate(this.x, this.y);
    push();

    scale(this.scale);

    push();

    fill("black");

    //Ears
    triangle(-70, -160, -70, -250, -25, -200);
    triangle(70, -160, 70, -250, 25, -200);
    push();
    fill("red");

    pop();

    //Head
    quad(-100, -140, -25, -200, 25, -200, 100, -140);
    quad(-100, -140, -55, -100, 55, -100, 100, -140);
    //Snout
    quad(-35, -100, 35, -100, 15, -50, -15, -50);
    fill(255);
    stroke(0);

    push();
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = color("red");
    fill("red");
    noStroke();

    //Eyes
    triangle(-40, -135, -20, -125, -40, -155);
    triangle(40, -135, 20, -125, 40, -155);

    quad(-13, -54, 13, -54, 10, -65, -10, -65);

    pop();

    pop();

    pop();
  }
}


