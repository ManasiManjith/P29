const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope
var fruit

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
rope = new Rope(8, {x:240, y:30})
fruit = Bodies.circle(300, 300, 15,{density:0.001})
Composite.add(rope.body,fruit)
var lastlink = rope.body.bodies.length - 2
console.log(rope.body.bodies[lastlink])
var link = Constraint.create({
  bodyA: rope.body.bodies[lastlink],
  bodyB: fruit,
  length: -10,
  stiffness:0.01

})

World.add(world,link)
// fruitcon = new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  ellipse(fruit.position.x, fruit.position.y, 30, 30)
  Engine.update(engine);
  

 
   
}
