var b1, b2
function setup() {
  createCanvas(800,400);
  b1=createSprite(400, 200, 50, 50);
b2= createSprite(600,200,30,30)
b1.shapeColor="green"
b2.shapeColor="yellow"
}

function draw() {
  background("grey");  
  b2.x=mouseX
  b2.y=mouseY
  if(((b2.x-b1.x)<((b1.width+b2.width)/2)) && ((b1.x-b2.x)<((b1.width+b2.width)/2)) && ((b2.y-b1.y)<((b1.height+b2.height)/2)) && ((b1.y-b2.y)<((b1.height+b2.height)/2))){
    b2.shapeColor="red"
    b1.shapeColor="red"
  }
  else{
    b1.shapeColor="green"
    b2.shapeColor="yellow"
  }
  console.log(b2.x-b1.x)
  drawSprites();
}