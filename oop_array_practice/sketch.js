let ball, ball2;
let stars = [];
let totalNum = 20;

let mySound;



function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);

  for(let i = 0; i < totalNum; i++){
    let b = new Star(random(width), random(height));
    stars.push(b);
  }

  //console.log(balls);
}

function draw() {
  background(0, 50);


for(let i = 0; i < stars.length; i++){
  stars[i].move();
  stars[i].bounce();
  stars[i].display();
}

}


class Star {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.sizeWidth = 30;
    this.sizeHeight = 8;
    this.col = [random(255), random(255), random(255)];
  }

  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xSpd *= -1;

    }

    if (this.y > height || this.y < 0) {
      this.ySpd *= -1;
    }
  }


  display() {
    fill(this.col[0], this.col[1], this.col[2]);
    noStroke();
    ellipse(this.x, this.y, this.sizeWidth, this.sizeHeight);
    ellipse(this.x, this.y, this.sizeHeight, this.sizeWidth);
  }


}