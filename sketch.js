let space;
let envy;
let song;

function preload() {
  song = loadSound('space.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  space = loadImage("space.jpg");
  envy = loadImage("Envy Planet.png"); 
  song.loop();
}

function draw() {
  background(220);
  noStroke(); 
  
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.001);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  texture(space);
  sphere(1000);
  pop();
  
//  translate(0,200,0); 
//  push(); 
//  rotateY(frameCount * 0.005);
//  texture(envy);
//  plane(260, 220);
//  pop();
  
}
