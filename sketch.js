
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let ball;

let wall1;
let wall2;
let wall3;
let wall4;
let wall5;
let wall6;

function setup() {
	createCanvas(800, 660);

  
	engine = Engine.create();
	world = engine.world;

	wall1 = new Wall (400,650,1000,20);
	wall2 = new Wall (570,585,10,110);
	wall3 = new Wall (760,570,10,150);
	wall4 = new Wall (-1,400,2,1000);
	wall5 = new Wall (801,400,2,1000);
	wall6 = new Wall (400,-2,1000,20);

	let op = {

	restitution : 0.10

	}

	//Create the Bodies Here.
	ball = Bodies.circle(200,640,30,op);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);

  ellipse(ball.position.x,ball.position.y,30);

  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  wall5.show();
  wall6.show();

  if (keyDown("space")){

	force();

  }

  wall4.visible = false;
  wall5.visible = false;
  wall6.visible = false;
  
  drawSprites();

}


function force (){


    Matter.Body.applyForce (ball,{x:0,y:0},{x: 0.05,y:0.24})


}
