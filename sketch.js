var Fixed_it 
var Dont_stop

function setup() {
  createCanvas(800,800);
  Fixed_it = createSprite(400,400,100,100)
  Fixed_it.shapeColor = "Red"
  Dont_stop = createSprite(20,20,100,100)
}

function draw() {
  background(0);
  Dont_stop.x=mouseX
  Dont_stop.y=mouseY
  // if(Dont_stop.x - Fixed_it.x <= Fixed_it.width/2 + Dont_stop.width/2  &&  
  //    Fixed_it.x - Dont_stop.x <= Fixed_it.width/2 + Dont_stop.width/2  &&
  //    Dont_stop.y - Fixed_it.y <= Fixed_it.height/2 + Dont_stop.height/2  &&  
  //    Fixed_it.y - Dont_stop.y <= Fixed_it.height/2 + Dont_stop.height/2){
  //    background(255,255,255)
  // } 
  if(Dont_stop.x - Fixed_it.x == Fixed_it.width/2 + Dont_stop.width/2){
    Fixed_it.velocityX=-4 
  }
  else
  if(Fixed_it.x - Dont_stop.x == Fixed_it.width/2 + Dont_stop.width/2){
     Fixed_it.velocityX=4 
  }
  else
  if(Dont_stop.y - Fixed_it.y == Fixed_it.height/2 + Dont_stop.height/2){
    Fixed_it.velocityY=-4 
  }
  else
  if(Fixed_it.y - Dont_stop.y == Fixed_it.height/2 + Dont_stop.height/2){
    Fixed_it.velocityY=4 
  } 
  drawSprites()
}