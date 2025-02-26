let space = "csm"
let shapeX = 0
bubbleSize = 50
let fish;
let timer = 0;
let inc = 10;

function  preload(){
  fish=loadimage("fish.png")
}

// this runs once on page load
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// this runs 60 times a second
function draw() {
  let sec=second()
  console.log(sec)
  background(170,220,230);

  image(fish,0,0,500,timer)
  
  textSize(10);
  text(space,10,10)

  rect(shapeX,100,100,100)
  shapeX=shapeX + 5

  noFill()
  circle(windowWidth/2,windowHeight/2,bubbleSize)
  bubbleSize=bubbleSize+2
  
  // //stroke(255)
  // //strokeWeight(10)
  // noStroke()

  // fill(255,100,200)
  // rect(100,100,100,200)

  // fill(0,0,255)
  // circle(300,25,50)
  // line(0,0,windowWidth/2,windowHeight/2)

  // fill(50,255,50)
  // triangle(490,275,600,600,mouseX,mouseY)
}

function mouseClicked(){
  shapeX = 0
  bubbleSize = 0
}
