let x = 150;
let s = 1;
let xDark = 600;
let sceneFlip = false;

let myFont;
let birds;
let myHarp;
let myImage;

let rain = [];

let rainFall;
let thunder;
let playSound = false;
let footsteps;

let instructions1Visible = true;

let skipText = false;
let buttonPressed = false;
let goHome = false;

function preload(){
  birds = loadSound("assets/birds.mp3");
  rainFall = loadSound("assets/rain.mp3");
  myFont = loadFont("assets/font.ttf");
  myHarp = loadSound("assets/harp.mp3");
  myImage = loadImage("assets/bgPage2.jpg");
  //footsteps = loadSound("assets/footstepsDirt.mp3")
  //footsteps = loadSound("assets/footstepsDirt_1.mp3");
  footsteps = loadSound("assets/footstepsDirt_2.mp3");

}

function setup() {

  let myCanvas = createCanvas(1200, 600);
  myCanvas.parent("canvasContainer")
  
  //forestSound.play();
  
  //myVid = createVideo("assets/convoVid_3.mp4");
  //myVid.size(1200, 600);
  //myVid.volume(1);
  //myVid.noLoop();
  //myVid.hide();
  
  //myVid.onended(handleEnd);

  rainFall.setVolume(0.5);
  //thunder.play();

  //Light background

  foregroundTrees = new Trees1(81, 127, 0, -30, width, 360, 90, height);
  midgroundTrees = new Trees2(111, 163, 0, 70, width, 110, 30, height);
  backgroundTrees = new Trees3(139, 204, 0, 20, width, 110, 20, height);

  backGround = new WoodsGround(139, 204, 0, 170, 0.01);
  midGround1 = new WoodsGround(111, 163, 0, 230, 0.01);
  midGround2 = new WoodsGround(77, 134, 0, 270, 0.01);
  foreGround = new WoodsGround(81, 147, 0, 320, 0.01);

  road = new Road(255, 245, 204, 375, 0.01);

  treeLeaves = new TreeLeaves(42, 84, 0, 0, 0.01);

  //Dark background

  foregroundTreesDark = new Trees1(17, 17, 17, -30, width, 360, 90, height);
  midgroundTreesDark = new Trees2(85, 85, 85, 70, width, 110, 30, height);
  backgroundTreesDark = new Trees3(119, 119, 119, 20, width, 110, 20, height);

  backGroundDark = new WoodsGround(119, 119, 119, 170, 0.01);
  midGround1Dark = new WoodsGround(85, 85, 85, 230, 0.01);
  midGround2Dark = new WoodsGround(51, 51, 51, 270, 0.01);
  foreGroundDark = new WoodsGround(17, 17, 17, 320, 0.01);

  roadDark = new Road(200, 200, 200, 375, 0.01);

  treeLeavesDark = new TreeLeaves(17, 17, 17, 0, 0.01);

  //Little Red Riding Hood

  littleRedRight = new LittleRedRidingHoodRight(0,0,1,168,0,0,255, 245, 204, 255, 124,63,0);

  littleRedRightDark = new LittleRedRidingHoodRight(0,0,1,80,0,0,255,255,255, 168, 0, 0, 0);
  
    textAlign(CENTER, CENTER);
  textSize(36);
  fill(255, 255, 255);
  textFont(myFont);
  

}

function draw() {

  if(sceneFlip === false){
    
    if(!myHarp.isPlaying()){
       myHarp.play();
       //myHarp.noLoop();
    }
  }else{
    myHarp.pause();
  }

  background(226,185,121);
  image(myImage, 0, 0, 1200, 600)

  //if((myHarp.currentTime() <= 12) && skipText == false){
  if((myHarp.currentTime() <= 12) && skipText == false){
  textSize(36)
  fill("brown")
  text("Once upon a time, there lived in a certain village a little country girl.", width/2, height/2 - 60)
  text("Her mother was excessively fond of her; and her grandmother doted on her still more.", width/2, height/2)
  text("This good woman had a red riding hood made for her. It suited the", width/2, height/2 + 60)
  text("girl so well that everybody called her Little Red Riding Hood.", width/2, height/2 + 120)
  textSize(26)
  text("Press 's' to skip", width/2, 500)
  }
  //else if((myHarp.currentTime() > 12 && myHarp.currentTime() <= 24) && skipText == false){
  else if((myHarp.currentTime() > 12 && myHarp.currentTime() <= 24) && skipText == false){
    textSize(36)
    text("One day her mother, having made some cakes, said to her:", width/2, height/2 - 120)
  text("Go, my dear, and see how your grandmother is doing, for", width/2, height/2 - 60)
  text("I hear she has been very ill. Take her a cake, and this little pot of butter.", width/2, height/2)
  text("Little Red Riding Hood thus set out to go visit her grandmother,", width/2, height/2 + 60)
    text("who lived on the other side of the wood...", width/2, height/2 + 120)
    textSize(26)
    text("Press 's' to skip", width/2, 500)
    
  //} else if(myHarp.currentTime() >= 24 || skipText == true){
  } else if(myHarp.currentTime() >= 24 || skipText == true){
  lightBackground();
  
  if(sceneFlip === false){
    
    if(!birds.isPlaying()){
       birds.play();
    }
  }else{
    birds.pause();
  }
  

  push();
  translate(x, 465);
  scale(s, 1);
  littleRedRight.update();
  littleRedRight.display();
  pop();

  if (keyIsPressed == true && instructions1Visible == false) {
    if (keyCode === RIGHT_ARROW) {
      s = 1;
      littleRedRight.left_leg = -littleRedRight.speed1 / 10;
      littleRedRight.right_leg = littleRedRight.speed1 / 10;
      x += littleRedRight.xSpd;
      if(!footsteps.isPlaying()){
        footsteps.play();
        //footsteps.loop();
      }
      }

      /*s = 1;
      littleRedRight.left_leg = -littleRedRight.speed1 / 10;
      littleRedRight.right_leg = littleRedRight.speed1 / 10;
      x += littleRedRight.xSpd;*/
    else if (keyCode === LEFT_ARROW) {
      s = -1;
      littleRedRight.left_leg = -littleRedRight.speed1 / 10;
      littleRedRight.right_leg = littleRedRight.speed1 / 10;
      x -= littleRedRight.xSpd;

      if(!footsteps.isPlaying()){
        footsteps.play();
        //footsteps.loop();
      }
    }else{
      footsteps.pause();
    }
    
  }

  lightForeground();
  
  
  push()  
  if (instructions1Visible) {
    fill(242, 200);
    stroke(242, 180);
    rectMode(CENTER)
    rect(width / 2, height / 2, 400, 150, 10);
    fill("darkgreen");
    noStroke()
    variable = map(sin(frameCount/50), -1, 1, 24, 26);
    textAlign(CENTER, CENTER)
    textSize(25);
    textFont("Ariel")
    text(
      "Go to grandmother's house.",
      width / 2,
      height / 2 - 35
    );

    textSize(15)
    text("Press arrow keys to move", width / 2, height / 2);
    fill("green");
    rect(width / 2, height / 2 + 35, 60, 30);
    fill(255);

    textSize(18);
    text("start", width / 2, height / 2 + 35);
  }
pop()
  
  
  
push()
  if (x >= width/2 - 10 && instructions1Visible == false && buttonPressed == false) {

    fill(242, 200);
    stroke(242, 180);
    rectMode(CENTER)
    rect(width / 2, height / 2, 400, 150, 10);
    fill("darkgreen");
    noStroke()
    variable = map(sin(frameCount/50), -1, 1, 24, 26);
    textAlign(CENTER, CENTER)
    textSize(22);
    textFont("Ariel")
    text(
      "Uh oh! The weather is growing bad.",
      width / 2,
      height / 2 - 35
    );
    text("Do you want to continue or go home?", width/2, height/2)

    textSize(15)
    //text("Press arrow keys to move", width / 2, height / 2);
    fill("green");
    rect(width / 2 - 60, height / 2 + 40, 60, 30);
    fill(255);

    textSize(14);
    text("Continue", width / 2 - 60, height / 2 + 40);

    fill("green");
    rect(width / 2 + 60, height / 2 + 40, 60, 30);
    fill(255);

    textSize(14);
    text("Go home", width / 2 + 60, height / 2 + 40);
  

    //sceneFlip = true;
    //playSound = true;
  }
  pop()  
push()
  if(buttonPressed && goHome){
    if(x <= 100){
      fill(242);
    stroke(242, 180);
    rectMode(CENTER)
    rect(width / 2, height / 2, width, height, 10);
    fill("red");
    noStroke()
    variable = map(sin(frameCount/50), -1, 1, 24, 26);
    textAlign(CENTER, CENTER)
    textSize(40);
    textStyle(BOLD);
    textFont("Ariel")
    text(
      "Oh no!", width / 2, height / 2 - 60);

      text("You've been scolded by mother for coming home.", width/2, height/2)

    textSize(36)
    text("Press 'r' to return to forest.", width / 2, height / 2 + 60);
    //fill("green");
    //rect(width / 2, height / 2 + 35, 60, 30);
    //fill(255);

    //textSize(18);
    //text("start", width / 2, height / 2 + 35);
  }
    }

    pop()
  }


  if(sceneFlip){  
  
      background(150, 150, 150);
  
  let p = new Raindrop(random(width), 100);
  fill(255)
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
    darkBackground();
    push();
    xDark = x;
    translate(xDark, 465);
    scale(s, 1);
    littleRedRightDark.update();
    littleRedRightDark.display();
    pop();

    if (keyIsPressed == true) {
      if (keyCode === RIGHT_ARROW) {
        s = 1;
        littleRedRightDark.left_leg = -littleRedRightDark.speed1 / 10;
        littleRedRightDark.right_leg = littleRedRightDark.speed1 / 10;
        xDark += littleRedRightDark.xSpd;
      } else if (keyCode === LEFT_ARROW) {
        s = -1;
        littleRedRightDark.left_leg = -littleRedRightDark.speed1 / 10;
        littleRedRightDark.right_leg = littleRedRightDark.speed1 / 10;
        xDark -= littleRedRightDark.xSpd;
      }
    }

    darkForeground();
  }
  
    if(playSound){

    if(!rainFall.isPlaying()){
      rainFall.play();
    }
  }else{
    rainFall.pause();
  }

//How to make thunder play only once upon scene flip?
  /*if(playSound){

    if(!thunder.isPlaying()){
      thunder.play();
    }
  }else{
    thunder.pause();
  }*/
  
  if(xDark >= width){
    background(0)
    fill(255)
    textSize(36)
    text("Go to next chapter", width/2, height/2)
  }
}

function keyPressed() {
  if (key == "s") {
    skipText = true; console.log(skipText)
  }

  if (key == "r"){
    buttonPressed = true;
    sceneFlip = true;
    playSound = true;
  }
}

function mousePressed(){
    let d1 = dist(mouseX, mouseY, width / 2 , height / 2 + 35);
  if (d1 < 10) {
    instructions1Visible = false;
  }

  let d2 = dist(mouseX, mouseY, width / 2 - 60, height / 2 + 40);
  if(d2 < 10){
    buttonPressed = true;
    sceneFlip = true;
    playSound = true;
  }

  let d3 = dist(mouseX, mouseY, width / 2 + 60, height / 2 + 40);
  if(d3 < 10){
    buttonPressed = true;
    goHome = true;
  }
}

function darkBackground() {

  backgroundTreesDark.update();
  backgroundTreesDark.display();
  backGroundDark.display();

  midgroundTreesDark.update();
  midgroundTreesDark.display();
  midGround1Dark.display();
  midGround2Dark.display();

  roadDark.display();
}

function darkForeground() {
  foregroundTreesDark.update();
  foregroundTreesDark.display();
  foreGroundDark.display();
  treeLeavesDark.update();
  treeLeavesDark.display();
}

function lightBackground() {
  background(197, 229, 127);

  backgroundTrees.update();
  backgroundTrees.display();
  //backGround.update();
  backGround.display();

  midgroundTrees.update();
  midgroundTrees.display();
  //midGround1.update();
  midGround1.display();
 // midGround2.update();
  midGround2.display();

  //road.update();
  road.display();
}

function lightForeground() {
  foregroundTrees.update();
  foregroundTrees.display();
  //foreGround.update();
  foreGround.display();
  treeLeaves.update();
  treeLeaves.display();
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

  update(){
    push()
    this.y += map(cos(frameCount/50), -1, 1, -0.002, 0.002)
    //this.endPos += map(sin(frameCount/20), -1, 1, -0.04, 0.04)
    pop()
  }

  display() {
    fill(this.r, this.g, this.b);
    beginShape();
    noStroke();
    strokeWeight(1);
    //makes ground topline uneven
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
    noStroke();
    strokeWeight(1);
    //makes road topline uneven
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
    //this.move = 1
  }

  update(){
    this.y = map(sin(frameCount/20), -1, 1, -0.03, 0.03)
  }

  display() {
    fill(this.r, this.g, this.b);
    beginShape();
    //stroke(0);
    noStroke();
    strokeWeight(1);

    vertex(0, 0);
    vertex(width, 0);
    vertex(0, 0);
    //makes leaves outline uneven
    for (let i = 0; i < width; i++) {
      let move = i * this.increment + this.y;
      let y = this.y + map(noise(move), 0, 1, 100, 150);
      vertex(i, y);
    }
    vertex(width, 0);
    endShape();
  }
}

class LittleRedRidingHoodRight {
  constructor(startX, startY, scaling, r, g, b, rHead, gHead, bHead, red, rHair, gHair, bHair) {
    this.x = startX;
    this.y = startY;
    this.xSpd = 1.2;
    this.left_leg = 0;
    this.right_leg = 0;
    this.r = r;
    this.g = g;
    this.b = g;

    this.rHead = rHead;
    this.gHead = gHead;
    this.bHead = bHead;

    this.red = red;

    this.rHair = rHair;
    this.gHair = gHair;
    this.bHair = bHair;

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
    fill(this.rHead, this.gHead, this.bHead);
    ellipse(0, -48, 30);
    fill(this.rHair, this.gHair, this.bHair);
    stroke(this.rHair, this.gHair, this.bHair);
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
    fill(this.red, 0, 0);
    stroke(this.r, this.g, this.b);
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

    fill(this.red, 0, 0);
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

    this.r = 255;
    this.g = 255;
    this.b = 255;
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

