
let myFont;
//let myImage1;
//let myImage2;
//let myImage3;
//let alph = 255;
//let bgm;
let myVid
let isDone = false;
let logframes = 0;

function preload(){
  
  myFont = loadFont("assets/font.ttf")
  myImage1 = loadImage("assets/LRRH1.png")
  bgm = loadSound("assets/bgmEpilogue.mp3")

}

function setup() {

  let myCanvas = createCanvas(1200, 600);
  myCanvas.parent("canvasContainer")
  
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255, 255, 255);
  textFont(myFont);

  //bgm.play();

  //bgm.onended(handleEnd);
  
  myVid = createVideo("assets/bgmEpilogue_Final.mp4")
  myVid.size(1200, 600);
  myVid.volume(1);
  myVid.noLoop();
  myVid.hide();
  
  myVid.onended(handleEnd);
  myVid.play();
  
  //myVid = createVideo("assets/convoVid_3.mp4");
  //myVid.size(1200, 600);
  //myVid.volume(1);
  //myVid.noLoop();
  //myVid.hide();
  
  //myVid.onended(handleEnd);
  

}

function draw() {
  background(0);


  let img = myVid.get();
  image(img, 0, 0);

  if(isDone){
    //background(0);
    textSize(50)
    textFont(myFont)
    textAlign(CENTER, CENTER)
    let r = map(frameCount, logframes, logframes + 100, 0, 255)
    fill(r, 0, 0)
    text("What is your favorite fairytale?", width/2, height/2);
  }

  /*if(bgm.currentTime() <= 5){
    background(0)
    image(myImage1, 0, 0, 1200, 600)
    alph = map(bgm.currentTime(), 0, 4.5, 255, 0)
    fill(0, alph)
    rect(0, 0, width, height)
  } else if(bgm.currentTime() >= 5 && bgm.currentTime() <= 40){
    image(myImage1, 0, 0, 1200, 600)

  push()
  //rectMode(CENTER)
  //r1 = map(bgm.currentTime(), 4.5, 37, 0, 150)
  fill(0, 150)
  noStroke()
  rect(0, 0, width, height, 20)
  pop()

    r = map(bgm.currentTime(), 4.5, 37, 0, 255)
    fill(255)
    textWrap(WORD)
    textAlign(CENTER, CENTER)
    textSize(30)
    text("Moral: Children, especially attractive, well bred young ladies, should never talk to", width/2, height/2 - 80)
    text("strangers, for if they should do so, they may well provide dinner for a wolf. I say wolf,", width/2, height/2 - 40)
    text("but there are various kinds of wolves. There are also those who are charming, quiet, polite,", width/2, height/2)
    text("unassuming, complacent, and sweet, who pursue young women at home and in the", width/2, height/2 + 40)
    text("streets. And unfortunately, it is these gentle wolves who are the most dangerous ones of all", width/2, height/2 + 80)
    //text("all.", 100, 300, 1000)
  
    textAlign(RIGHT)
    textSize(25)
    text("- Charles Perrault, (Paris, 1697).", 400, 450, 700)
  } else if(bgm.currentTime() >= 37){
    image(myImage1, 0, 0, 1200, 600)
  }


  /*push()
  rectMode(CENTER)
  fill(0, 150)
  noStroke()
  rect(width/2, height/2 + 25, 1050, 400, 20)
  pop()


  fill(255)
  textWrap(WORD)
  textAlign(CENTER, CENTER)
  textSize(30)

  text("Moral: Children, especially attractive, well bred young ladies, should never talk to strangers, for if they should do so, they may well provide dinner for a wolf. I say wolf, but there are various kinds of wolves. There are also those who are charming, quiet, polite, unassuming, complacent, and sweet, who pursue young women at home and in the streets. And unfortunately, it is these gentle wolves who are the most dangerous ones of all.", 100, 300, 1000)

  textAlign(RIGHT)
  textSize(25)
  text("- Charles Perrault, (Paris, 1697).", 400, 450, 700)

  /*noStroke()
  alph = map(frameCount, 0, 20, 255, 0)
  fill(0, alph)
  rect(0, 0, width, height)

  console.log(frameCount)*/
}

function handleEnd() {
isDone = true;

logframes = frameCount;
}