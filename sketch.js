
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,rubberball,ground;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,sand11,sand12;
var sand13,sand14,sand15,sand16,sand17,sand18,sand19,sand20;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer= new Hammer(1200,800,90,35)

    stone= new Stone(400,200)

    rubberball= new Rubber(550,200)


    sand1= new Sand(630,200)
    sand2= new Sand(640,200)
    sand3= new Sand(650,200)
    sand4= new Sand(660,200)
    sand5= new Sand(670,200)
    sand6= new Sand(500,200)
    sand7= new Sand(510,200)
    sand8= new Sand(520,200)
    sand9= new Sand(530,200)
    sand10= new Sand(720,200)
    sand11= new Sand(730,200)
    sand12= new Sand(730,190) 
    sand13= new Sand(750,200) 
    sand14= new Sand(480,200) 
    sand15= new Sand(490,200) 
    sand16= new Sand(540,200) 
    sand17= new Sand(340,200) 
    sand18= new Sand(330,200)
    sand19= new Sand(320,200) 
    sand20= new Sand(310,200)  



	ground=new Ground(650,height,1300,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  sand15.display();
  sand16.display();
  sand17.display();
  sand18.display();
  sand19.display();
  sand20.display();


  hammer.display();
  stone.display();
  rubberball.display();
  ground.display();

  
  drawSprites();
 
}



