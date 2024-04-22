

function preload(){
  
  myFont = loadFont("assets/font.ttf")
  //forestSound = loadSound("assets/forestAmbience.mp3")
}

function setup() {

  let myCanvas = createCanvas(1200, 600);
  myCanvas.parent("canvasContainer")
  
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255, 255, 255);
  textFont(myFont);
  
  //forestSound.play();
  
  //myVid = createVideo("assets/convoVid_3.mp4");
  //myVid.size(1200, 600);
  //myVid.volume(1);
  //myVid.noLoop();
  //myVid.hide();
  
  //myVid.onended(handleEnd);
  

}

function draw() {
  background(0);
}