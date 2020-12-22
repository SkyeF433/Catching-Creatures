const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

var ash,ashImage;
var pokeball;
var ivy;
var pball
var back;

function preload()
{
ashImage=loadImage("Images/ash2.png");
back=loadImage("Images/back.jpg");

}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    pball=new Pokeball(910,180,12);
    ivy=new Enemy(68,450,100,100);
    
}

function draw(){
    background(back);
    Engine.update(engine);
    console.log(mouseX,mouseY);
    image(ashImage,900,100,100,300);
    pball.display();
    ivy.display();
}