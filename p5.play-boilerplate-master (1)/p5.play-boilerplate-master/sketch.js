const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var MyEngine, MyWorld, ball, ground;
function setup() {
  createCanvas(400,400);
  myEngine=Engine.create()
  myWorld=myEngine.world
  

  var options={
    restitution:1.0
  }
  ball=Bodies.circle(200,200,50, options)
 
  var goptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,goptions)
  


  World.add(myWorld,ground)
  
  console.log(ball)
  console.log(ball.position.x)
  console.log(ball.position.y)
}

function draw() {
  background(255,255,255);
  Engine.update(myEngine)  
 circle(ball.position.x,ball.position.y,30) 
 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
}