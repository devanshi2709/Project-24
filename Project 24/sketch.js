
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle,circleBody;
var Ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 circle = new paper(100,500,30);
	 Ground= new ground(400,700,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	 circle.display();
	 Ground.display();
  
  drawSprites();
 
}



