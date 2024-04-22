//ASK CARROT FOR HELP WITH BELOW:


//How to make just mySound play during the beginning with text on screen, and then lower its volume and add myBgMusic for the entire rest of the duration? Currently in setup() but realize need to move to draw()



let x = 0;
let y1 = 0;
let y2 = 0;
let speedx = -0.2;
let speedy1 = -0.2;
let speedy2 = 0.2;

let rain = [];
let particles = [];

let mySound;
let myBgMusic;
let myFont;
let curveVol;
let ifQuiet = false;
let bgVol;

function preload() {
  mySound = loadSound("assets/rain.mp3");
  myBgMusic = loadSound("assets/bgSpookyMusic.mp3")
  myFont = loadFont("assets/font.ttf");
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
  
  curveVol = 0;

  //myBgMusic.setVolume(0.8)

  //mySound.play();

  treeLeavesBot = new TreeLeavesBot(17, 17, 17, 80, 0.01);

  treeLeavesTop = new TreeLeavesTop(5, 0.01);

  backgroundTrees = new Trees3(17, 17, 17, 20, width, 110, 20, height);

  foreGround = new WoodsGround(17, 17, 17, 380, 0.01);

  littleRed = new LittleRedRidingHood(10, 550, 0.55);
  
  
}

function draw() {
  background(55);

  //if(!myBgMusic.isPlaying()){
   // myBgMusic.loop();
  //}


  if(!mySound.isPlaying()){
    mySound.loop()
    ifQuiet = true;
  }
  
 if(ifQuiet){ 
    if(curveVol < 0.4){
      curveVol+=0.6/450;
      mySound.setVolume(curveVol)
    } else {
      curveVol = 0;
      ifQuiet = false;
    }
 }
  if (frameCount <= 450) {
//Opening text
    narration();
   
//    
  } else if(frameCount > 450 && frameCount <= 2250) {
    
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

    console.log(rain.length)

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
    treeLeavesBot.display();
    treeLeavesTop.display();

    //stroke("red")
    //brush(17, 17, 17, 0, 50); 
    brush(17, 17, 17, 0, 50);
    brush(17, 17, 17, 100, 70);
    brush(17, 17, 17, 300, 150);

for (let i = 0; i < 5; i++) {
    let p = new Particle(littleRed.x + random(-500, 0), littleRed.y - 10);
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
  //console.log(particles.length)
    
    
    littleRed.update();
    littleRed.display();

    backgroundTrees.display();

    foreGround.display();
    pop();
    noStroke();
    push();

//Wolf Eye
    push();
    let xc1 = constrain(littleRed.x -5, 157, 243);
    let xs1 = constrain(littleRed.y -5, 130, 170);

    let xc2 = constrain(littleRed.x - 15, 135, 225);
    let xs2 = constrain(littleRed.y - 15, 120, 160);

    noStroke();
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = color(108, 0, 0);
    fill(108, 0, 0);
    ellipse(200, 150, 200, 100);

    noStroke();
    fill(0);
    ellipse(xc1, xs1, 50, 50);
    //fill(255, 0, 0)
   // ellipse(xc1 - 5, xs1, 10, 10)
    fill(255);
    ellipse(xc2, xs2, 20, 10);
    pop();

    fill(17);

//Rectangle eyelids
    if (frameCount >= 450 && frameCount < 730) {
      y1 = y1 + speedy1;
      y2 = y2 + speedy2;
    } else {
      speedy1 = 0;
      speedy2 = 0;
    }
    rect(x, 50 + y1, 320, 100);
    rect(x, 150 + y2, 320, 100);
    
  } else{
    background(0);
    textAlign(CENTER, CENTER);
    translate(width/2, height/2);
    fill(255, 255, 255);
    text("Insert coded sequence", 0, 0)
  }
}

function narration() {
  background(0);

  translate(width / 2, height / 2);

  if (frameCount <= 200) {
    text("As Little Red Riding Hood trudged onward", 0, -30);
    text("through the woods...", 0, 30);
  } else if (frameCount > 200 && frameCount <= 400) {
    r = map(frameCount, 200, 350, 255, 108);
    g = map(frameCount, 200, 350, 255, 0);
    b = map(frameCount, 200, 350, 255, 0);
    fill(r, g, b);
    text("...little did she know that a ravenous", 0, -30);
    text("predator had caught wind of her scent...", 0, 30);
  } else {
    background(0);
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
    this.xSpd = 0.5;

    this.scale = 1;
    this.scale_width = 1.15;

    this.scaling = scaling;
  }
  
  update() {
    this.speed4 = map(cos(frameCount / 20), -1, 1, -0.5, 0.5);
    this.speed1 = sin(frameCount / 20);
    this.y += this.speed4 / 4;

    this.scale_width += this.speed4 / 280;


      this.x += this.xSpd;
    
  }

  display() {
    push();
    translate(this.x, this.y);

    scale(this.scaling);

    push();

    scale(this.scale, this.scale_width);

    //Legs
    push();
    noStroke();
    let left_leg = -this.speed1 / 10;
    rotate(left_leg);
    fill("black");
    ellipse(-5, 20, 8, 60);
    pop();
    push();
    noStroke();
    fill("black");
    let right_leg = this.speed1 / 10;
    rotate(right_leg);
    ellipse(-5, 20, 8, 60);
    pop();

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
    this.r = map(dist(mouseX, mouseY, this.x, this.y), 0, width/2, 0, 255)
      this.g = map(dist(mouseX, mouseY, this.x, this.y), 0, width/2, 0, 255)
      this.b = map(dist(mouseX, mouseY, this.x, this.y), 0, width/2, 0, 255)
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
    this.size-= 0.01;
    
  }

  show() {
    noStroke();
    //stroke(255);
    fill(168, 0, 0, this.alpha);
    ellipse(this.x, this.y, this.size);
    
  }

}
