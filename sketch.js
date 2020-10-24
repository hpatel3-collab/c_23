const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;
var Box1;
var ground;
function setup(){
    createCanvas(400,400)

    engine = Engine.create();
    world= engine.world;
    Box1 = new BOX1(100,200,70,70);
    fill ("yellow");
    Box2 = new BOX1(150,130,70,101);

    ground = new Ground(200,350,800,55);
}
function draw(){
    background(0)


    Engine.update(engine);
    Box1.display();
    ground.display();
    Box2.display();
}