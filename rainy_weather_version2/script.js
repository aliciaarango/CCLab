// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.

let rain = [];

let rainclouds = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

}

function draw() {
  background(0);

  // update and display

 let p = new Raindrop(random(width), -10);
 rain.push(p);


  for (let i = 0; i < rain.length; i++) {
    let p = rain[i];
    p.update();
    p.display();
    p.splash();
    p.fade();

  }

  for(let i = rain.length - 1; i >= 0; i--){
    if(rain[i].finished == true){
      rain.splice(i, 1);
    }
  }

  for (let i = 0; i < 5; i++) {
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
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.width = 1;
    this.height = 15;
    this.spdY = random(2, 3);
    this.splashed = false;
    this.lifespan = 25;
    this.finished = false;
    this.r = map(this.y, 0, height, 0, 255);
    this.g = map(this.y, 0, height, 50, 150);
    this.b = map(this.y, 0, height, 0, 255);
    this.alpha = 200;
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.y += this.spdY;

    /*this.r = map(this.y, 0, height, 0, 200);
    this.g = map(this.y, 0, height, 50, 150);
    this.b = map(this.y, 0, height, 50, 255);*/

    this.r = map(sin(frameCount/200), -1, 1, 50, 180);
    this.g = map(sin(frameCount/100), -1, 1, 30, 80);
    this.b = map(sin(frameCount/50), -1, 1, 80, 255);
  }

  splash(){
    if(this.y > height - 20){
      this.spdY = 0;
      this.width = 22;
      this.height = 2;
      this.splashed = true;
      this.alpha -= 3;
    }
  }

fade(){
  if(this.splashed == true && this.alpha <= 0){
    this.lifespan --;
} if(this.lifespan <= 0){
  this.finished = true;
}
}

  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    stroke(this.r, this.g, this.b, this.alpha);
    noFill();
    ellipse(0, 0, this.width, this.height);

    pop();
  }
}

class Clouds {

  constructor() {
    this.x = random(width);
    this.y = random(-50, -20);
    this.vx = random(-1, 1);
    this.vy = random(-0.1, 0.8);
    this.alpha = 200;
    this.sizeWidth = 70;
    this.sizeHeight = 50;
    this.finished = false;

    this.r;
    this.g;
    this.b;

  }

  lifespan() {
    if(this.alpha <= 0){
      this.finished = true;
    }
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 1;
    this.sizeWidth -= 0.1;
    this.sizeHeight -= 0.1;
    
    this.r = map(sin(frameCount/200), -1, 1, 20, 150);
    this.g = map(sin(frameCount/100), -1, 1, 0, 50);
    this.b = map(sin(frameCount/50), -1, 1, 50, 255);
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    ellipse(this.x, this.y, this.sizeWidth, this.sizeHeight);

  }

}
