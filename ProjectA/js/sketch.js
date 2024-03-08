let size = 40;
let number = 20;
let angle = 20;
let x = 0;
let y = 0;
let death_sequence = false;
let logframes = 0;
let mix = 0;
let easing = 0.05;
let value = 150

  let w1 = 3;
  let h1 = 6;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.id("P5CANVAS")
  canvas.parent("p5-canvas-container")
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0, 15);
  noFill();
  stroke(255);

  r = map(sin(frameCount), -1, 1, 50, 255);
  g = map(sin(frameCount / 2), -1, 1, 50, 255);
  b = map(sin(frameCount / 4), -1, 1, 50, 255);

  //color1 = color(r, g, b);


  if (death_sequence == false) {

    flower_grow();
  } else if (frameCount <= logframes + 600) {


    flower_stage2();
  } else if (frameCount <= logframes + 1100) {


    flower_stage3();
  } else if (frameCount <= logframes + 1600) {
    //color1 = color(random(100, 200), random(100, 255), random(200, 255))

    flower_stage4();
  } else {
    //color1 = color(r, g, b)

    flower_stage5();
  }
}

function mousePressed() {
  if(mouseX <= width/2 - w && mouseX >= width/2 + w && mouseY <= height/2 - h && mouseY >= height/2 + h){
  if (death_sequence == false) {
    death_sequence = true;
    logframes = frameCount;
  }
  }
}

function flower_grow() {
  translate(width / 2, height / 2);

  if (frameCount % 5 == 0) {
    size++;
    number ++
    if(death_sequence == true){
      size--;
      number--
    }
    else if (size == 200) {
      size--;
      number--;
    }
  }

  //Flower for-loop
  for (var i = 0; i < number; i++) {
    push();
    stroke(r, g, b);
    noFill();

    rotateValue = (frameCount/value + i * 5)*150;

    rotate(rotateValue);

    
    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    rect(x, y, w, h, 20);

    pop();
  }
}

function flower_stage2() {
  translate(width / 2, height / 2);

  //Flower for-loop
  for (var i = 0; i < number; i++) {
    push();
    noFill();

     rotateValue = (frameCount/value + i * 5)*150;
     rotate(rotateValue);

    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    let a = sin(frameCount) * 2;
    a = map(a, -1, 1, 1, 1.15);
    scale(a);

    stroke(r, g, b);

    rect(x, y, w, h, 20);

    pop();
  }
}

function flower_stage3() {
  translate(width / 2, height / 2);

  //Flower for-loop
  for (var i = 0; i < number; i++) {
    push();
    stroke(r, g, b);
    noFill();
    
    value+= 0.1;
    rotateValue = (frameCount / value + i * 5)*150;
        rotate(rotateValue);

    
    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    rect(x, y, w, h, 20);

    pop();
  }
}

function flower_stage4() {
  translate(width / 2, height / 2);


  for (var i = 0; i < number; i++) {
    push();

  
if(frameCount <= logframes + 1300){
    a = sin(frameCount % 30 == 0) * 50;
  }else if(frameCount <= logframes + 1400){
        a = sin(frameCount % 20 == 0) * 50;
  }else if(frameCount <= logframes + 1500){
        a = sin(frameCount % 10 == 0) * 50;
  }else{
        a = sin(frameCount % 5 == 0) * 50;
  }
    
    scaleValue = map(a, -1, 1, 1, 1.2)
    scale(scaleValue);
    
    stroke(r, g, b)
    noFill();

    rotateValue = (1 + i *5)*150

    rotate(rotateValue);


    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    rect(x, y, w, h, 20);

    pop();
  }
}

function flower_stage5() {
  translate(width / 2, height / 2);


  let mixColor = map(frameCount, logframes + 1600, logframes + 1800, 0.0, 1.0);
  mix = mix + (mixColor - mix) * easing;

  colorA = color(random(255), random(255), random(255));
  colorB = color(50, 50, 50);
  let gradualColor1 = lerpColor(colorA, colorB, mix);


  for (var i = 0; i < number; i++) {
    push();
    stroke(gradualColor1);
    noFill();

    rotateValue = (frameCount / frameCount + i *5)*150
    rotate(rotateValue);

    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    rect(x, y, w, h, 20);

    pop();
  }
}

function draw_lights(colorValue, width1, height1){

  //Background twinkling lights for-loops
  for (var x1 = random(600); x1 < width; x1 += random(600)) {
    for (var y1 = random(600); y1 < height; y1 += random(600)) {
      noStroke();
      fill(colorValue);

      ellipse(x1, y1, width1, height1);
    }
  }
  
}