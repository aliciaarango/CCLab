//How to make left-facing take current x value of right-facing
//Add rain
//Add rain music
//Creepy music?
//Make video


let instr1 = false;
let instr2 = false;
let button1Pressed = false;
let button2Pressed = false;
let faceRight = true;

let globalTracking = 250;

function preload(){
  
  myFont = loadFont("assets/font.ttf")
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
  
  littleRedRight = new LittleRedRidingHoodRight(250, 450, 2)
  littleRedLeft = new LittleRedRidingHoodLeft(globalTracking, 450, 2)
}

function draw() {
  background(50);
  
  noStroke()
//wall
  fill(30, 30, 30)
  rect(0, 0, width, height)
  
  
//floor  
  fill(50, 50, 50)
  rect(0, 500, width, height)
//floorpost  
  fill(10)
  rect(0, 490, width, 10)
  
//figure in bed
  fill(60)
  quad(765, 352, 850, 310, width, 270, width,355)
//bed shadow
  fill(20, 200)
  rect(775, 0, width, 500)
//bedpost  
  fill(40)
  rect(765, 0, 20, 400)
//bed
  fill(60)
  rect(750, 350, width, 200, 5)

//pantry
  fill(40, 40, 40)
  rect(-10, 45, 195, 475, 5)
  fill(20, 20, 20)
  rect(-10, 50, 190, 470, 5)
  
  stroke(30, 30, 30)
  strokeWeight(2)
  //line(49, 52, 50, 518)
  strokeWeight(2)
  line(0, 150, 180, 150)
  fill(40, 40, 40)
  //stroke(30, 30, 30)
  //upper cabinet doors
  noStroke()
  rect(50, 54, 126, 100, 5)
  rect(-80, 54, 128, 100, 5)
  
  //lower cabinet doors
  rect(0, 330, 178, 15)
  
  rect(51, 350, 126, 170, 5)
  rect(-10, 350, 59, 170, 5)
  
  fill(119, 119, 119)
  ellipse(80, 110, 10, 25)
  ellipse(15, 110, 10, 25)
  
  ellipse(90, 430, 10, 30)
  ellipse(10, 430, 10, 30)
  
  
//window frame
  fill(20)
  rect(396, 96, 258, 210)
//window
  fill(50)
  rect(400, 100, 250, 200)

//window bars and sill  
  fill(20)
  rect(400, 200, 250, 10)
  rect(520, 100, 10, 200)
  rect(392, 300, 266, 20)

  //bed curtain

  fill(80)
  beginShape()
  curveVertex(750, 0)
  curveVertex(750, 0)
  curveVertex(800, 100)
  curveVertex(900, 200)
  curveVertex(1020, 250)
  curveVertex(1070, 350)
  curveVertex(width, 400)
  curveVertex(width, 0)
  curveVertex(width,0)
  endShape(CLOSE)

  
  
   //table 
  fill(100)
  rect(200, 360, 10, 190)
  
  fill(100) 
  rect(-10, 360, 250, 15, 5)
 
  if(button1Pressed && instr2){
    foodEaten.display()
  } else {
  foodUneaten.display();

}

  
     if (keyIsPressed == true) {
    if (keyCode === RIGHT_ARROW) {
      faceRight = true;
      littleRedRight.left_leg = -littleRedRight.speed1 / 10;
      littleRedRight.right_leg = littleRedRight.speed1 / 10
      littleRedRight.x += littleRedRight.xSpd;
    } else if (keyCode === LEFT_ARROW){
      faceRight = false;
      globalTracking = littleRedRight.x;
      littleRedLeft.left_leg = -littleRedLeft.speed1 / 10;
      littleRedLeft.right_leg = littleRedLeft.speed1 / 10
      littleRedLeft.x -= littleRedLeft.xSpd;
     
    }

  }
  
        if(faceRight){
  littleRedRight.update();
  littleRedRight.display();
  }else{
    littleRedLeft.update();
    littleRedLeft.display();
  }
  
  
  push()  
  if (button1Pressed == false) {
    fill(242, 180);
    stroke(242, 180);
    rectMode(CENTER)
    rect(width / 2, height / 2 - 100, 400, 150, 10);
    fill(0);
    noStroke()
    variable = map(sin(frameCount/50), -1, 1, 24, 26);
    textAlign(CENTER, CENTER)
    textSize(25);
    textFont("Ariel")
    text(
      "Go talk to grandmother.",
      width / 2,
      height / 2 - 135
    );

    textSize(15)
    text("Press arrow keys to move", width / 2, height / 2 - 100);
    fill(0);
    rect(width / 2, height / 2 -60, 60, 30, 10);
    fill(255);

    textSize(18);
    text("start", width / 2, height / 2 -60);
  }
pop()
  
      if (button1Pressed && instr1 === false && (dist(littleRedRight.x, littleRedRight.y, 750, 350) < 200)) {
  textStyle(BOLD);
  //textAlign(CENTER, CENTER)
  textAlign(CENTER, CENTER)
  textFont('Courier New', 20);
    text("Press '1' to talk", 750 -15, 350 - 80);
  } 
  
  if(button1Pressed && instr1 && button2Pressed == false && (dist(littleRedRight.x, littleRedRight.y, 750, 350) < 200)){
      textStyle(BOLD);
    textAlign(CENTER, CENTER)
  textFont('Courier New', 20);
    text("I'm so glad to see you, dear!", 750 - 45, 350 - 200);
    text("You must be tired. Why don't you first eat", 750 - 45, 350 -160)
    text("the food I've prepared for you on the table?", 750 - 45, 350 - 120)
    
  }
  
  if(button1Pressed && instr1 && instr2 == false && (dist(littleRedRight.x, littleRedRight.y, foodUneaten.x, foodUneaten.y) < 200)){
  textStyle(BOLD);
    textAlign(CENTER, CENTER)
  textFont('Courier New', 20);
    text("Press '2' to eat", foodUneaten.x - 15, foodUneaten.y - 80);
  }

  push()
  if(instr2 && button1Pressed && button2Pressed == false){
        fill(242, 180);
    stroke(242, 180);
    rectMode(CENTER)
    rect(width / 2 - 300, height / 2 - 100, 400, 150, 10);
      //textStyle(BOLD);
    textStyle(NORMAL);
    noStroke()
    fill(0);
    textAlign(CENTER, CENTER)
  textFont('Ariel', 25);
    text("Go talk to grandmother again.", width / 2 - 300,
      height / 2 - 115)
        fill(0);
    rect(width / 2 - 300, height / 2 -65, 60, 30, 10);
    fill(255);

    textSize(15);
    text("Got it", width / 2 - 300, height / 2 - 65);
  }
  pop()
  
        if (button2Pressed && (dist(littleRedRight.x, littleRedRight.y, 750, 350) < 200)) {
  textStyle(BOLD);
  //textAlign(CENTER, CENTER)
  textFont('Courier New', 20);
    text("Press '3'", 750 - 40, 350 - 80);
  } 
}

function mousePressed(){
    let d1 = dist(mouseX, mouseY, width / 2 , height / 2 -60);
  if (d1 < 20) {
    button1Pressed = true;
  }
  
      let d2 = dist(mouseX, mouseY, width / 2 -300, height / 2 - 65);
  if (d2 < 20) {
    button2Pressed = true;
  }
  
}

function keyPressed(){
  if(key == "1"){
    instr1 = true;
  }
  
  if(key == "2"){
    instr2 = true;
  }
}

class remainsUneaten{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  display(){
  push()
  translate(this.x, this.y) 
  noStroke()
  fill(90)
  rect(-25, -50, 25, 50)
  fill(64, 0, 0, 100)
  rect(-22, -45, 20, 42)
  fill(45, 0, 0)
  ellipse(-15, -20, 30, 10)
  ellipse(10, -20, 30, 10)
  fill(70)
  quad(-15, 0, 15, 0, 45, -20, -45, -20)
  pop()
  }
}

class remainsEaten{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  display(){
  push()
  translate(this.x, this.y) 
  noStroke()
  fill(90)
  rect(-25, -50, 25, 50)
  fill(64, 0, 0, 100)
 // rect(-22, -45, 20, 42)
  fill(45, 0, 0)
  //ellipse(-15, -20, 30, 10)
  //ellipse(10, -20, 30, 10)
  fill(70)
  quad(-15, 0, 15, 0, 45, -20, -45, -20)
  pop()
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
    stroke(0)
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
    stroke(80, 0, 0)
    strokeWeight(0.5)
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
    stroke(0)
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
    stroke(80, 0, 0)
    strokeWeight(0.5)
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
