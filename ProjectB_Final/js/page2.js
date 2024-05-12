//Variables for Wolf eyelid
let x = 0;
let y1 = 0;
let y2 = 0;
let speedx = -0.2;
let speedy1 = -0.2;
let speedy2 = 0.2;

//Variables for Little Red Riding Hood
let xPos = 10;
let s = 1;

//Particle systems
let rain = [];
let particles = [];

//Boolean variables
let instructions1Visible = true;
let skipText = false;
let triggerWarning = false;

//Assets variables
let footsteps;
let mySound;
let myBgMusic;
let myFont;
let bgm; //Sequence bgm

//Global variables to control rain bgm
let curveVol;
let ifQuiet = false;

//Boolean to trigger sequence
let playSequence = false;
//Sequence global variable
let appearWolf = false;

//Go to next chapter boolean
let nextChapter = false;
let logframes = 0;

function preload() {
  mySound = loadSound("assets/rain.mp3");
  myBgMusic = loadSound("assets/bgSpookyMusic.mp3")
  myFont = loadFont("assets/font.ttf");
  bgm = loadSound("assets/bgmPage2.mp3")
  footsteps = loadSound("assets/footstepsDirt_2.mp3");
}

function setup() {
  let myCanvas = createCanvas(1200, 600);
  myCanvas.parent("canvasContainer")
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255, 255, 255);
  textFont(myFont);
  myBgMusic.play();
  myBgMusic.setVolume(0.8);

  mySound.play();
  mySound.setVolume(0.2);

  curveVol = 0;


  //Beginning sketch

  treeLeavesBot = new TreeLeavesBot(17, 17, 17, 80, 0.01);

  treeLeavesTop = new TreeLeavesTop(5, 0.01);

  backgroundTrees = new TreesBeginning(17, 17, 17, 20, width, 110, 20, height);

  foreGround = new WoodsGround(17, 17, 17, 380, 0.01);

  littleRed = new LittleRedRidingHood(0, 0, 0.55);

  //Sequence sketch

  lightning = new Lightning();

  //Dark themed

  foregroundTreesDark = new Trees1(119, 119, 119, -100, width / 2 - 150, 220, 90, height);
  midgroundTreesDark = new Trees2(51, 51, 51, 80, width / 2 - 50, 80, 30, height);
  backgroundTreesDark = new Trees3(17, 17, 17, 20, width, 130, 20, height);

  foregroundTrees2Dark = new Trees1(119, 119, 119, width / 2 + 200, width, 220, 90, height);
  midgroundTrees2Dark = new Trees2(51, 51, 51, width / 2 + 150, width, 80, 30, height);
  backgroundTrees2Dark = new Trees3(17, 17, 17, width / 2 + 150, width, 110, 20, height);

  backGroundDark = new WoodsGround(17, 17, 17, 190, 0.01);
  midGround1Dark = new WoodsGround(51, 51, 51, 230, 0.01);
  midGround2Dark = new WoodsGround(85, 85, 85, 270, 0.01);
  foreGroundDark = new WoodsGround(119, 119, 119, 320, 0.01);

  treeLeavesDark = new TreeLeaves(17, 17, 17, 0, 0.01);

  //Red themed

  foregroundTreesRed = new Trees1(0, 0, 0, -100, width / 2 - 150, 220, 90, height);
  midgroundTreesRed = new Trees2(64, 0, 0, 80, width / 2 - 50, 80, 30, height);
  backgroundTreesRed = new Trees3(128, 0, 0, 20, width, 130, 20, height);


  foregroundTrees2Red = new Trees1(0, 0, 0, width / 2 + 200, width, 220, 90, height);
  midgroundTrees2Red = new Trees2(64, 0, 0, width / 2 + 150, width, 80, 30, height);
  backgroundTrees2Red = new Trees3(128, 0, 0, width / 2 + 150, width, 50, 20, height);

  backGroundRed = new WoodsGround(128, 0, 0, 190, 0.01);
  midGround1Red = new WoodsGround(64, 0, 0, 230, 0.01);
  midGround2Red = new WoodsGround(20, 0, 0, 270, 0.01);
  foreGroundRed = new WoodsGround(10, 0, 0, 320, 0.01);

  treeLeavesRed = new TreeLeaves(0, 0, 0, 0, 0.01);


  //Wolf

  wolf = new Wolf(width / 2 + 20, height / 2, 0.2);


}

function draw() {
  background(55);

  if ((myBgMusic.currentTime() <= 4.5) && skipText == false) {
    push()
    background(0)
    textSize(36)

    fill(255)
    textAlign(CENTER, CENTER)
    text("As Little Red Riding Hood trudged onward", width / 2, height / 2 - 30);
    text("through the woods...", width / 2, height / 2 + 30);
    textSize(26)
    text("Press 's' to skip", width / 2, 500)
    pop()
  }
 
  else if ((myBgMusic.currentTime() >= 4.5 && myBgMusic.currentTime() <= 9) && skipText == false) {
    push()
    background(0)
    textAlign(CENTER, CENTER)
    textSize(36)
    r = map(myBgMusic.currentTime(), 5, 8.5, 255, 108);
    g = map(myBgMusic.currentTime(), 5, 8.5, 255, 0);
    b = map(myBgMusic.currentTime(), 5, 8.5, 255, 0);
    fill(r, g, b);
    text("...little did she know that a ravenous", width / 2, height / 2 - 30);
    text("predator had caught wind of her scent...", width / 2, height / 2 + 30);
    textSize(26)
    text("Press 's' to skip", width / 2, 500)
    pop()




  } else if ((myBgMusic.currentTime() >= 9 && playSequence == false) || (skipText == true && playSequence == false)) {

    let p = new Raindrop(random(width), 400);
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

    push();
    brush(25, 25, 25, width, 20);
    brush(25, 25, 25, 1000, 20);
    brush(25, 25, 25, 900, 20);
    brush(25, 25, 25, 800, 20);
    brush(25, 25, 25, 700, 20);
    brush(25, 25, 25, 600, 20);
    brush(25, 25, 25, 450, 20);
    brush(25, 25, 25, 400, 20);
    pop();

    push();
    treeLeavesBot.update();
    treeLeavesBot.display();

    treeLeavesTop.display();


    brush(17, 17, 17, 0, 50);
    brush(17, 17, 17, 100, 70);
    brush(17, 17, 17, 300, 150);

    for (let i = 0; i < 5; i++) {
      let p = new Particle(xPos + random(-500, 0), 550 - 10);
      particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 1);
      }
    }


    push();
    translate(xPos, 550);
    scale(s, 1);
    littleRed.update();
    littleRed.display();
    pop();

    push()
    if (keyIsPressed == true && instructions1Visible == false && xPos >= 0) {
      if (keyCode === RIGHT_ARROW) {
        triggerWarning = false;
        s = 1;
        littleRed.left_leg = -littleRed.speed1 / 10;
        littleRed.right_leg = littleRed.speed1 / 10;
        xPos += littleRed.xSpd;
        if (!footsteps.isPlaying()) {
          footsteps.play();
        }
      } else if (keyCode === LEFT_ARROW) {


        triggerWarning = true;

      } else {
        footsteps.pause();
      }
    }
    pop()


    backgroundTrees.update();
    backgroundTrees.display();

    foreGround.update();
    foreGround.display();
    pop();

    push()
    if (instructions1Visible) {
      fill(242, 150);
      stroke(242, 150);
      rectMode(CENTER)
      rect(width / 2, height / 2 - 5, 400, 150, 10);
      fill(0);
      noStroke()
      variable = map(sin(frameCount / 50), -1, 1, 24, 26);
      textAlign(CENTER, CENTER)
      textSize(22);
      textStyle(BOLD)
      textFont("Ariel")
      text(
        "Keep heading to grandmother's house.",
        width / 2,
        height / 2 - 35
      );
      textStyle(NORMAL)
      textSize(15)
      text("Press right arrow key to move", width / 2, height / 2);
      fill(0);
      rect(width / 2, height / 2 + 35, 60, 30);
      fill(255);

      textSize(18);
      fill(255)
      text("start", width / 2, height / 2 + 35);
    }
    pop()

    push()
    if (triggerWarning) {
      fill(0);

      rectMode(CENTER)
      rect(width / 2, height / 2 - 5, 400, 150, 10);
      fill("red");
      noStroke()
      variable = map(sin(frameCount / 50), -1, 1, 24, 26);
      textAlign(CENTER, CENTER)
      textSize(22);
      textStyle(BOLD)
      textFont("Ariel")
      text(
        "Warning!",
        width / 2,
        height / 2 - 35
      );
      textStyle(NORMAL)
      text("You cannot go back now.", width / 2, height / 2);
      textSize(15)
      fill("red");
      text("Press right arrow key to continue", width / 2, height / 2 + 35);

    }
    pop()

    noStroke();
    push();

    //Wolf Eye
    push();
    let xc1 = constrain(xPos - 10, 157, 243);
    let xs1 = constrain(550 - 5, 130, 170);

    let xc2 = constrain(xPos - 15, 135, 225);
    let xs2 = constrain(550 - 15, 120, 160);

    noStroke();
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = color(108, 0, 0);
    fill(108, 0, 0);
    ellipse(200, 150, 200, 100);

    noStroke();
    fill(0);
    ellipse(xc1, xs1, 50, 50);

    fill(255);
    ellipse(xc2, xs2, 20, 10);
    pop();

    fill(17);

    //Rectangle eyelids
    if ((frameCount >= logframes && frameCount < logframes + 280) || (myBgMusic.currentTime() >= 9 && myBgMusic.currentTime() < 18)) {
      y1 = y1 + speedy1;
      y2 = y2 + speedy2;
    } else {
      speedy1 = 0;
      speedy2 = 0;
    }
    rect(x, 50 + y1, 320, 100);
    rect(x, 150 + y2, 320, 100);

  }

  if (xPos >= width / 2) {
    playSequence = true;
  }

  if (playSequence) {
    background(0);
    myBgMusic.pause();
    mySound.pause();

    if (!bgm.isPlaying()) {
      bgm.play();
      playSequence = false;
      xPos = -100; //Moving Little Red Riding Hood off canvas
    }

  }
  if (bgm.isPlaying()) {
    push()
    sequence();
    xPos = -100; //Moving Little Red Riding Hood off canvas
    pop();
  }

  if (nextChapter) {
    background(0);
    fill(255)
    textAlign(CENTER, CENTER)
    textSize(46)
    let r = map(frameCount, logframes, logframes + 100, 0, 255)
    fill(r);
    text("Go to next chapter", width / 2, height / 2)
  }

}

function keyPressed() {
  if (key == "s") {
    skipText = true; console.log(skipText)
    logframes = frameCount;
  }
}

function mousePressed() {
  let d1 = dist(mouseX, mouseY, width / 2, height / 2 + 35);
  if (d1 < 20) {
    instructions1Visible = false;
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

  update() {
    push()
    this.y += map(cos(frameCount / 50), -1, 1, -0.002, 0.002)
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


class TreesBeginning {
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

  update() {
    push()
    this.startPos += map(cos(frameCount / 20), -1, 1, -0.04, 0.04)
    this.endPos += map(cos(frameCount / 20), -1, 1, -0.04, 0.04)
    pop()
  }

  display() {
    for (let k = this.startPos; k < this.endPos; k += this.increment) {
      noStroke();
      fill(this.r, this.g, this.b);
      rect(k, 0, this.treeWidth, this.treeHeight); //tree bg

      beginShape();
      curveVertex(k, 20);
      curveVertex(k, 20);
      curveVertex(k - 65, -20);
      curveVertex(k, 30);
      curveVertex(k, 30);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth, 40);
      curveVertex(k + this.treeWidth, 40);
      curveVertex(k + 65, 0);
      curveVertex(k + this.treeWidth, 50);
      curveVertex(k + this.treeWidth, 50);
      endShape(); //branch

      beginShape();
      curveVertex(k, 80);
      curveVertex(k, 80);
      curveVertex(k - 65, 40);
      curveVertex(k, 90);
      curveVertex(k, 90);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth, 100);
      curveVertex(k + this.treeWidth, 100);
      curveVertex(k + 65, 60);
      curveVertex(k + this.treeWidth, 110);
      curveVertex(k + this.treeWidth, 110);
      endShape(); //branch

      beginShape();
      curveVertex(k, 350);
      curveVertex(k, 350);
      curveVertex(k - 55, 310);
      curveVertex(k, 360);
      curveVertex(k, 360);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth, 380);
      curveVertex(k + this.treeWidth, 380);
      curveVertex(k + 65, 340);
      curveVertex(k + this.treeWidth, 390);
      curveVertex(k + this.treeWidth, 390);
      endShape(); //branch

      beginShape();
      curveVertex(k, 460);
      curveVertex(k, 460);
      curveVertex(k - 65, 400);
      curveVertex(k, 470);
      curveVertex(k, 470);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth, 460);
      curveVertex(k + this.treeWidth, 460);
      curveVertex(k + 65, 400);
      curveVertex(k + this.treeWidth, 470);
      curveVertex(k + this.treeWidth, 470);
      endShape(); //branch
    }
  }
}


class TreeLeavesBot {
  constructor(r, g, b, start_y, increment) {
    this.y = start_y;
    this.increment = 0.01;
    this.r = r;
    this.g = g;
    this.b = b;
    this.minRange = 0;
    this.maxRange = 0;
  }

  update() {
    this.y += map(sin(frameCount / 50), -1, 1, -0.001, 0.001)
  }

  display() {
    fill(this.r, this.g, this.b);
    beginShape();
    //stroke(0);
    noStroke();
    strokeWeight(1);

    vertex(0, 250);
    vertex(width, 250);

    vertex(0, 250);
    //makes leaves outline uneven
    for (let i = 0; i < width; i++) {
      let move = i * this.increment + this.y;
      let y = this.y + map(noise(move), 0, 1, 300, 380);
      vertex(i, y);
    }
    vertex(width, 250);
    endShape();
  }
}

class TreeLeavesTop {
  constructor(start_y, increment) {
    this.y = start_y;
    this.increment = 0.01;
  }

  display() {
    fill(17, 17, 17);
    beginShape();
    //makes topline uneven
    for (let i = 0; i < width; i++) {
      let move = i * this.increment + this.y;
      let y = this.y + map(noise(move), 0, 1, 80, 120);
      vertex(i, y);
    }
    vertex(width, 300);
    vertex(0, 300);
    endShape();
  }
}

function brush(r, g, b, x, y) {
  let zoff = 0;
  push();
  translate(x, y);
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.02) {
    let xoff = map(cos(a), -1, 1, 0, 2);
    let yoff = map(sin(a), -1, 1, 0, 2);
    const r1 = map(noise(xoff, yoff, zoff), 0, 1, 100, 250);

    let x1 = r1 * cos(a);
    let y1 = r1 * sin(a);
    noStroke();
    fill(r, g, b);
    vertex(x1, y1);
  }
  endShape(CLOSE);

  pop();
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

class Particle {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0.5 + random(-0.1, 0.2);
    this.vy = random(-0.7, 1);
    this.alpha = 200;
    this.size = 2;
    this.r = map(dist(mouseX, mouseY, this.x, this.y), 0, width / 2, 0, 255)
    this.g = map(dist(mouseX, mouseY, this.x, this.y), 0, width / 2, 0, 255)
    this.b = map(dist(mouseX, mouseY, this.x, this.y), 0, width / 2, 0, 255)
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
    this.size -= 0.01;

  }

  show() {
    noStroke();
    //stroke(255);
    fill(168, 0, 0, this.alpha);
    ellipse(this.x, this.y, this.size);

  }

}

//Sequence sketch

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

  display() {
    for (let j = this.startPos; j < this.endPos; j += this.increment) {
      noStroke();
      fill(this.r, this.g, this.b);
      rect(j, 0, this.treeWidth, this.treeHeight); //tree2-bg

      beginShape();
      curveVertex(j + this.treeWidth, 200);
      curveVertex(j + this.treeWidth, 200);
      curveVertex(j + 195, 100);
      curveVertex(j + this.treeWidth, 230);
      curveVertex(j + this.treeWidth, 230);
      endShape(); //branch
      beginShape();
      curveVertex(j, 230);
      curveVertex(j, 230);
      curveVertex(j - 150, 100);
      curveVertex(j, 265);
      curveVertex(j, 265);
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

  display() {
    for (let j = this.startPos; j < this.endPos; j += this.increment) {
      noStroke();
      fill(this.r, this.g, this.b);
      rect(j, 0, this.treeWidth, this.treeHeight); //tree2-bg

      beginShape();
      curveVertex(j, 250);
      curveVertex(j, 250);
      curveVertex(j - 50, 200);
      curveVertex(j, 270);
      curveVertex(j, 270);
      endShape(); //branch
      beginShape();
      curveVertex(j + this.treeWidth, 200);
      curveVertex(j + this.treeWidth, 200);
      curveVertex(j + 80, 150);
      curveVertex(j + this.treeWidth, 215);
      curveVertex(j + this.treeWidth, 215);
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

  display() {
    for (let k = this.startPos; k < this.endPos; k += this.increment) {
      noStroke();
      fill(this.r, this.g, this.b);
      rect(k, 0, this.treeWidth, this.treeHeight); //tree bg

      beginShape();
      curveVertex(k, 250);
      curveVertex(k, 250);
      curveVertex(k - 35, 220);
      curveVertex(k, 260);
      curveVertex(k, 260);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth, 40);
      curveVertex(k + this.treeWidth, 40);
      curveVertex(k + 55, 10);
      curveVertex(k + this.treeWidth, 50);
      curveVertex(k + this.treeWidth, 50);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth, 100);
      curveVertex(k + this.treeWidth, 100);
      curveVertex(k + 55, 70);
      curveVertex(k + this.treeWidth, 110);
      curveVertex(k + this.treeWidth, 110);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth, 180);
      curveVertex(k + this.treeWidth, 180);
      curveVertex(k + 55, 150);
      curveVertex(k + this.treeWidth, 190);
      curveVertex(k + this.treeWidth, 190);
      endShape(); //branch

      beginShape();
      curveVertex(k + this.treeWidth, 260);
      curveVertex(k + this.treeWidth, 260);
      curveVertex(k + 55, 230);
      curveVertex(k + this.treeWidth, 270);
      curveVertex(k + this.treeWidth, 270);
      endShape(); //branch
    }
  }
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

    //translate(200, 100)
    //stroke("red")
    noStroke()
    fill("black")
    quad(-45, -100, 45, -100, 110, 150, -110, 150)
    quad(110, 150, -110, 150, -50, 380, 50, 380)
    rect(-80, 350, 50, 30)
    rect(30, 350, 50, 30)


    //stroke("red")
    push();
    //scale(0.5)
    fill("black");
    //Ears
    triangle(-70, -160, -70, -250, -25, -200);
    triangle(70, -160, 70, -250, 25, -200);
    //noStroke()
    //Head
    quad(-100, -140, -25, -200, 25, -200, 100, -140);
    quad(-100, -140, -55, -100, 55, -100, 100, -140);
    //Snout
    //triangle(-10, -50, 0, -70, 10, -50);
    quad(-35, -100, 35, -100, 10, -50, -10, -50)

    push()
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = color("red");
    fill("red");
    noStroke();
    //Eyes
    triangle(-20, -150, -20, -125, -40, -155);
    triangle(20, -150, 20, -125, 40, -155);
    //Nose
    //stroke("red")
    triangle(-10, -40, 10, -40, 0, -30);
    rect(-10, -50, 20, 10)
    //rect(-10, 80, 10, 20)
    pop()

    pop();

    pop();
  }
}

class Lightning {
  constructor() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 50;
    this.y2 = 50;
    this.color = 255;
  }

  display() {
    //makes a jagged generative line
    for (var i = 0; i < 20; i++) {
      this.x1 = this.x2;
      this.y1 = this.y2;
      this.x2 = this.x2 + random(-10, 20);
      this.y2 = this.y2 + random(-10, 20);
      strokeWeight(random(1, 5));
      stroke(this.color);
      line(this.x1, this.y1, this.x2, this.y2);
    }
  }

  update() {
    //returns line to original position once outside the canvas bounds or past the y-axis checkpoint
    if (
      (this.x2 > width) |
      (this.x2 < 0) |
      (this.y2 > random(150, 300)) |
      (this.y2 < 0)
    ) {
      this.x2 = random(0, width);
      this.y2 = 0;
    }


  }
}

function darkBackground() {
  background(0)
  backgroundTreesDark.display();

  brush(17, 17, 17, 0, 440);
  brush(17, 17, 17, 0, 420);
  brush(17, 17, 17, 160, 460);
  //brush(17, 17, 17, width, 440);
  //brush(17, 17, 17, width, 420);
  brush(17, 17, 17, 900, 460);


  backGroundDark.display();

  midgroundTreesDark.display();
  midgroundTrees2Dark.display();
  midGround1Dark.display();


  brush(85, 85, 85, 0, 440);
  brush(85, 85, 85, 160, 460);
  brush(85, 85, 85, 260, 460)
  brush(85, 85, 85, 330, 460)

  brush(85, 85, 85, width, 440);
  brush(85, 85, 85, 890, 460);
  brush(85, 85, 85, 1000, 460)


  midGround2Dark.display();

  foregroundTreesDark.display();
  foregroundTrees2Dark.display();
  foreGroundDark.display();

  brush(105, 105, 105, 0, 450);
  brush(105, 105, 105, 150, 500);
  brush(105, 105, 105, 200, 500)
  brush(105, 105, 105, 300, 500)

  brush(105, 105, 105, width, 450);
  brush(105, 105, 105, 900, 500);
  brush(105, 105, 105, 1000, 500)
  treeLeavesDark.display();
}

function redBackground() {


  backgroundTreesRed.display();


  brush(64, 0, 0, 0, 440);
  brush(64, 0, 0, 0, 420);
  brush(64, 0, 0, 160, 460);
  brush(64, 0, 0, width, 440);
  brush(64, 0, 0, width, 440);
  brush(64, 0, 0, 900, 460);


  backGroundRed.display();

  midgroundTreesRed.display();
  midgroundTrees2Red.display();
  midGround1Red.display();

  brush(20, 0, 0, 0, 440);
  brush(20, 0, 0, 160, 460);
  brush(20, 0, 0, 260, 460)
  brush(20, 0, 0, 330, 460)

  brush(20, 0, 0, width, 440);
  brush(20, 0, 0, 890, 460);
  brush(20, 0, 0, 1000, 460)


  midGround2Red.display();

  foregroundTreesRed.display();
  foregroundTrees2Red.display();
  foreGroundRed.display();

  brush(0, 0, 0, 0, 450);
  brush(0, 0, 0, 150, 500);
  brush(0, 0, 0, 200, 500)
  brush(0, 0, 0, 300, 500)

  brush(0, 0, 0, width, 450);
  brush(0, 0, 0, 900, 500);
  brush(0, 0, 0, 1000, 500)

  treeLeavesRed.display();

}

function sequence() {
  background(0);

  t = ["What's that?", "I hear something", "I'm being stalked", "Keep calm", "What should I do?", "I'm scared", "Run", "Keep running", "Don't look back", "Keep running", "Keep running", "Keep running", "Go to next chapter"]

  if (bgm.currentTime() > 1 && bgm.currentTime() <= 5) {
    //stroke(255, 0, 0)
    fill(255)
    textSize(50)
    textAlign(CENTER, CENTER)
    text(t[0], width / 2, height / 2)
  } else if (bgm.currentTime() > 9.4 && bgm.currentTime() <= 13.5) {

    fill(255)
    textSize(50)
    textAlign(CENTER, CENTER)
    text(t[1], width / 2, height / 2)

  } else if (bgm.currentTime() > 16 && bgm.currentTime() <= 19.8) {

    fill(255, 0, 0)
    textSize(100)
    textAlign(CENTER, CENTER)
    text(t[2], width / 2, height / 2)

  } else if (bgm.currentTime() > 19.8 && bgm.currentTime() <= 26) {

    fill(255)
    textSize(50)
    textAlign(CENTER, CENTER)
    text(t[3], width / 2, height / 2)
  } else if (bgm.currentTime() > 28 && bgm.currentTime() <= 32) {

    fill(255)
    textSize(50)
    textAlign(CENTER, CENTER)
    text(t[4], width / 2, height / 2)

  } else if (bgm.currentTime() > 34 && bgm.currentTime() <= 36.5) {
    let col = map(bgm.currentTime(), 35.5, 35.55, 255, 0)
    fill(col)
    textSize(25)
    textAlign(CENTER, CENTER)
    text(t[5], width / 2, height / 2)
  } else if (bgm.currentTime() > 36.5 && bgm.currentTime() <= 40.5) {

    fill(255, 0, 0)
    textSize(60)
    textAlign(CENTER, CENTER)
    text(t[6], width / 2, height / 2)
  } else if (bgm.currentTime() > 40.5 && bgm.currentTime() <= 44.8) {

    fill(255, 0, 0)
    textAlign(CENTER, CENTER)
    textSize(80)
    text(t[7], width / 2, height / 2)
  } else if (bgm.currentTime() > 44.8 && bgm.currentTime() <= 47) {

    fill(255, 0, 0)
    textAlign(CENTER, CENTER)
    textSize(120)
    text(t[8], width / 2, height / 2)
  } else if (bgm.currentTime() > 47 && bgm.currentTime() <= 49) {

    fill(255, 0, 0)
    textAlign(CENTER, CENTER)
    textSize(150)
    text(t[9], width / 2, height / 2)
  } else if (bgm.currentTime() > 49 && bgm.currentTime() <= 51) {

    background(0);
    redBackground();
  } else if (bgm.currentTime() > 51 && bgm.currentTime() <= 53.2) {


    background(random(255))
    lightning.update();
    lightning.display();
    noStroke()
    push()
    wolf.display();
    pop();

    redBackground()

  } else if (bgm.currentTime() > 53.2 && bgm.currentTime() <= 57) {

    background(190, 0, 0)
    noStroke()
    push()
    wolf.display();
    pop();

    redBackground()

  } else if (bgm.currentTime() >= 57) {
    nextChapter = true;
    logframes = frameCount;
  }

}