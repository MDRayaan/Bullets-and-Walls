var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  wall=createSprite(600, 200,thickness,height/2);
  wall.shapeColor=(80,80,80)
  bullet=createSprite(50,200,50,15)
  bullet.shapeColor="white"
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(deformation>10){
  bullet.shapeColor=color("red");
}

if(deformation<10){
  bullet.shapeColor=color("green");
}

}
  drawSprites();
}