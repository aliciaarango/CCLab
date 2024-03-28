let balls = [];
let totalNum = 20;


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);

 /* for(let i = 0; i < totalNum; i++){
    let b = new Ball(random(width), random(height));
    balls.push(b);
  }*/

  //console.log(balls);
}

function draw() {
  background(0, 50);

    let b = new Ball(mouseX, mouseY, mouseX, mouseY);
    balls.push(b);


for(let i = 0; i < balls.length; i++){
  balls[i].move();
  balls[i].checkOutOfCanvas();
  balls[i].display();
}

for(let i = balls.length - 1; i >= 0; i--){
  if(balls[i].isDone == true){
    balls.splice(i, 1);
  }
}

while(balls.length > 500){
  balls.splice(0, 1);
}

}


class Ball {
  constructor(xPos, yPos, xPos2, yPos2) {
    this.x1 = xPos;
    this.y1 = yPos;
    this.xSpd1 = sin(frameCount/10);
    this.ySpd1 = cos(frameCount/10);
    this.x2 = xPos2;
    this.y2 = yPos2;
    this.xSpd2 = -sin(frameCount/10);
    this.ySpd2 = -cos(frameCount/10);
    //this.sizeWidth = 30;
    //this.sizeHeight = 8;
    this.size = random(2, 6);
    this.col = [random(255), random(255), random(255)];
    this.isDone = false;
  }

  move() {
    this.x1 += this.xSpd1;
    this.y1 += this.ySpd1;
    this.x2 += this.xSpd2;
    this.y2 += this.ySpd2;
  }

  checkOutOfCanvas(){
    if (this.x1 > width || this.x1 < 0) {
      this.isDone = true;

    }

    if (this.y1 > height || this.y1 < 0) {
      this.isDone = true;
    }

    if (this.x2 > width || this.x2 < 0) {
      this.isDone = true;

    }

    if (this.y2 > height || this.y2 < 0) {
      this.isDone = true;
    }
  }
  

  bounce() {
    if (this.x1 > width || this.x1 < 0) {
      this.xSpd1 *= -1;

    }

    if (this.y1 > height || this.y1 < 0) {
      this.ySpd1 *= -1;
    }

    if (this.x2 > width || this.x2 < 0) {
      this.xSpd2 *= -1;

    }

    if (this.y2 > height || this.y2 < 0) {
      this.ySpd2 *= -1;
    }
  }


  display() {
    //fill(this.col[0], this.col[1], this.col[2]);
    fill(255, 255, 255)
    noStroke();
    circle(this.x1, this.y1, this.size);
    circle(this.y1, this.x1, this.size);
    circle(this.x2, this.y2, this.size);
    circle(this.y2, this.x2, this.size);
    //ellipse(this.x, this.y, this.sizeHeight, this.sizeWidth);
  }


}