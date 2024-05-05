let instructions1Visible = true;
let variable = 0;
let variable2 = 0;
let variable3 = 0;
let logframes = 0;
let convo = false;
let convoComplete = false;
let alpha = 0;
let darken = false;

let currentScene = 1;

let footsteps;
let rainFall;
let myFont;
let forestSound;
//let myVid;
let isReady = false;
let isDone = false;
let playSound = true;

let bgm;
let playSequence = false;

let rain = [];

let xPos = 250;
let s = 1;

let runAway = false;
let restart = false;

let myImage;
let myWolf;

function preload(){
  
  myFont = loadFont("assets/font.ttf")
  rainFall = loadSound("assets/rain.mp3")
  bgm = loadSound("assets/bgmPage3.mp3");
  footsteps = loadSound("assets/footstepsDirt_2.mp3");
  myImage = loadImage("assets/bloodSplatter.png")
  //myWolf = loadSound("assets/wolfSound.mp3");
  myWolf = loadSound("assets/wolfSounds1.mp3");
}

function setup() {

  let myCanvas = createCanvas(1200, 600);
  myCanvas.parent("canvasContainer")
  
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255, 255, 255);
  textFont(myFont);
  
  //forestSound.play();
  rainFall.setVolume(0.5);
  
  /*myVid = createVideo("assets/convoVid_3.mp4");
  myVid.size(1200, 600);
  myVid.volume(1);
  myVid.noLoop();
  myVid.hide();*/
  
  //bgm.onended(handleEnd);

  foregroundTreesDark = new Trees1(119, 119, 119, -30, width, 360, 90, height);
  midgroundTreesDark = new Trees2(51, 51, 51, 70, width, 110, 30, height);
  backgroundTreesDark = new Trees3(17, 17, 17, 20, width, 110, 20, height);
  
  backGround = new WoodsGround(17, 17, 17, 170, 0.01);
  midGround1 = new WoodsGround(51, 51, 51, 230, 0.01);
  midGround2 = new WoodsGround(70, 70, 70, 270, 0.01);
  foreGround = new WoodsGround(105, 105, 105, 320, 0.01);

  road = new Road(200, 200, 200, 375, 0.01);

  treeLeaves = new TreeLeaves(40, 40, 40, 0, 0.01);
  
  //littleRed = new LittleRedRidingHood(100, 455, 0.9);
  littleRed = new LittleRedRidingHood(0, 0, 0.9);

  wolf = new Wolf(950, 420, 0.4, 255, 255, 255);


//Sequence
littleRedConvo = new LittleRedRidingHood(450, 400, 1);

wolfConvo = new Wolf(720, 350, 0.5, 255, 255, 255);

wolf2Convo = new Wolf(720, 350, 0.5, 255, 0, 0);

}

function draw() {
  background(0);

  if(playSound){

    if(!rainFall.isPlaying()){
      rainFall.play();
    }
  }else{
    rainFall.pause();
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
  
  
  backgroundTreesDark.update();
  backgroundTreesDark.display();
  backGround.display();


  midgroundTreesDark.update();
  midgroundTreesDark.display();

  midGround1.display();
  midGround2.display();

  road.display();
  
  wolf.update();
  wolf.display();


  push();
  translate(xPos, 455);
  scale(s, 1);
  littleRed.update();
  littleRed.display();
  pop();
  
  push()
  if (keyIsPressed == true && instructions1Visible == false && playSequence == false) {
    if (keyCode === RIGHT_ARROW) {
      s = 1;
      littleRed.left_leg = -littleRed.speed1 / 10;
      littleRed.right_leg = littleRed.speed1 / 10;
      xPos += littleRed.xSpd;
      if(!footsteps.isPlaying()){
        footsteps.play();

      }
    } else if (keyCode === LEFT_ARROW) {
      s = -1;
      littleRed.left_leg = -littleRed.speed1 / 10;
      littleRed.right_leg = littleRed.speed1 / 10;
      xPos -= littleRed.xSpd;
      if(!footsteps.isPlaying()){
        footsteps.play();

      }
    }else{
      footsteps.pause();
    }
  }
  pop()
  
    if (runAway == false && (dist(xPos, 455, wolf.x, wolf.y) < 200)) {
  textStyle(BOLD);
  textFont('Courier New', 15);
    text("Press 'a' to talk", wolf.x - 45, wolf.y - 60);
  } 

  foregroundTreesDark.update();
  foregroundTreesDark.display();
  foreGround.display();
  treeLeaves.update();
  treeLeaves.display();
  
  

push()  
  if (instructions1Visible) {
    /*fill(242, 180);
    stroke(242, 180);
    rectMode(CENTER)
    rect(width / 2, height / 2, 400, 150, 10);
    fill(0);
    noStroke()
    variable = map(sin(frameCount/50), -1, 1, 24, 26);
    textAlign(CENTER, CENTER)
    textSize(25);
    textFont("Ariel")
    text(
      "What do I do?",
      width / 2,
      height / 2 - 35
    );

    textSize(15)
    text("Press right arrow key to move", width / 2, height / 2);
    fill(0);
    rect(width / 2, height / 2 + 35, 60, 30);
    fill(255);

    textSize(18);
    text("start", width / 2, height / 2 + 35);*/

    fill(242, 200);
    stroke(242, 180);
    rectMode(CENTER)
    rect(width / 2, height / 2, 400, 150, 10);
    fill(0);
    noStroke()
    variable = map(sin(frameCount/50), -1, 1, 24, 26);
    textAlign(CENTER, CENTER)
    textSize(25);
    textFont("Ariel")
    text(
      "Oh no! What should I do?",
      width / 2,
      height / 2 - 35
    );
    textSize(18)
    text("Do you want to talk to the wolf or run away?", width/2, height/2)

    textSize(15)
    //text("Press arrow keys to move", width / 2, height / 2);
    fill(0);
    rect(width / 2 - 70, height / 2 + 40, 65, 30);

    fill(255);
    textSize(14);
    text("Talk", width / 2 - 70, height / 2 + 40);

    fill(0);
    rect(width / 2 + 70, height / 2 + 40, 65, 30);

    fill(255);
    textSize(14);
    text("Run away", width / 2 + 70, height / 2 + 40);


  }
pop()  

push()
  if(instructions1Visible == false){
    if(xPos <= 100 || xPos >= 1150){
      restart = false;
      if(restart == false){
      fill(0);
    //stroke(242, 180);
    rectMode(CENTER)
    rect(width / 2, height / 2, width, height, 10);
    image(myImage, 0, 0, 1200, 600);
    fill("red");
    noStroke()
    variable = map(sin(frameCount/50), -1, 1, 24, 26);
    textAlign(CENTER, CENTER)
    textSize(40);
    textStyle(BOLD);
    textFont(myFont);
    text(
      "Alas!", width / 2, height / 2 - 80);

      text("The wolf has chased you down and killed you.", width/2, height/2)

    textSize(30)
    text("Press 'r' to restart.", width / 2, height / 2 + 120);
    //fill("green");
    //rect(width / 2, height / 2 + 35, 60, 30);
    //fill(255);

    //textSize(18);
    //text("start", width / 2, height / 2 + 35);

    if(!myWolf.isPlaying()){
      myWolf.play();
      //footsteps.loop();
    }
      }else {
        myWolf.pause();
      }
  }
    }

    pop()


  if(playSequence){
    push()
    sequence();
    pop()
  }
  
//push()  
  if(isDone){ 
   //background(0);
  //textAlign(CENTER, CENTER);
  textSize(46);

  textFont(myFont);
  //translate(width/2, height/2);

    let r = map(frameCount, logframes + 50, logframes + 200, 0, 255)
    fill(r);
    text("Go to next chapter", width/2, height/2);
  }
//pop()

  
}

function mousePressed(){
    let d1 = dist(mouseX, mouseY, width / 2 - 70, height / 2 + 40);
  if (d1 < 20) {
    instructions1Visible = false;
  }

  let d2 = dist(mouseX, mouseY, width / 2 + 70, height / 2 + 40);
  if (d2 < 20){
    instructions1Visible = false;
    runAway = true;
  }
}

function keyPressed(){
  if(key == "a"){
    //darken = true;
   // forestSound.pause()
    playSound = false;
    //myVid.play()
    playSequence = true;
    bgm.play();
    bgm.onended(handleEnd);
  }

  if (key == "r"){
    runAway = false; console.log(runAway);
    restart = true;
    xPos = 250;
  }
}

function handleEnd(){
  isDone = true; console.log(isDone);
  logframes = frameCount;

}


function convoScene(r, g, b, alph) {
  fill(r, g, b);
  noStroke();
  ellipse(width / 2, 450, 800, 100);

  fill(r, g, b, alph);

  triangle(200, 450, 1000, 450, width / 2, -300);
}

class Trees1 {
  constructor(r, g, b, startPos, endPos, increment, treeWidth, treeHeight) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.startPos = startPos;
    this.endPos = endPos;
    this.increment = increment;
    this.treeWidth = treeWidth;
    this.treeHeight = treeHeight;
  }

  update(){
    push()
    this.startPos += map(sin(frameCount/20), -1, 1, -0.05, 0.05)
    this.endPos += map(sin(frameCount/20), -1, 1, -0.05, 0.05)
    pop()
  }

  display() {
    for (let j = this.startPos; j < this.endPos; j += this.increment) {
      noStroke();
      fill(this.r, this.g, this.b);
      rect(j, 0, this.treeWidth, this.treeHeight); //tree1-bg

      beginShape();
      curveVertex(j + this.treeWidth - 5, 200);
      curveVertex(j + this.treeWidth - 5, 200);
      curveVertex(j + 195, 100);
      curveVertex(j + this.treeWidth - 5, 230);
      curveVertex(j + this.treeWidth - 5, 230);
      endShape(); //branch
      beginShape();
      curveVertex(j + 5, 230);
      curveVertex(j + 5, 230);
      curveVertex(j - 150, 100);
      curveVertex(j + 5, 265);
      curveVertex(j + 5, 265);
      endShape(); //branch
    }
  }
}

class Trees2 {
  constructor(r, g, b, startPos, endPos, increment, treeWidth, treeHeight) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.startPos = startPos;
    this.endPos = endPos;
    this.increment = increment;
    this.treeWidth = treeWidth;
    this.treeHeight = treeHeight;
  }

  update(){
    push()
    this.startPos += map(cos(frameCount/20), -1, 1, -0.03, 0.03)
    this.endPos += map(cos(frameCount/20), -1, 1, -0.03, 0.03)
    pop()
  }

  display() {
    for (let j = this.startPos; j < this.endPos; j += this.increment) {
      noStroke();
      fill(this.r, this.g, this.b);
      rect(j, 0, this.treeWidth, this.treeHeight); //tree2-bg

      beginShape();
      curveVertex(j + 3, 250);
      curveVertex(j + 3, 250);
      curveVertex(j - 50, 200);
      curveVertex(j + 3, 270);
      curveVertex(j + 3, 270);
      endShape(); //branch
      beginShape();
      curveVertex(j + this.treeWidth - 3, 200);
      curveVertex(j + this.treeWidth - 3, 200);
      curveVertex(j + 80, 150);
      curveVertex(j + this.treeWidth - 3, 215);
      curveVertex(j + this.treeWidth - 3, 215);
      endShape(); //branch
    }
  }
}

class Trees3 {
  constructor(r, g, b, startPos, endPos, increment, treeWidth, treeHeight) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.startPos = startPos;
    this.endPos = endPos;
    this.increment = increment;
    this.treeWidth = treeWidth;
    this.treeHeight = treeHeight;
  }

  update(){
    push()
    this.startPos += map(sin(frameCount/20), -1, 1, -0.02, 0.02)
    this.endPos += map(sin(frameCount/20), -1, 1, -0.02, 0.02)
    pop()
  }

  display() {
    for (let k = this.startPos; k < this.endPos; k += this.increment) {
      noStroke();
      fill(this.r, this.g, this.b);
      rect(k, 0, this.treeWidth, this.treeHeight); //tree bg

      beginShape();
      curveVertex(k + this.treeWidth - 1, 40);
      curveVertex(k + this.treeWidth - 1, 40);
      curveVertex(k + 55, 10);
      curveVertex(k + this.treeWidth -1, 50);
      curveVertex(k + this.treeWidth - 1, 50);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth -1, 100);
      curveVertex(k + this.treeWidth - 1, 100);
      curveVertex(k + 55, 70);
      curveVertex(k + this.treeWidth - 1, 110);
      curveVertex(k + this.treeWidth - 1, 110);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth - 1, 180);
      curveVertex(k + this.treeWidth - 1, 180);
      curveVertex(k + 55, 150);
      curveVertex(k + this.treeWidth -1, 190);
      curveVertex(k + this.treeWidth -1, 190);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth -1, 260);
      curveVertex(k + this.treeWidth -1, 260);
      curveVertex(k + 55, 230);
      curveVertex(k + this.treeWidth -1, 270);
      curveVertex(k + this.treeWidth - 1, 270);
      endShape(); //branch
    }
  }
}

class WoodsGround {
  constructor(r, g, b, start_y, increment) {
    this.y = start_y;
    this.increment = 0.01;
    this.r = r;
    this.g = g;
    this.b = b;
    this.minRange = 0;
    this.maxRange = 0;
  }

  display() {
    fill(this.r, this.g, this.b);
    beginShape();
    noStroke();
    strokeWeight(1);
    //makes topline uneven
    for (let i = 0; i < width; i++) {
      let move = i * this.increment + this.y;
      let y = this.y + map(noise(move), 0, 1, 150, 200);
      vertex(i, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape();
  }
}

class Road {
  constructor(r, g, b, start_y, increment) {
    this.y = start_y;
    this.increment = 0.01;
    this.r = r;
    this.g = g;
    this.b = b;
    this.minRange = 0;
    this.maxRange = 0;
  }

  display() {
    fill(this.r, this.g, this.b);
    beginShape();
    //stroke(0);
    noStroke();
    strokeWeight(1);
    //makes topline uneven
    for (let i = 0; i < width; i++) {
      let move = i * this.increment + this.y;
      let y = this.y + map(noise(move), 0, 1, 100, 110);
      vertex(i, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape();
  }
}

class TreeLeaves {
  constructor(r, g, b, start_y, increment) {
    this.y = start_y;
    this.increment = 0.01;
    this.r = r;
    this.g = g;
    this.b = b;
    this.minRange = 0;
    this.maxRange = 0;
  }

  update(){
    this.y = map(sin(frameCount/20), -1, 1, -0.03, 0.03)
  }

  display() {
    fill(this.r, this.g, this.b);
    beginShape();

    noStroke();
    strokeWeight(1);

    vertex(0, 0);
    vertex(width, 0);
    vertex(0, 0);
    //makes topline uneven
    for (let i = 0; i < width; i++) {
      let move = i * this.increment + this.y;
      let y = this.y + map(noise(move), 0, 1, 100, 150);
      vertex(i, y);
    }
    vertex(width, 0);
    endShape();
  }
}

class LittleRedRidingHood {
  constructor(startX, startY, scaling) {
    this.x = startX;
    this.y = startY;
    this.xSpd = 1.2;
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
    stroke(80, 0, 0)
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

class Wolf {
  constructor(start_x, start_y, sizeScale, r, g, b) {
    this.x = start_x;
    this.y = start_y;
    this.scale = sizeScale;
    
    this.scale1 = 1;
    this.scale_width = 1.10;

    this.r = r;
    this.g = g;
    this.b = b;
  }
  
    update() {
    this.speed4 = map(cos(frameCount / 20), -1, 1, -0.5, 0.5);
    this.speed1 = sin(frameCount / 20);
    //this.y += this.speed4 / 4;

    this.scale_width += this.speed4 / 280;
  
  }
  

  display() {

    push();
    translate(this.x, this.y);
    scale(this.scale);
    stroke(0)
    fill(0)
    push()
   scale(this.scale1, this.scale_width);
    //angleMode(DEGREES)

    quad(-300, 6, -200, 6, -200, 45, -265, 45)

    rect(-220, -35, 100, 80)

    //Chest core
    quad(-120, -35, -50, -100, 80, -100, 120, -35)
    rect(-120, -35, 240, 80)
    pop()
    push()
    //Body hind
    triangle(120, -35, 120, 200, 270, 200)
    triangle(50, 45, 120, 200, 120, 45)
    //Hind leg
    rect(90, 45, 30, 155)
    rect(-10, 180, 130, 20, 20)
    //Front leg
    rect(-40, 45, 25, 155)
    rect(-70, 180, 40, 20, 20)
    //Tail
    rect(250, 180, 200, 20)
    triangle(450, 180, 450, 200, 500, 200)
    let y = 0
    let speed = map(sin(frameCount/20), -1, 1, -5, 5)
    y += speed
    ellipse(0, y, 200, 120)

    //Ears
    triangle(-170, -30, -125, -70, -145, -30)
    triangle(-170, -30, -160, -70, -195, -30)
    //Eye
    fill(this.r, this.g, this.b)
    triangle(-205, 5, -180, -20, -205, -5)
    pop()

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

function sequence(){

  background(0);

  textSize(26);
  textFont(myFont)

  if (bgm.currentTime() <= 1.2) {
    background(0);
  } else if (bgm.currentTime() >= 1.2 && bgm.currentTime() <= 5.8) {
    convoScene(255, 255, 255, 30);
    littleRedConvo.update();
    littleRedConvo.display();
    wolfConvo.update();
    wolfConvo.display();
    fill(255, 255, 255);
    text("Where are you going, dear child?", width / 2 + 100, height / 2 - 50);
  } else if (bgm.currentTime() >= 5.8 && bgm.currentTime() <= 10) {
    convoScene(255, 255, 255, 30);
    littleRedConvo.update();
    littleRedConvo.display();
    wolfConvo.update();
    wolfConvo.display();
    fill(255, 255, 255);
    text("I'm going to see my grandmother.", width / 2 - 120, height / 2 - 50);
  } else if (bgm.currentTime() >= 10 && bgm.currentTime() <= 14.6) {
    convoScene(255, 255, 255, 30);
    littleRedConvo.update();
    littleRedConvo.display();
    wolfConvo.update();
    wolfConvo.display();
    fill(255, 255, 255);
    text("Does she live far off?", width / 2 + 100, height / 2 - 50);
  } else if (bgm.currentTime() >= 14.6 && bgm.currentTime() <= 16.8) {
    convoScene(255, 255, 255, 30);
    littleRedConvo.update();
    littleRedConvo.display();
    wolfConvo.update();
    wolfConvo.display();
    fill(255, 255, 255);
    text("Oh not very!", width / 2 - 150, height / 2 - 50);
  } else if (bgm.currentTime() >= 16.8 && bgm.currentTime() <= 20.2) {
    convoScene(255, 255, 255, 30);
    littleRedConvo.update();
    littleRedConvo.display();
    wolfConvo.update();
    wolfConvo.display();
    fill(255, 255, 255);
    text(
      "Just on the other side of the wood.",
      width / 2 - 120,
      height / 2 - 50
    );
  } else if (bgm.currentTime() >= 20.2 && bgm.currentTime() <= 21.25) {
    convoScene(255, 255, 255, 30);
    littleRedConvo.update();
    littleRedConvo.display();
    wolfConvo.update();
    wolfConvo.display();
    
  } else if (bgm.currentTime() >= 21.25 && bgm.currentTime() <= 25.7) {
    convoScene(248, 0, 0, 90);
    littleRedConvo.update();
    littleRedConvo.display();
    wolf2Convo.update();
    wolf2Convo.display();
    fill(0, 0, 0);
    text("I'll go and see her too!", width / 2 + 100, height / 2 - 50);
  } else if (bgm.currentTime() >= 25.7 && bgm.currentTime() <= 30) {
    convoScene(248, 0, 0, 90);
    littleRedConvo.update();
    littleRedConvo.display();
    wolf2Convo.update();
    wolf2Convo.display();
    fill(0, 0, 0);
    text(
      "I'll go this way and you go that way.",
      width / 2 + 100,
      height / 2 - 50
    );
  } else if (bgm.currentTime() >= 30 && bgm.currentTime() <= 34.45) {
    convoScene(248, 0, 0, 90);
    littleRedConvo.update();
    littleRedConvo.display();
    wolf2Convo.update();
    wolf2Convo.display();
    fill(0, 0, 0);
    text(
      "And let's see who will get there first!",
      width / 2 + 100,
      height / 2 - 50
    );
  } else if (bgm.currentTime() >= 34.45 && bgm.currentTime() <= 36.6) {
    convoScene(248, 0, 0, 90);
    littleRedConvo.update();
    littleRedConvo.display();
    wolf2Convo.update();
    wolf2Convo.display();
    fill(255, 255, 255);
    text("Very well.", width / 2 - 150, height / 2 - 50);
  } else if (bgm.currentTime() >= 36.6 && bgm.currentTime() <= 39) {
    convoScene(248, 0, 0, 90);
    littleRedConvo.update();
    littleRedConvo.display();
    wolf2Convo.update();
    wolf2Convo.display();
    fill(255);
    //textSize(30);
    text("I will do as you say.", width / 2 - 130, height / 2 - 50);
  
  }else if (bgm.currentTime() >= 39 && bgm.currentTime() <= 40.1) {
    convoScene(248, 0, 0, 90);
    littleRedConvo.update();
    littleRedConvo.display();
    wolf2Convo.update();
    wolf2Convo.display();

  } else if (bgm.currentTime() >= 40.1 && bgm.currentTime() <= 41) {
    background(0);
  } else if (bgm.currentTime() >= 41 && bgm.currentTime() <= 43.3) {
    fill(255, 0, 0);
    textSize(50)
    text("And so they parted separate ways.", width / 2, height / 2);

  }else if (bgm.currentTime() >= 43.3 && bgm.currentTime() <= 47.7) {
    fill(255, 0, 0);
    textSize(50)
    text("The wolf ran as fast as he could.", width / 2, height / 2);  
    
  } else if (bgm.currentTime() >= 47.7 && bgm.currentTime() <= 52) {
    fill(255, 0, 0);
    textSize(50)
    text(
      "It was not long before he arrived",width / 2,height / 2 - 30 );
    text("at the old woman's house.",width / 2,height / 2 + 30);
  } else if (bgm.currentTime() >= 52 && bgm.currentTime() <= 56.5) {
    fill(255, 0, 0);
    textSize(50)
    text(
      "Where he instantly",width / 2,height / 2 - 30 );
    text("fell upon her and devoured her.",width / 2,height / 2 + 30);
  }
  
  
  else if (bgm.currentTime() >= 56.5 && bgm.currentTime() <= 59.75) {
    fill(255, 0, 0)
    textSize(50)
    text("Soon afterwards,", width / 2, height / 2 - 30);
    text("the unsuspecting Little Red Riding Hood...",width / 2,height / 2 + 30);
  } else if (bgm.currentTime() >= 59.75 && bgm.currentTime() <= 60.98) {
    //text("...arrived", width / 2, height / 2);
    background(0)
  }else if (bgm.currentTime() >= 60.98 && bgm.currentTime() <= 63.25) {
    fill(255, 0, 0)
    textSize(50)
    text("...arrived", width / 2, height / 2);
  } else if (bgm.currentTime() >= 63.25) {
    background(0)
    //fill(255)
    //textSize(50)
    //text("Go to next page", width / 2, height / 2);

    //logframes = frameCount;
  }
}