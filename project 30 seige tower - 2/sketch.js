const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var slingshot,star;


//fourth line of ground2
box_a1,box_a2,box_a3,box_a4,box_a5,box_a6;
//third line of ground2
box_a7,box_a8,box_a9,box_a10;
//second line of ground2
box_a11,box_a12;
//first line of ground2
box_a13; 

//fourth line of ground3
box_b1,box_b2,box_b3,box_b4,box_b5,box_b6;
//third line of ground3
box_b7,box_b8,box_b9,box_b10;
//second line of ground3
box_b11,box_b12;
 //first line of ground3
 box_b13;

 function preload() {
    backgroundImg = loadImage("sprites/bckg.png");
}


function setup() {
   var canvas = createCanvas(1200,600);
   engine = Engine.create();
   world = engine.world;
    
    box_a1 = new Box1(450,350,40,50); 
    box_a2 = new Box1(490,350,40,50);
    box_a3 = new Box1(530,350,40,50);
    box_a4 = new Box1(570,350,40,50);
    box_a5 = new Box1(610,350,40,50);
    box_a6 = new Box1(650,350,40,50);

    box_a7 = new Box2(490,300,40,50); 
    box_a8 = new Box2(530,300,40,50);
    box_a9 = new Box2(570,300,40,50);
    box_a10 = new Box2(610,300,40,50);

    box_a11 = new Box1(530,250,40,50);
    box_a12 = new Box1(570,250,40,50);

    box_a13 = new Box2(550,200,40,50);

    box_b1 = new Box1(900,225,40,50);
    box_b2 = new Box1(940,225,40,50);
    box_b3 = new Box1(980,225,40,50);
    box_b4 = new Box1(1020,225,40,50);
    box_b5 = new Box1(1060,225,40,50);
    box_b6 = new Box1(1100,225,40,50);

    box_b7 = new Box2(940,175,40,50);
    box_b8 = new Box2(980,175,40,50);
    box_b9 = new Box2(1020,175,40,50);
    box_b10 = new Box2(1060,175,40,50);

    box_b11 = new Box1(980,125,40,50);
    box_b12 = new Box1(1020,125,40,50);

    box_b13 = new Box2(1000,75,40,50);

    ground1 = new Ground(600,550,1250,15);
    ground2 = new Ground(575,410,300,10);
    ground3 = new Ground(1025,285,300,10);

    star =new Star(100,100);
    slingshot = new SlingShot(star.body,{x:200,y:200});
}

function draw() {
  //background(225,225,255);  
  background(backgroundImg);
   strokeWeight(3);
   Engine.update(engine);
   box_a1.display();
   box_a2.display();
   box_a3.display();
   box_a4.display();
   box_a5.display();
   box_a6.display();
   box_a7.display();
   box_a8.display();
   box_a9.display();
   box_a10.display();
   box_a11.display();
   box_a12.display();
   box_a13.display();

   box_b1.display();
   box_b2.display();
   box_b3.display();
   box_b4.display();
   box_b5.display();
   box_b6.display();
   box_b7.display();
   box_b8.display();
   box_b9.display();
   box_b10.display();
   box_b11.display();
   box_b12.display();
   box_b13.display();

   star.display();
   slingshot.display();

   ground1.display();
   ground2.display();
   ground3.display();

    
    
  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(star.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(star.body);
    }
}
 