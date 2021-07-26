const Engine= Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,platform
var engine, world;


function preload(){
polyImage=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
 

    ground = new Ground();

    stand1=new Ground(390,300,250,10);

    box1=new Box(300,275,30,40);
    box2=new Box(330,275,30,40);
    box3=new Box(360,275,30,40);
    box4=new Box(390,275,30,40);
    box5=new Box(420,275,30,40);
    box6=new Box(450,275,30,40);
    box7=new Box(480,275,30,40);

    box8=new Box(330,235,30,40);
    box9=new Box(360,235,30,40);
    box10=new Box(390,235,30,40);
   box11=new Box(420,235,30,40);
    box12=new Box(450,235,30,40);

    box13=new Box(360,195,30,40);
    box14=new Box(390,195,30,40);
    box15=new Box(420,195,30,40);

    box16=new Box(390,155,30,40);

    stand2=new Ground(690,200,250,10);
    box17=new Box(600,175,30,40);
   box18=new Box(630,175,30,40);
    box19=new Box(660,175,30,40);
    box20=new Box(690,175,30,40);
    box21=new Box(720,175,30,40);
    box22=new Box(750,175,30,40);
    box23=new Box(780,175,30,40);

    box24=new Box(680,135,30,40);
    box25=new Box(690,135,30,40);
    box26=new Box(720,135,30,40);
   box27=new Box(650,135,30,40);
    box28=new Box(680,135,30,40);

    box29=new Box(660,95,30,40);
    box30=new Box(690,95,30,40);
    box31=new Box(720,95,30,40);

    box32=new Box(690,55,30,40);
    ball=Bodies.circle(50,200,20)
    World.add(world,ball)
    slingShot=new SlingShot(this.ball,{x:100,y:200})
}

function draw(){
    background(0);
    text("drag and relase the ball use towards the box",200,40)
    Engine.update(engine);
    strokeWeight(4);
   ground.display();
  slingShot.display()
   fill ("skyblue")
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   fill("red")
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box24.display();
   box25.display();
   box26.display();
   box27.display();
   box28.display();
   fill("yellow")
   

   box13.display();
   box14.display();
   box15.display();
   box29.display();
   box30.display();
   box31.display();
   fill("green")
   box16.display();
   box32.display();
  
   stand1.display()
   stand2.display()
imageMode (CENTER);
image(polyImage,ball.position.x,ball.position.y,40,40)



}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})

}
function mouseReleased(){
    slingShot.fly()
}

