const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var ground;
var wedge;
var wall;
var angle=60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
      restitution:1
  }
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
    console.log(ball);

    var ground_options = {
        isStatic:true
    }
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    
    wedge = Bodies.rectangle(100,200,100,20,ground_options);
    World.add(world,wedge);

    wall = Bodies.rectangle (300,150,70,10,ground_options);
    World.add(world,wall);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  rectMode (CENTER);
  ellipseMode (RADIUS);

  Body.rotate(wedge,angle)

   push ();
   translate (wedge.position.x,wedge.position.y);
   rotate (angle);
   rect (0,0,100,20);
   pop ();

  angle= angle+0.1

  rect (wall.position.x, wall.position.y,70,20);
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x,ground.position.y,400,20);
}

