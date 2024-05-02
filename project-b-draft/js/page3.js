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

function preload(){
  
  myFont = loadFont("assets/font.ttf")
  rainFall = loadSound("assets/rain.mp3")
  bgm = loadSound("assets/bgmPage3.mp3");
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
  
  backGround = new WoodsGround(17, 17, 17, 170, 0.01);
  midGround1 = new WoodsGround(51, 51, 51, 230, 0.01);
  midGround2 = new WoodsGround(70, 70, 70, 270, 0.01);
  foreGround = new WoodsGround(105, 105, 105, 320, 0.01);

  road = new Road(200, 200, 200, 375, 0.01);

  treeLeaves = new TreeLeaves(51, 51, 51, 0, 0.01);
  
  littleRed = new LittleRedRidingHood(100, 455, 0.9);

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
  
  for (let k = 20; k < width; k += 110) {
    noStroke();
    fill(17, 17, 17);
    rect(k, 0, 20, height); //tree bg

    beginShape();
    curveVertex(k + 20, 40);
    curveVertex(k + 20, 40);
    curveVertex(k + 55, 10);
    curveVertex(k + 20, 50);
    curveVertex(k + 20, 50);
    endShape(); //branch

    beginShape();
    curveVertex(k + 20, 100);
    curveVertex(k + 20, 100);
    curveVertex(k + 55, 70);
    curveVertex(k + 20, 110);
    curveVertex(k + 20, 110);
    endShape(); //branch

    beginShape();
    curveVertex(k + 20, 180);
    curveVertex(k + 20, 180);
    curveVertex(k + 55, 150);
    curveVertex(k + 20, 190);
    curveVertex(k + 20, 190);
    endShape(); //branch

    beginShape();
    curveVertex(k + 20, 260);
    curveVertex(k + 20, 260);
    curveVertex(k + 55, 230);
    curveVertex(k + 20, 270);
    curveVertex(k + 20, 270);
    endShape(); //branch
  }
  backGround.display();

  for (let i = 70; i < width; i += 110) {
    noStroke();
    fill(51, 51, 51);
    rect(i, 0, 30, height); //tree1-bg
    beginShape();
    curveVertex(i, 250);
    curveVertex(i, 250);
    curveVertex(i - 50, 200);
    curveVertex(i, 270);
    curveVertex(i, 270);
    endShape(); //branch
    beginShape();
    curveVertex(i + 30, 200);
    curveVertex(i + 30, 200);
    curveVertex(i + 80, 150);
    curveVertex(i + 30, 215);
    curveVertex(i + 30, 215);
    endShape(); //branch
  }

  midGround1.display();
  midGround2.display();

  road.display();
  
  wolf.update();
  wolf.display();

  littleRed.update();
  littleRed.display();
  
   if (keyIsPressed == true) {
    if (keyCode === RIGHT_ARROW) {
      littleRed.left_leg = -littleRed.speed1 / 10;
      littleRed.right_leg = littleRed.speed1 / 10
      littleRed.x += littleRed.xSpd;
    } else{
      littleRed.left_leg = 0;
      littleRed.right_leg = 0;
      littleRed.x = littleRed.x;
    }
  }
  
    if (dist(littleRed.x, littleRed.y, wolf.x, wolf.y) < 200) {
  textStyle(BOLD);
  textFont('Courier New', 15);
    text("Press 'a' to talk", wolf.x - 45, wolf.y - 60);
  } 

  for (let j = -30; j < width; j += 360) {
    noStroke();
    fill(119, 119, 119);
    rect(j, 0, 90, height); //tree2-bg

    beginShape();
    curveVertex(j + 90, 200);
    curveVertex(j + 90, 200);
    curveVertex(j + 195, 100);
    curveVertex(j + 90, 230);
    curveVertex(j + 90, 230);
    endShape(); //branch
    beginShape();
    curveVertex(j, 230);
    curveVertex(j, 230);
    curveVertex(j - 150, 100);
    curveVertex(j, 265);
    curveVertex(j, 265);
    endShape(); //branch
  }
  
  foreGround.display();
  treeLeaves.display();
  
  

push()  
  if (instructions1Visible) {
    fill(242, 180);
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
      "Go talk to wolf.",
      width / 2,
      height / 2 - 35
    );

    textSize(15)
    text("Press right arrow key to move", width / 2, height / 2);
    fill(0);
    rect(width / 2, height / 2 + 35, 60, 30);
    fill(255);

    textSize(18);
    text("start", width / 2, height / 2 + 35);
  }
pop()  

  /*
  noStroke()
  fill(0, 0, 0, alpha)
  rect(0, 0, width, height)
  if(darken == true){
    alpha += 2
  } if(alpha >= 255){
    background(0);
  let img = myVid.get();
  image(img, 0, 0);
    isReady = true;
  }
  
  if(isReady){
    forestSound.pause();
    //myVid.noLoop();
    myVid.play();
  }*/  
  //let img = myVid.get();
  //image(img, 0, 0);

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
    let d1 = dist(mouseX, mouseY, width / 2 , height / 2 + 35);
  if (d1 < 20) {
    instructions1Visible = false;
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
}

function handleEnd(){
  isDone = true; console.log(isDone);
  logframes = frameCount;
  //playSound = true;
}

/*
function conversation(){
  background(150)
  littleRedConvo.update();
  littleRedConvo.display();
  wolfConvo.update();
  wolfConvo.display();
}*/

function convoScene(r, g, b, alph) {
  fill(r, g, b);
  //fill(255)
  noStroke();
  ellipse(width / 2, 450, 800, 100);

  fill(r, g, b, alph);

  triangle(200, 450, 1000, 450, width / 2, -300);
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