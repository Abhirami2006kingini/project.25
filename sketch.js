
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, dustbinImg;

function preload()
{
	dustbinImg = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1200, 400);

	dustbin = createSprite(993,259,200,15);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.6;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,370,1200,20);
	ground1 = new Ground(600,370,1200,20);
	ball = new Paper(190,345,40,40);
	wall1 = new Dustbin(1028,260,15,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  ball.display();
  ground.display();
  ground1.display();
  wall1.display();
 drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-70})
	}
}



