
var wall,thickness;


var bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);

    thickness=random(22,83)
	speed=random(223,321)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1200,200,thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
  function hascollided(lbullet,lwall)
  {
	  bulletRightEdge=1bullet.x+1bullet.weidth;
	  wallLeftEdge=1wall.x
	  if(bulletRightEdge=>wallLeftEdge)
	  {
		  return true
	  }
	  return false
  }
  if(hascollided(bullet,wall))
  {
  
  
	  bullet.velocityX=0;
	  var damage=0.5*weight=speed*speed/(thickness*thickness*thickness);
	  
	  if(damage>10)
	  {
	  Wall.shapecolor=color(255,0,0);
	  }
	  
	  
	  If(damage<10)
	  {
	  Wall.shapecolor=color(0,255,0);
	  }
	  
  
  
  drawSprites();
 
}

