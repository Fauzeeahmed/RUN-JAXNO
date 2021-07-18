var track;
var boy, boy_running, boy_collided;
var ground, invisibleGround, groundImage;
var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg; var i; 

function preload(){
 trackImg=loadImage("path.png");
 pathImg = loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png", "Runner-2.png"); 
 path.addImage(pathimag);

  
 }





function setup(){
  createCanvas(400,400);
  //create sprites here
track = createSprite(200,200);
track.addImage(trackImg)
track.velocityY = 4;

createCanvas(400,400);
// Moving background path = createSprite(200, 200);
path = createSprite(200,200);
path.scale = 1.2;
path.velocityY = 4;

//creating boy running boy = createSprite(180, 340, 30, 30); 
boy = createSprite(200,200);
boy.scale = 0.08;
boy.addAnimation("JakeRunning", boyImg); 
 // create left Boundary leftBoundary = createSprite(0, 0, 100, 800);

 leftBoundary.visible = false;
//create right Boundary rightBoundary = createSprite(410, 0, 100, 800);








  
}


function draw() {
  background(255);
if (track.y > 400 ) {
  track.y = height/2;
}
background(0);
path.velocityY = 4; 
// boy moving on Xaxis with mouse boy.x = World.mouseX;
edges = createEdgeSprites(); 
boy.collide(leftBoundary);
boy.collide(rightBoundary); 
//boy.collide(edges); 
//code to reset the background if (path.y > 400) { path.y = height / 2;

}
