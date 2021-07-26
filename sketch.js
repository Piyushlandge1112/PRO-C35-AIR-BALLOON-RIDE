var balloon2
var database
var position

function preload(){
backgroundImage= loadImage("cl2.jpg")
balloonImage= loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
balloonImage2= loadImage("Hot Air Ballon-02.png")
}
function setup() {
  createCanvas(3000,800);
  database= firebase.database();

 
  balloon2= createSprite(100,200,40,40)
  balloon2.addAnimation("balloon",balloonImage)
  balloon2.scale=0.4
  var balloonPosition= database.ref('balloon/position')
  balloonPosition.on("value",readPosition, showError)
}

function draw() {
  background(backgroundImage); 
 
  if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    writePosition(0,+1);
  }
  drawSprites();
  
  
  }
  
   balloon2.addAnimation("balloon",balloonImage)
   balloon2.scale=balloon2.scale-0.01
  
 
    balloon2.addAnimation("balloon",balloonImage)
    balloon2.scale=balloon2.scale+0.01
  
  console.log(balloon2.x)
  console.log(balloon2.y)
  drawSprites();


function updateHeight(x,y){
database.ref('balloon/position').set({
  'x': position.x+ x,
  'y': position.y+ y
})
}
function readPosition(data){
  position=data.val();
  balloon2.x = position.x;
  balloon2.y= position.y;
}
function showError(){
  console.log("An error in writing the database")
}