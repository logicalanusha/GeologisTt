const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;
var stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer (10,100);
    
    
    iron = new Iron (600,200,50,50)
    stone = new Stone(300, 200, 50, 50);
  


}
function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

  iron.display()
  stone.display()

    
 
}