
let myFont;
let myVid;
let isDone = false;
let logframes = 0;

function preload(){  

myFont = loadFont("assets/font.ttf")

}

function setup() {

  let myCanvas = createCanvas(1200, 600);
  myCanvas.parent("canvasContainer")
  
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255, 255, 255);
  textFont(myFont);

  myVid = createVideo("assets/bgmEpilogue_Final1.mp4")
  myVid.size(1200, 600);
  myVid.volume(1);
  myVid.noLoop();
  
  myVid.onended(handleEnd);
  myVid.play();

}

function draw() {
  background(0);

  let img = myVid.get();
  image(img, 0, 0);

  if(isDone){
    textSize(50)
    textFont(myFont)
    textAlign(CENTER, CENTER)
    let r = map(frameCount, logframes, logframes + 100, 0, 255)
    fill(r, 0, 0)
    text("What is your favorite fairytale?", width/2, height/2);
  }

}

function handleEnd() {
isDone = true;
logframes = frameCount;
}