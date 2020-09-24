var helicopterIMG, helicopterSprite, packageSprite,packageIMG, b,s1,s2;
var packageBody,ground,r1,r2,r3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale= 0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	var options = {
		isStatic: true
	}

	fill ("red")
	b = Bodies.rectangle(400,height-50,200,20,options);
	World.add(world,b);
	
	s1 = Bodies.rectangle(500,height-90,200,20,options);
	World.add(world,s1);
	
	s2 = Bodies.rectangle(300,height-90,200,20,options);
	World.add(world,s2);
	

	


	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0,isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  	rect (b.position.x,b.position.y,200,20)
	rect (s1.position.x,s1.position.y,20,100)
	rect (s2.position.x,s2.position.y,20,100)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
		
	

  
  }
}



