const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground;
var counter;
var c = 0
var no,noImage;
var aim;
var no1,noImage1

function preload()
{
	noImage = loadImage("na.png")
	noImage1 = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(850, 400);
	engine = Engine.create();
	world = engine.world;
	no = createSprite(425,200,850,400)
	no.addImage(noImage)

	no1 = createSprite(650,250,860,400)
	no1.scale = 0.9
	no1.addImage(noImage1)

	ball=new Ball(75,300);
	ground=new Ground(600,380,1200,20);
	side1=new Dustbin(550,220,20,240);
	side1.visible = false
	side2=new Dustbin(750,220,20,240);
side3=new Dustbin(650,360,220,10);
rect(100,330,100,20)
counter = createSprite(20,20,50,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  side1.display();
side2.display();
  side3.display();
  ground.display();

  
  //aim.display();

  side3.scale =  6
  if(keyWentDown("c")&& counter.width < 100){

counter.width = counter.width + 10

  }

  
if(keyDown("Enter")){
no.visible = false

}

//rect(100,100,200,20)


  
  drawSprites();
}
function keyPressed(){ 
	


		if(keyCode === UP_ARROW&&counter.width === 50){
			Body.applyForce(ball.body,ball.body.position,{x:42,y:-42}); 
			
			
		   } 
		   if(keyCode === UP_ARROW&&counter.width === 60){
			Body.applyForce(ball.body,ball.body.position,{x:55,y:-55}); 
			
		   } 

		   if(keyCode === UP_ARROW&&counter.width === 70){
			Body.applyForce(ball.body,ball.body.position,{x:62,y:-62}); 
			
		   } 
		   if(keyCode === UP_ARROW&&counter.width === 80){
			Body.applyForce(ball.body,ball.body.position,{x:75,y:-75}); 
			
		   } 

		   if(keyCode === UP_ARROW&&counter.width === 90){
			Body.applyForce(ball.body,ball.body.position,{x:80,y:-80}); 
			
		   } 
		   if(keyCode === UP_ARROW&&counter.width === 100){
			Body.applyForce(ball.body,ball.body.position,{x:95,y:-95}); 
			
		   } 
	}

