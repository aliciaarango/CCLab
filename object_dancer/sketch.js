/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new AliciaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class AliciaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //this.scale = 1;
    //this.scale_width = 0.9;
    this.circle_radius = 45;
    this.circle_radius2 = 35;
    this.angle = PI / 7;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    rectMode(CENTER);
    this.speed1 = sin(frameCount / 20);
    this.speed2 = sin(frameCount / 20);
    this.speed3 = map(cos(frameCount / 2), -1, 1, -0.5, 0.5);
    this.speed4 = map(cos(frameCount / 20), -1, 1, -0.5, 0.5);

    
    if(mouseIsPressed == true) {
      this.speed1 = sin(frameCount/2);
          this.y -= this.speed1 * 2;
          this.speed2 = map(sin(frameCount / 2), -1, 1, -1, 1);

    }else {
      this.speed1 = sin(frameCount/20);
          this.y += this.speed1 * 2;
          this.speed2 = map(sin(frameCount / 20), -1, 1, -1, 1);

    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);


    // ******** //
    // ⬇️ draw your dancer from here ⬇️



    let left_wing = this.speed2 / 5;
    let left_arm = this.speed3 / 5;
    let right_wing = -this.speed2 / 5;
    let right_arm = -this.speed3 / 5;
    let head_bob = this.speed4 / 5;

    push()

    //Small wings
    push();
    rotate(left_wing);
    fill(120);
    strokeWeight(2);
    translate(-70, -45);
    scale(1, 0.25);
    stroke(255);
    ellipse(
      this.circle_radius2,
      this.circle_radius2,
      this.circle_radius2 * 2,
      this.circle_radius2 * 2
    );

    for (var k = 0; k < 2 * PI; k += this.angle) {
      let x = cos(k) * this.circle_radius2;
      let y = sin(k) * this.circle_radius2;
      stroke(255);
      strokeWeight(1.5);
      line(
        this.circle_radius2 + 35,
        this.circle_radius2,
        x + this.circle_radius2,
        y + this.circle_radius2
      );
    }
    pop();

    push();
    rotate(right_wing);
    fill(120);
    strokeWeight(2);
    translate(1, -45);
    scale(1, 0.25);
    stroke(255);
    ellipse(
      this.circle_radius2,
      this.circle_radius2,
      this.circle_radius2 * 2,
      this.circle_radius2 * 2
    );

    for (var l = 0; l < 2 * PI; l += this.angle) {
      let x = cos(l) * this.circle_radius2;
      let y = sin(l) * this.circle_radius2;
      stroke(255);
      strokeWeight(1.5);
      line(
        this.circle_radius2 - 35,
        this.circle_radius2,
        x + this.circle_radius2,
        y + this.circle_radius2
      );
    }
    pop();

    //Big wings
    push();
    rotate(left_wing);
    fill(120);
    strokeWeight(2);
    translate(-95, -32);
    scale(1, 0.25);
    stroke(255);
    ellipse(
      this.circle_radius,
      this.circle_radius,
      this.circle_radius * 2,
      this.circle_radius * 2
    );

    for (var i = 0; i < 2 * PI; i += this.angle) {
      let x = cos(i) * this.circle_radius;
      let y = sin(i) * this.circle_radius;
      stroke(255);
      strokeWeight(1.5);
      line(
        this.circle_radius + 45,
        this.circle_radius,
        x + this.circle_radius,
        y + this.circle_radius
      );
    }
    pop();

    push();
    rotate(right_wing);
    fill(120);
    strokeWeight(2);
    translate(5, -32);
    scale(1, 0.25);
    stroke(255);
    ellipse(
      this.circle_radius,
      this.circle_radius,
      this.circle_radius * 2,
      this.circle_radius * 2
    );

    for (var j = 0; j < 2 * PI; j += this.angle) {
      let x = cos(j) * this.circle_radius;
      let y = sin(j) * this.circle_radius;
      stroke(255);
      strokeWeight(1.5);
      line(
        this.circle_radius - 45,
        this.circle_radius,
        x + this.circle_radius,
        y + this.circle_radius
      );
    }
    pop();

//Arms
    push();
    noStroke();
    rotate(left_arm);
    fill("pink");
    rotate(0);
    ellipse(-20, -40, 40, 5);
    pop();


    push();
    noStroke();
    rotate(right_arm);
    fill("pink");
    rotate(0);
    ellipse(20, -40, 40, 5);
    pop();

    //Legs
    push();
    noStroke();
    let left_leg = -this.speed2 / 10;
    rotate(left_leg);
    fill("pink");
    ellipse(-5, 20, 5, 60);
    pop();
    push();
    noStroke();
    fill("pink");
    let right_leg = this.speed2 / 10;
    rotate(right_leg);
    ellipse(5, 20, 5, 60);
    pop();

    //Bodice
    push();
    stroke("white");
    rotate(head_bob);
    beginShape();
    fill("hotpink");
    curveVertex(10, -20);
    curveVertex(10, -20);
    curveVertex(8, -50);
    curveVertex(0, -59);
    curveVertex(-8, -50);
    curveVertex(-10, -20);
    curveVertex(-10, -20);
    endShape();
    pop();

    push();
    rotate(head_bob);
    //Hair
    stroke(77, 48, 71);
    fill(77, 48, 71);
    bezier(0, -70, -10, -55, -15, -50, -23, -60);
    bezier(0, -70, 10, -55, 15, -50, 23, -60);
    stroke(112, 89, 107);
    strokeWeight(0.5);
    noFill();
    bezier(0, -70, -10, -60, -15, -55, -23, -60);
    bezier(0, -70, 10, -60, 15, -55, 23, -60);
    //Head
    noStroke();
    fill("pink");
    ellipse(0, -70, 30);
    //Antennae
    stroke("white");
    noFill();
    bezier(3, -85, 6, -100, 15, -110, 20, -97);
    bezier(-3, -85, -6, -100, -15, -110, -20, -97);
    fill("white");
    circle(20, -97, 5);
    circle(-20, -97, 5);
    //Bangs
    stroke(77, 48, 71);
    fill(77, 48, 71);
    bezier(0, -85, 0, -85, 0, -75, -20, -75);
    bezier(0, -85, -10, -90, -10, -85, -20, -75);
    bezier(0, -85, 0, -85, 0, -75, 20, -75);
    bezier(0, -85, 10, -90, 10, -85, 20, -75);
    stroke(112, 89, 107);
    strokeWeight(0.5);
    line(0, -85, -20, -75);
    line(0, -85, 20, -75);

    //Mouth
    noStroke();
    fill("black");
    arc(0, -63, 8, 8, 0, PI);
    //Eyes
    noStroke();
    fill("black");
    ellipse(-8, -70, 4, 8);
    ellipse(8, -70, 4, 8);
    fill(255);
    ellipse(-7, -69, 2, 2);
    ellipse(9, -69, 2, 2);

    pop();

    //Skirts
    stroke("white");
    beginShape();
    fill("white");
    curveVertex(33, 30);
    curveVertex(33, 30);
    curveVertex(15, -20);
    curveVertex(0, -20);
    curveVertex(-15, -20);
    curveVertex(-33, 30);
    curveVertex(-33, 30);
    endShape();

    beginShape();
    fill("pink");
    curveVertex(33, 20);
    curveVertex(33, 20);
    curveVertex(15, -20);
    curveVertex(0, -25);
    curveVertex(-15, -20);
    curveVertex(-33, 20);
    curveVertex(-33, 20);
    endShape();

    beginShape();
    fill("hotpink");
    curveVertex(33, 10);
    curveVertex(33, 10);
    curveVertex(15, -20);
    curveVertex(0, -29);
    curveVertex(-15, -20);
    curveVertex(-33, 10);
    curveVertex(-33, 10);
    endShape();
  
pop()


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.

    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
  
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/