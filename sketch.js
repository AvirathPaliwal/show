const Engine = Matter.Engine;
 const World= Matter.World
 const Bodies = Matter.Bodies

 // ground
 var ground

 
 
 //plinko
 var plinko

var particles=[]
//for 
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var particle
var line

var gameState="START"
var gameState="END"
var score=0
function setup() {
  createCanvas(600,700);
  engine = Engine.create()
    world = engine.world;
    
    
   // var plinkos=[];
   //ground
  ground = new Ground(600,670,1300,20);

  //division
  for(var L =0;L <=width; L = L+100){
    
    divisions.push(new Division(L, height-divisionHeight/1.6, 10, divisionHeight));
  }
  //plinko
  for(var d =40; d <=width; d = d+50){
    plinkos.push(new Plinko (d,75));
  }
  for(var d =70; d <=width+5; d = d+40){
    plinkos.push(new Plinko (d,115));
  }
  for(var d =30; d <=width-50; d = d+50){
    plinkos.push(new Plinko (d,155));
  }
  for(var d =50; d <=width-50; d = d+40){
    plinkos.push(new Plinko (d,225));
  }
 
}

function draw() {
  background(0); 
  Engine.update(engine); 
 
  // ground
  fill("green")
  ground.display();
  //division
  for(var L =0; L < divisions.length; L++){
    fill("pink")
     divisions[L].display();
     }

 
  //plinko
   for(var d =0; d < plinkos.length; d++){
    fill("red")
     plinkos[d].display()
   }
  
   //particle
    if(particle!=null) 
    {
      particles.push( new Particle(random(10, 800), 10,10)); 
      particle.display();

      if(particle.body.position.y>560)
      {
        if(particle.body.position.x<100)
        {
          score=score+500;
          particle=null;
          if(count>=5) gameState="END";
        }
      }
    } 
    //score
      textSize(23);
      fill("yellow");
      text("SCORE : " + score ,50,30);
    //500 
      fill("lightblue");
      text("500",30,450);
      text("500",130,450);
      text("500",230,450);
    //200
      fill("brown")
      text("200",330,450);
      text("200",430,450);
    //100
      fill("red")
      text("100",530,450); 
      
}
function mousePressed(){
 if(gameState!=="END"){
    count++;
    particle = new Particle(mouseX,10,10,10);
       
 }
}