const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var divisionHeight=300;

var particals = [];
var plinkos = [];
var divisions = [];



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  for (
    var k = 0; 
    k <=width; 
    k = k + 80
    ){
    divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight))
  console.log(k)

  for (var j = 40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <= width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175))
  }
}
  
  if(frameCount%60===0){
    particals.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  ground = new Ground(240,780,480,20)



}

function draw() {
  background("black");  
  drawSprites();

  ground.display();
  for(var k = 0; k <divisions.length;k++){
    divisions[k].display();
   // console.log(divisions[k])
  }
  for(var j = 0; j <plinkos.length;j++){
    plinkos[j].display();}

  
}
