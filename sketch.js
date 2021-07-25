const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);

    ball1 = new Ball(810, 350,10);
    ball2 = new Ball(600, 320,20);
    ball3 = new Ball(810, 240,40);
    ball4 = new Ball(810, 300,60);
    ball5 = new Ball(810, 200,90);
    
    log1 = new Log(810,260,100, PI/2);

    bird = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   
    ground.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    log1.display();
    bird.display();
}