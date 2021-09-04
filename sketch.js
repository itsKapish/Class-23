const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ground, box1, box2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world
  

  
  ground = new Ground(400, 400, 800, 30);

  box1 = new Box(400, 200, 50, 50);

  box2 = new Box(430, 100, 50, 100);

  box3 = new Box(400, 200, 50, 50);

  box4 = new Box(430, 100, 50, 100);

  box5 = new Box(400, 200, 50, 50);

  box6 = new Box(430, 100, 50, 100);

 console.log();

}

function draw() {
  background("#32CD32");  

Engine.update(engine);

Matter.Body.setPosition(box1.body, {x: mouseX, y:mouseY})

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

}











