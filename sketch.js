//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella;
var maxDrops = 5000;
var drops = [];
function preload(){
   
}

function setup(){
    createCanvas(500,700); 

    engine = Engine.create();
	world = engine.world;

    umbrella = new Umbrella(250,600);
    Engine.run(engine);
}

function draw(){
    background("black");

    if(frameCount%2===0){
        drops.push(new Drop(random(0,500),random(0,700)));
    }
      for(var j = 0 ; j < drops.length; j++){
        drops[j].display();
      }
    

    
    umbrella.display();
    
}   