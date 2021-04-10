const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;
var box;
var ground;
var shoot;



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

stand = new Stand(650,200,20,70);
box = new Box(630,200,50,50);
box1 = new Box(630,190,50,50);
box2 = new Box(610,210,50,50);
shoot = new shoot(700,100,50,50)





  
}

function draw() {
  background(255,255,255);  
  drawSprites();

stand.display();
box.display();
box1.display();
box2.display();
shoot.display();









}