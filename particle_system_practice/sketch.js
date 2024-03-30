let particles = [];
let totalNum = 2

 function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);

  //particles = new Particle();

 }

function draw() {
  background(0, 0, 0);
 
  //translate(width/2, height/2);
    let p = new Particle();
    particles.push(p);
  

  for(var i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].display();
  }

  for(let i = particles.length - 1; i >= 0; i--){
    if(particles[i].isDone == true){
      particles.splice(i, 1);
    }
  }

  while(particles.length > 1000){
    particles.splice(0, 1);
  }

}

class Particle{
    constructor(){
      this.posX = mouseX;
      this.posY = mouseY;
      //this.spdX = random(-0.5, 0.5);
      //this.spdY = random(-0.5, 0.5);
      this.accX = random(-1, 1);
      this.accY = random(-1, 1)
      this.isDone = false;
      this.alpha = 255;

      /*this.r = map(this.posX, 0, width, 255, 0);
      this.g = map(this.posY, 0, height, 0, 255);
      this.b = map(dist(width/2, height/2, this.posX, this.posY), 0, width/2, 0, 255);*/

      this.r;
      this.g;
      this.b;
      this.color;
      this.size = 8;
    }

    checkOutOfCanvas(){
      if(this.posX > width || this.posX < 0){
        this.isDone = true;
      }

      if(this.posY > height || this.posY < 0){
        this.isDone = true;
      }
    }

    update(){
      //this.accX += this.spdX;
      //this.accY += this.spdY;
      this.posX += this.accX;
      this.posY += this.accY;
      this.alpha -= 1;
      this.size += 0.05;

      this.r = map(dist(width/2, height/2, this.posX, this.posY), 0, width/2, 0, 100);
      this.g = map(dist(width/2, height/2, this.posX, this.posY), 0, width/2, 255, 50);
      this.b = map(dist(width/2, height/2, this.posX, this.posY), 0, width/2, 255, 0);
    }

    display(){
      noStroke();
      fill(this.r, this.g, this.b, this.alpha);
      ellipse(this.posX, this.posY, this.size);
    }
}