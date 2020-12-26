var bullet,weight,speed;

var wall,thickness;

function setup(){
   createCanvas(1600,400)
   weight=random(22,222)
   speed=random(20,300)
   thickness=random(22,228)
   bullet=createSprite(350,200,50,10)
   bullet.shapeColor="yellow"
   bullet.velocityX=5
   wall=createSprite(1200,200,thickness,height/2)
   wall.shapeColor="white"
}
function draw(){
   background("black")
if(bullet.x-wall.x<bullet.width/2+wall.width/2
   &&wall.x-bullet.x<bullet.width/2+wall.width/2
  && bullet.y-wall.y<bullet.width/2+wall.width/2
  &&wall.y-bullet.y<bullet.width/2+wall.width/2){
   bullet.velocityX=0
   var damage=0.5*speed*weight*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor="red"
   }
   if(damage<10){
      wall.shapeColor="green"
   }
  }
   drawSprites()
}



   
