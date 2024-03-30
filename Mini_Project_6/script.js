// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.

let rain = [];

let rainclouds = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  lightning = new Lightning();
  mountainRange =  new mountain(80, 0.01);

}

function draw() {
  background(0);

  // update and display
  

  if(mouseIsPressed == true){
    background(random(255));
    lightning.update();
    lightning.display();
  } else{
    background(0);
  }

  mountainRange.display();

 let p = new Raindrop(random(width), -10);
 rain.push(p);


  for (let i = 0; i < rain.length; i++) {
    let p = rain[i];
    p.update();
    p.splash();
    p.lifespan();
    p.display();
 

  }

  for(let i = rain.length - 1; i >= 0; i--){
    if(rain[i].finished == true){
      rain.splice(i, 1);
    }
  }

  for (let i = 0; i < 8; i++) {
    let c = new Clouds();
    rainclouds.push(c);
  }
  for (let i = rainclouds.length - 1; i >= 0; i--) {
    rainclouds[i].update();
    rainclouds[i].lifespan();
    rainclouds[i].display();

  }
  
    for(let i = rainclouds.length - 1; i >= 0; i--){
    if(rainclouds[i].finished == true){
      rainclouds.splice(i, 1);
    }
  }


}

class Raindrop {
  // constructor function
  constructor(startX, startY) {
    // properties: raindrop's characteristics
    this.x = startX;
    this.y = startY;
    this.width = 1;
    this.height = 15;
    this.spdY = random(2, 3);

    this.finished = false;

    this.r;
    this.g;
    this.b;
    this.alpha = 200;
  }
  // methods (functions): raindrop's behaviors
  update() {
    // (add) 
    this.y += this.spdY;

    this.r = map(sin(frameCount/200), -1, 1, 50, 180);
    this.g = map(sin(frameCount/100), -1, 1, 30, 80);
    this.b = map(sin(frameCount/50), -1, 1, 80, 255);

    if(mouseIsPressed == true){
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }

  splash(){
    if(this.y > height - 20){
      this.spdY = 0;
      this.width = 22;
      this.height = 2;
      this.alpha -= 3;
    }

  }

  lifespan() {
    if(this.alpha <= 0){
      this.finished = true;
    }
  }

  display() {
    // raindrop's appearance
    push();
    translate(this.x, this.y);
    stroke(this.r, this.g, this.b, this.alpha);
    strokeWeight(1);
    noFill();
    ellipse(0, 0, this.width, this.height);

    pop();
  }
}

class Clouds {

  constructor() {
    this.x = random(width);
    this.y = random(-50, -20);
    this.xSpd = random(-1, 1);
    this.ySpd = random(-0.1, 0.8);
    this.sizeWidth = 70;
    this.sizeHeight = 50;

    this.alpha = 200;
    this.finished = false;

    this.r;
    this.g;
    this.b;

  }

  update() {
    this.x += this.xSpd;
    this.y += this.ySpd;
    this.alpha -= 1;
    this.sizeWidth -= 0.1;
    this.sizeHeight -= 0.1;
    
    this.r = map(sin(frameCount/200), -1, 1, 20, 150);
    this.g = map(sin(frameCount/100), -1, 1, 0, 50);
    this.b = map(sin(frameCount/50), -1, 1, 50, 255);

    if(mouseIsPressed == true){
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }

  lifespan() {
    if(this.alpha <= 0){
      this.finished = true;
    }
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    ellipse(this.x, this.y, this.sizeWidth, this.sizeHeight);

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
}

class mountain {
  constructor(start_y, increment) {
    this.y = start_y;
    this.increment = 0.01;
  }
   
  display(){
    fill(0);
    beginShape();
    stroke(0);
    strokeWeight(1);
    //makes mountain topline uneven
    for (let i = 0; i < width; i++) {
      let move = i * this.increment + this.y;
      let y = this.y + map(noise(move), 0, 1, 100, 300);
      vertex(i, y);
    }
    vertex(width, height);
    vertex(0, height);
    endShape();
  }
}

