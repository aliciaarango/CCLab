let x1Pos = [];
let y1Pos = [];
let x2Pos = [];
let y2Pos = [];
let x3Pos = [];
let y3Pos = [];
let x4Pos = [];
let y4Pos = [];

let x1Spd = [];
let y1Spd = [];
let x2Spd = [];
let y2Spd = [];
let x3Spd = [];
let y3Spd = [];
let x4Spd = [];
let y4Spd = [];

//let xNew
//let yNew

let sizes = [];
let sizes4 = [];

let total1 = 20;
let total2 = 20;
let total3 = 10;
let total4 = 10;

let q = 0;
let mix1 = 0;
let easing1 = 0.05;
let diameter1 = 0;
let diameter2 = 0;

let size = 40;
let number = 20;
let angle = 20;
let x = 0;
let y = 0;
let death_sequence = false;
let logframes = 0;
let mix2 = 0;
let easing2 = 0.05;
let value = 150;
let counter = 0;
let counter_target = 1;
let variable;
let buttonOn = false;
let button = document.getElementById("skip");
let skip = false;
let zoff = 0;
let start_timer1 = 22;
let start_timer2 = 17;
let start_timer3 = 16;

let w1 = 3;
let h1 = 6;

let ifsuccess = false;

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.position(0, 0);
  // cnv.style("z-index", "-1");
  // cnv.id("P5CANVAS");
  cnv.parent("p5-canvas-container");

  angleMode(DEGREES);
  rectMode(CENTER);

  for (let i = 0; i < total1; i++) {
    x1Pos.push(random(0, width));
    y1Pos.push(random(0, height));
    x1Spd.push(random(-1, 1));
    y1Spd.push(random(-1, 1));
    sizes.push(random(10, 15));
  }

  for (let j = 0; j < total2; j++) {
    x2Pos.push(random(0, width));
    y2Pos.push(random(0, height));
    x2Spd.push(random(-1, 1));
    y2Spd.push(random(-1, 1));
    sizes.push(random(10, 12));
  }

  for (let j2 = 0; j2 < total3; j2++) {
    x3Pos.push(random(0, width));
    y3Pos.push(random(0, height));
    x3Spd.push(random(-1, 1));
    y3Spd.push(random(-1, 1));
    sizes.push(random(10, 12));
  }

  for (let j3 = 0; j3 < total4; j3++) {
    x4Pos.push(random(0, width));
    y4Pos.push(random(0, height));
    x4Spd.push(random(-1, 1));
    y4Spd.push(random(-3, 3));
    sizes4.push(random(15, 18));
  }
}

function draw() {
  clear();
  noFill();
  stroke(255);

  r = map(sin(frameCount), -1, 1, 50, 255);
  g = map(sin(frameCount / 2), -1, 1, 50, 255);
  b = map(sin(frameCount / 4), -1, 1, 50, 255);

  if (ifsuccess == false) {
    if (counter >= counter_target) {
      logframes = frameCount;
      ifsuccess = true;
    }
  }

  if (ifsuccess == true) {
    if (frameCount <= logframes + 300) {
      push();
      flower_victory1();
      pop();
    } else if (frameCount <= logframes + 800) {
      push();
      stars();
      pop();
      push();
      flower_victory2();
      pop();
    } else {
      success();
    }
  } else if (death_sequence == false) {
    push();
    caveBackground();
    pop();
    push();
    flower_grow();
    pop();
  } else if (frameCount <= logframes + 400 && skip == false) {
    push();
    button.style.display = "block";
    instructions();
    pop();
  } else if (frameCount <= logframes + 1400 || skip == true) {
    button.style.display = "none";
    if (frameCount >= logframes + 1200) {
      skip = false;
    }
    push();
    caveBackground();
    pop();
    timer1();

    push();
    flower_stage2();
    pop();
    drawWhitePollen1();
    drawRedPollen1();
    counter_target = total2;
  } else if (frameCount <= logframes + 2400) {
    caveBackground();
    timer2();
    push();
    flower_stage3();
    pop();
    drawWhitePollen2();
    drawRedPollen2();
    drawRedPollen3();
    counter_target = total2 + total3;
  } else if (frameCount <= logframes + 3400) {
    caveBackground();
    timer3();
    push();
    flower_stage4();
    pop();
    drawWhitePollen2();
    drawRedPollen2();
    drawRedPollen3();
    drawRedPollen4();
    counter_target = total2 + total3 + total4;
  } else if (frameCount <= logframes + 3680) {
    push();
    flower_stage5();
    pop();
  } else {
    failure();
  }
}

function timer1() {
  if (frameCount % 60 == 0 && start_timer1 > 0) {
    start_timer1--;
  }
  if (start_timer1 == 0) {
    textSize(30);
    fill("white");
    text("0", 50, 50);
  }
  textSize(30);
  fill("white");
  text(start_timer1, 50, 50);
}

function timer2() {
  if (frameCount % 60 == 0 && start_timer2 > 0) {
    start_timer2--;
  }
  if (start_timer2 == 0) {
    textSize(30);
    noStroke();
    fill("yellow");
    text("0", 50, 50);
  }
  textSize(30);
  noStroke();
  fill("yellow");
  text(start_timer2, 50, 50);
}

function timer3() {
  if (frameCount % 60 == 0 && start_timer3 > 0) {
    start_timer3--;
  }
  if (start_timer3 == 0) {
    textSize(30);
    noStroke();
    fill("red");
    text("0", 50, 50);
  }
  textSize(30);
  noStroke();
  fill("red");
  text(start_timer3, 50, 50);
}

function mousePressed() {
  if (
    mouseX <= width / 2 - w &&
    mouseX >= width / 2 + w &&
    mouseY <= height / 2 - h &&
    mouseY >= height / 2 + h
  ) {
    if (death_sequence == false) {
      death_sequence = true;
      logframes = frameCount;
    }
  }
  //Removed the ability to click and splice a white pollen circle as I couldn't figure out how to make it push out a new red pollen using the same copied x,y coordinates of the spliced white pollen
  /*
    for (let k = 0; k < x1Pos.length; k++) {
    let x1 = x1Pos[k];
    let y1 = y1Pos[k];

    if (
      mouseX > x1 - diameter1 / 2 &&
      mouseX < x1 + diameter1 / 2 &&
      mouseY > y1 - diameter1 / 2 &&
      mouseY < y1 + diameter1 / 2
    ) {

      //xNew = x2Pos[k];
      //yNew = y2Pos[k];
      generateBad(k); 
      console.log(x2Pos.length)
      console.log("____________________________")
      console.log(xNew )
      console.log(yNew)
      console.log(mouseX)
      console.log(mouseY)
      
      Remove1(k);
      //logframes = logframes - 50; //Check
    }
  }
*/
  for (let m = 0; m < x2Pos.length; m++) {
    let x2 = x2Pos[m];
    let y2 = y2Pos[m];

    if (
      mouseX > x2 - diameter2 / 2 &&
      mouseX < x2 + diameter2 / 2 &&
      mouseY > y2 - diameter2 / 2 &&
      mouseY < y2 + diameter2 / 2
    ) {
      Remove2(m);
      counter++;
    }
  }

  for (let n = 0; n < x3Pos.length; n++) {
    let x3 = x3Pos[n];
    let y3 = y3Pos[n];

    if (
      mouseX > x3 - diameter2 / 2 &&
      mouseX < x3 + diameter2 / 2 &&
      mouseY > y3 - diameter2 / 2 &&
      mouseY < y3 + diameter2 / 2
    ) {
      Remove3(n);
      counter++;
    }
  }

  for (let p = 0; p < x4Pos.length; p++) {
    let x4 = x4Pos[p];
    let y4 = y4Pos[p];

    if (
      mouseX > x4 - diameter2 / 2 &&
      mouseX < x4 + diameter2 / 2 &&
      mouseY > y4 - diameter2 / 2 &&
      mouseY < y4 + diameter2 / 2
    ) {
      Remove4(p);
      counter++;
    }
  }
}

function stars() {
  background(0, 220);
  let w = 3;
  let h = 12;

  for (var x1 = random(600); x1 < width; x1 += random(600)) {
    for (var y1 = random(600); y1 < height; y1 += random(600)) {
      noStroke();
      fill(r, g, b);
      w = w + 0.4;
      h = h + 0.4;
      ellipse(x1, y1, w, h);
      ellipse(x1, y1, h, w);
    }
  }
}

function flower_grow() {
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  if (frameCount % 5 == 0) {
    size++;
    number++;
    if (death_sequence == true) {
      size--;
      number--;
    } else if (size == 200) {
      size--;
      number--;
    }
  }

  for (var i = 0; i < number; i++) {
    push();
    stroke(r, g, b);
    noFill();

    rotateValue = (frameCount / value + i * 5) * 150;

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
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  for (var i = 0; i < number; i++) {
    push();
    noFill();

    rotateValue = (frameCount / value + i * 5) * 150;
    rotate(rotateValue);

    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    let a = sin(frameCount) * 2;
    a = map(a, -1, 1, 1, 1.15);
    scale(a);

    b2 = w * 1.5;

    let mixColor = map(sin(frameCount), -1, 1, 0.0, 2.0);
    mix2 = mix2 + (mixColor - mix2) * easing2;

    colorA = color(random(100, 255), 82, 82);
    colorB = color(random(200, 255), 123, 123);
    let gradualColor1 = lerpColor(colorA, colorB, mix2);

    stroke(gradualColor1);
    rect(x, y, w, h, 20);

    b2 -= 500;

    pop();
  }
}


function flower_stage3() {
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  for (var i = 0; i < number; i++) {
    push();

    noFill();

    let mixColor = map(sin(frameCount), -1, 1, 0.0, 2.0);
    mix2 = mix2 + (mixColor - mix2) * easing2;

    colorA = color(random(100, 255), 82, 82);
    colorB = color(random(200, 255), 123, 123);
    let gradualColor1 = lerpColor(colorA, colorB, mix2);

    stroke(gradualColor1);

    value += 0.1;
    rotateValue = (frameCount / value + i * 5) * 150;
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
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  for (var i = 0; i < number; i++) {
    push();

    if (frameCount <= logframes + 3100) {
      a = sin(frameCount % 30 == 0) * 50;
    } else if (frameCount <= logframes + 3200) {
      a = sin(frameCount % 20 == 0) * 50;
    } else if (frameCount <= logframes + 3300) {
      a = sin(frameCount % 10 == 0) * 50;
    } else {
      a = sin(frameCount % 5 == 0) * 50;
    }

    scaleValue = map(a, -1, 1, 1, 1.2);
    scale(scaleValue);

    let mixColor = map(sin(frameCount), -1, 1, 0.0, 2.0);
    mix2 = mix2 + (mixColor - mix2) * easing2;

    colorA = color(random(100, 255), 82, 82);
    colorB = color(random(200, 255), 123, 123);
    let gradualColor1 = lerpColor(colorA, colorB, mix2);

    stroke(gradualColor1);
    noFill();

    rotateValue = (1 + i * 5) * 150;

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
  background(0, 240);
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  let mixColor = map(frameCount, logframes + 3400, logframes + 3600, 0.0, 1.0);
  mix2 = mix2 + (mixColor - mix2) * easing2;

  colorA = color(random(255), random(255), random(255));
  colorB = color(50, 50, 50);
  let gradualColor1 = lerpColor(colorA, colorB, mix2);

  for (var i = 0; i < number; i++) {
    push();
    stroke(gradualColor1);
    noFill();

    rotateValue = (frameCount / frameCount + i * 5) * 150;
    rotate(rotateValue);

    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    rect(x, y, w, h, 20);

    pop();
  }
}

function flower_victory1() {
  background(0, 220);
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  for (var i = 0; i < number; i++) {
    push();
    stroke(r, g, b);
    noFill();

    value -= 0.4;
    rotateValue = (frameCount / value + i * 5) * 150;
    rotate(rotateValue);

    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    rect(x, y, w, h, 20);

    pop();
  }
}

function flower_victory2() {
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  for (var i = 0; i < number; i++) {
    push();
    noFill();

    rotateValue = (frameCount / value + i * 5) * 150;
    rotate(rotateValue);

    x = 1;
    y = 1;

    w = size - i * 2;
    h = size - i * 2;

    let a = sin(frameCount) * 2;
    a = map(a, -1, 1, 1, 1.5);
    scale(a);

    stroke(r, g, b);

    rect(x, y, w, h, 20);

    pop();
  }
}

function drawWhitePollen1() {
  for (let i = 0; i < x1Pos.length; i++) {
    diameter1 = sizes[i] + sin(frameCount) * 5;

    let mixColor = map(sin(frameCount), -1, 1, 0.0, 1.0);
    mix1 = mix1 + (mixColor - mix1) * easing1;

    colorA = color(236, 236, 236);
    colorB = color(246, 246, 246);
    let gradualColor1 = lerpColor(colorA, colorB, mix1);

    noStroke();
    fill(gradualColor1);
    ellipse(x1Pos[i], y1Pos[i], diameter1);

    bounce1(i);
  }
}

function drawRedPollen1() {
  for (let j = 0; j < x2Pos.length; j++) {
    let mixColor = map(sin(frameCount), -1, 1, 0.0, 1.0);
    mix1 = mix1 + (mixColor - mix1) * easing1;

    colorD = color(255, 82, 82);
    colorC = color(255, 123, 123);
    let gradualColor2 = lerpColor(colorC, colorD, mix1);

    diameter2 = sizes[j] + sin(frameCount) * 5;

    noStroke();
    fill(gradualColor2);
    circle(x2Pos[j], y2Pos[j], diameter2);
    bounce2(j);
  }
}
//Could not figure out how to make this work
/*
function generateBad(index){
  
  xNew = x2Pos[index];
  yNew = y2Pos[index];
  
  x2Pos.push(xNew);
  y2Pos.push(yNew);
  x2Spd.push(random(-1, 1));
  y2Spd.push(random(-1, 1));
  sizes.push(random(10, 12));

}
*/

function drawWhitePollen2() {
  for (let i = 0; i < x1Pos.length; i++) {
    x1Pos[i] += x1Spd[i];
    y1Pos[i] += y1Spd[i];

    translate(0, 0);
    diameter1 = sizes[i] + sin(frameCount);

    let mixColor = map(sin(frameCount), -1, 1, 0.0, 1.0);
    mix1 = mix1 + (mixColor - mix1) * easing1;

    colorA = color(236, 236, 236);
    colorB = color(246, 246, 246);
    let gradualColor1 = lerpColor(colorA, colorB, mix1);

    noStroke();
    fill(gradualColor1);
    ellipse(x1Pos[i], y1Pos[i], diameter1);

    bounce1(i);
  }
}

function drawRedPollen2() {
  for (let j = 0; j < x2Pos.length; j++) {
    x2Pos[j] += x2Spd[j];
    y2Pos[j] += y2Spd[j];

    translate(0, 0);

    let mixColor = map(sin(frameCount), -1, 1, 0.0, 1.0);
    mix1 = mix1 + (mixColor - mix1) * easing1;

    colorD = color(255, 82, 82);
    colorC = color(255, 123, 123);
    let gradualColor2 = lerpColor(colorC, colorD, mix1);

    diameter2 = sizes[j] + sin(frameCount);

    noStroke();
    fill(gradualColor2);
    circle(x2Pos[j], y2Pos[j], diameter2);

    bounce2(j);
  }
}

function drawRedPollen3() {
  for (let j2 = 0; j2 < x3Pos.length; j2++) {
    x3Pos[j2] += x3Spd[j2];
    y3Pos[j2] += y3Spd[j2];

    let mixColor = map(sin(frameCount), -1, 1, 0.0, 1.0);
    mix1 = mix1 + (mixColor - mix1) * easing1;

    colorD = color(255, 82, 82);
    colorC = color(255, 123, 123);
    let gradualColor2 = lerpColor(colorC, colorD, mix1);

    diameter2 = sizes[j2] + sin(frameCount);

    noStroke();
    fill(gradualColor2);
    circle(x3Pos[j2], y3Pos[j2], diameter2);
    bounce3(j2);
  }
}

function drawRedPollen4() {
  for (let j3 = 0; j3 < x4Pos.length; j3++) {
    x4Pos[j3] += x4Spd[j3];
    y4Pos[j3] += y4Spd[j3];

    let mixColor = map(sin(frameCount), -1, 1, 0.0, 1.0);
    mix1 = mix1 + (mixColor - mix1) * easing1;

    colorD = color(255, 82, 82);
    colorC = color(255, 123, 123);
    let gradualColor2 = lerpColor(colorC, colorD, mix1);

    diameter2 = sizes4[j3] + sin(frameCount);

    noStroke();
    fill(gradualColor2);
    circle(x4Pos[j3], y4Pos[j3], diameter2);
    bounce4(j3);
  }
}

function bounce1(index) {
  let x1 = x1Pos[index];
  let y1 = y1Pos[index];

  if (x1 > width + 20 || x1 < 0 - 20) {
    x1Spd[index] = x1Spd[index] * -1;
  }

  if (y1 > height + 20 || y1 < 0 - 20) {
    y1Spd[index] = y1Spd[index] * -1;
  }
}

function bounce2(index) {
  let x2 = x2Pos[index];
  let y2 = y2Pos[index];

  if (x2 > width + 20 || x2 < 0 - 20) {
    x2Spd[index] = x2Spd[index] * -1;
  }

  if (y2 > height + 20 || y2 < 0 - 20) {
    y2Spd[index] = y2Spd[index] * -1;
  }
}

function bounce3(index) {
  let x3 = x3Pos[index];
  let y3 = y3Pos[index];

  if (x3 > width + 20 || x3 < 0 - 20) {
    x3Spd[index] = x3Spd[index] * -1;
  }

  if (y3 > height + 20 || y3 < 0 - 20) {
    y3Spd[index] = y3Spd[index] * -1;
  }
}

function bounce4(index) {
  let x4 = x4Pos[index];
  let y4 = y4Pos[index];

  if (x4 > width + 20 || x4 < 0 - 20) {
    x4Spd[index] = x4Spd[index] * -1;
  }

  if (y4 > height + 20 || y4 < 0 - 20) {
    y4Spd[index] = y4Spd[index] * -1;
  }
}

/*
function Remove1(index) {
  x1Pos.splice(index, 1);
  y1Pos.splice(index, 1);
  x1Spd.splice(index, 1);
  y1Spd.splice(index, 1);
  sizes.splice(index, 1);
}
*/

function Remove2(index) {
  x2Pos.splice(index, 1);
  y2Pos.splice(index, 1);
  x2Spd.splice(index, 1);
  y2Spd.splice(index, 1);
  sizes.splice(index, 1);
}

function Remove3(index) {
  x3Pos.splice(index, 1);
  y3Pos.splice(index, 1);
  x3Spd.splice(index, 1);
  y3Spd.splice(index, 1);
  sizes.splice(index, 1);
}

function Remove4(index) {
  x4Pos.splice(index, 1);
  y4Pos.splice(index, 1);
  x4Spd.splice(index, 1);
  y4Spd.splice(index, 1);
  sizes4.splice(index, 1);
}

function instructions() {
  background(0);

  textAlign(CENTER);
  textWrap(WORD);
  noStroke();
  fill("white");
  textStyle(BOLDITALIC);
  textLeading(30);
  variable = map(sin(frameCount), -1, 1, 16, 20);
  textSize(variable);
  text(
    "Oh no! You’ve touched the flower, infecting it with foreign pathogens and",
    width / 2,
    200,
    width
  );
  text(
    "scattering the life-energy pollen. Quickly remove the infected red pollen to",
    width / 2,
    230,
    width
  );

  text(
    "save the flower, but be careful not to remove any of the healthy pollen or",
    width / 2,
    260,
    width
  );
  text("else you will hasten the flower’s demise.", width / 2, 290, width);
}

button.addEventListener("click", function () {
  skip = true;
  button.style.display = "none";
});

function success() {
  background(0);
  textAlign(CENTER);
  textWrap(WORD);
  stroke("white");
  fill("white");
  textStyle(BOLDITALIC);
  textLeading(30);
  variable = map(sin(frameCount), -1, 1, 16, 20);
  textSize(variable);
  text(
    "Congratulations! You have succeeded in removing the infected",
    width / 2,
    200,
    width
  );
  text(
    "pollen in time. The flower is saved, and humanity’s last",
    width / 2,
    230,
    width
  );
  text(
    "remaining vestige of hope for botanical life has been",
    width / 2,
    260,
    width
  );
  text("preserved.", width / 2, 290, width);

  variable = map(sin(frameCount), -1, 1, 12, 16);
  textSize(variable);
  textStyle(NORMAL);
  textAlign(CENTER);
  noStroke();
  fill("white");
  text("Press any key to play again!", width / 2, 400);

  if (keyIsPressed === true) {
    reset();
  }
}

function failure() {
  background(0);
  textAlign(CENTER);
  textWrap(WORD);
  noStroke();
  fill(167, 0, 0);

  textStyle(BOLDITALIC);
  textLeading(30);

  variable = map(sin(frameCount), -1, 1, 16, 20);
  textSize(variable);
  text(
    "Alas, you have failed to remove the infected pollen in time.",
    width / 2,
    200,
    width
  );
  text(
    "The flower is lost and humanity’s last remaining vestige of hope for",
    width / 2,
    230,
    width
  );
  text("botanical life has faded into oblivion.", width / 2, 260, width);
  variable = map(sin(frameCount), -1, 1, 12, 16);
  textSize(variable);
  textStyle(NORMAL);
  textAlign(CENTER);
  noStroke();
  fill("white");
  text("Press any key to play again!", width / 2, 400);

  if (keyIsPressed === true) {
    reset();
  }
}

function caveBackground() {
  background(0, 15);
  push();
  translate(width / 2, height / 2);
  stroke(255);
  noFill();
  angleMode(RADIANS);

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.02) {
    let xoff = map(cos(a), -1, 1, 0, 5);
    let yoff = map(sin(a), -1, 1, 0, 5);
    const r = map(noise(xoff, yoff), 0, 1, width, height);

    let x = r * cos(a);
    let y = r * sin(a);
    noStroke();
    fill(173, 173, 173);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.02) {
    let xoff = map(cos(a), -1, 1, 0, 5);
    let yoff = map(sin(a), -1, 1, 0, 5);
    const r = map(noise(xoff, yoff), 0, 1, 325, 425);

    let x = r * cos(a);
    let y = r * sin(a);
    noStroke();
    fill(153, 153, 153);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.02) {
    let xoff = map(cos(a), -1, 1, 0, 4);
    let yoff = map(sin(a), -1, 1, 0, 4);
    const r = map(noise(xoff, yoff), 0, 1, 265, 365);

    let x = r * cos(a);
    let y = r * sin(a);
    noStroke();

    fill(119, 119, 119);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.02) {
    let xoff = map(cos(a), -1, 1, 0, 4);
    let yoff = map(sin(a), -1, 1, 0, 4);
    const r = map(noise(xoff, yoff), 0, 1, 225, 325);

    let x = r * cos(a);
    let y = r * sin(a);
    noStroke();
    fill(85, 85, 85);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.02) {
    let xoff = map(cos(a), -1, 1, 0, 2);
    let yoff = map(sin(a), -1, 1, 0, 2);
    const r = map(noise(xoff, yoff), 0, 1, 170, 320);

    let x = r * cos(a);
    let y = r * sin(a);

    noStroke();

    fill(51, 51, 51);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.02) {
    let xoff = map(cos(a), -1, 1, 0, 2);
    let yoff = map(sin(a), -1, 1, 0, 2);
    const r1 = map(noise(xoff, yoff), 0, 1, 130, 280);

    let x1 = r1 * cos(a);
    let y1 = r1 * sin(a);
    noStroke();
    fill(17, 17, 17);
    vertex(x1, y1);
  }
  endShape(CLOSE);

  pop();
}

function reset() {
  x1Pos = [];
  y1Pos = [];
  x2Pos = [];
  y2Pos = [];
  x3Pos = [];
  y3Pos = [];
  x4Pos = [];
  y4Pos = [];

  x1Spd = [];
  y1Spd = [];
  x2Spd = [];
  y2Spd = [];
  x3Spd = [];
  y3Spd = [];
  x4Spd = [];
  y4Spd = [];

  sizes = [];
  sizes4 = [];

  total1 = 20;
  total2 = 20;
  total3 = 10;
  total4 = 10;

  q = 0;
  mix1 = 0;
  easing1 = 0.05;
  diameter1 = 0;
  diameter2 = 0;

  size = 40;
  number = 20;
  angle = 20;
  x = 0;
  y = 0;
  death_sequence = false;
  logframes = 0;
  mix2 = 0;
  easing2 = 0.05;
  value = 150;
  counter = 0;
  counter_target = 1;
  buttonOn = false;
  button = document.getElementById("skip");
  skip = false;
  zoff = 0;
  start_timer1 = 22;
  start_timer2 = 17;
  start_timer3 = 16;

  w1 = 3;
  h1 = 6;
  ifsuccess = false;

  for (let i = 0; i < total1; i++) {
    x1Pos.push(random(0, width));
    y1Pos.push(random(0, height));
    x1Spd.push(random(-1, 1));
    y1Spd.push(random(-1, 1));
    sizes.push(random(10, 15));
  }

  for (let j = 0; j < total2; j++) {
    x2Pos.push(random(0, width));
    y2Pos.push(random(0, height));
    x2Spd.push(random(-1, 1));
    y2Spd.push(random(-1, 1));
    sizes.push(random(10, 12));
  }

  for (let j2 = 0; j2 < total3; j2++) {
    x3Pos.push(random(0, width));
    y3Pos.push(random(0, height));
    x3Spd.push(random(-1, 1));
    y3Spd.push(random(-1, 1));
    sizes.push(random(10, 12));
  }

  for (let j3 = 0; j3 < total4; j3++) {
    x4Pos.push(random(0, width));
    y4Pos.push(random(0, height));
    x4Spd.push(random(-1, 1));
    y4Spd.push(random(-3, 3));
    sizes4.push(random(15, 18));
  }
}
