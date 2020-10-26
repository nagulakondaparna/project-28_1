
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
// Games states
// var PLAY=1;
// var END=0;
// var gamestate=PLAY;

//Score 
// var Score =0;
// textSize(20);
// textFont("Georgia");

var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(230);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
 // text("Score:"+Score,270,100); 
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango1.scale=0.01;

  mango2.display();
  mango2.scale=0.01;

  mango3.display();
  mango3.scale=0.01;

  mango4.display();
  mango4.scale=0.01;

  mango5.display();
  mango5.scale=0.01;

  mango6.display();
  mango6.scale=0.01;
  
  mango7.display();
  mango7.scale=0.01;

  mango8.display();
  mango8.scale=0.01;

  mango9.display();
  mango9.scale=0.01;

  mango10.display();
  mango10.scale=0.01;

  mango11.display();
  mango11.scale=0.01;
  
  mango12.display();
  mango12.scale=0.01;

  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);


// if(stoneObj.isTouching(mango1)){
// Score=Score+1;
// }


// if(stoneObj.isTouching(mangoob2)){
//   Score=Score+2;
//   }

//   if(stoneObj.isTouching(mango3)){
//     Score=Score+3;

//     }


//     if(stoneObj.isTouching(mango4)){
//       Score=Score+4;
//       }

//       if(stoneObj.isTouching(mango5)){
//         Score=Score+5;
//         }


//         if(stoneObj.isTouching(mango6)){
//           Score=Score+6;
//           }


//           if(stoneObj.isTouching(mango7)){
//             Score=Score+7;
//             }

//             if(stoneObj.isTouching(mango8)){
//               Score=Score+8;
//               }

//               if(stoneObj.isTouching(mango9)){
//                 Score=Score+9;
//                 }


//                 if(stoneObj.isTouching(mango10)){
//                   Score=Score+10;
//                   }

}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }