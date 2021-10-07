var poop


function preload() {
poopImage=loadImage("Capture-removebg-preview.png")
}

function setup() {
  createCanvas(1200,500);

}

function draw() {
  background(220);
drawSprites();
if(keyDown("Space"))
{
  poop=createSprite(300,250)
 poop.addImage("abcd",poopImage)
  poop.scale=0.9
  textSize(25)
  text("Stop Stealing my bottle you little crap and find a job you retard.",400,390)
  
}
textSize(25)
text("Press Spacebar to read message",300,100)

}