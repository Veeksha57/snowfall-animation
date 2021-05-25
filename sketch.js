const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;
var maxDrops=100;
var saveMe;

function preload() {
    backgroundImg = loadImage("snow3.jpg");
    saveMe=loadSound("BTS-Save-Me.mp3");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(1200,700);
   // saveMe.play();
    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,1200), random(0,1200)));
        }

    }
    saveMe.play();
}

function draw(){
    Engine.update(engine);
    background(backgroundImg);
  

        for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    drawSprites();
}   

