var fixRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixRect = createSprite(400,400,100,100);
  fixRect.shapeColor = "green";

  movingRect = createSprite(600,600,100,100);
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("Width of Rectangle", fixRect.width/2 + movingRect.width/2);
  console.log("Difference in X position of Both Rectangles",movingRect.x - fixRect.x);

  console.log("Height of Rectangle", fixRect.height/2 + movingRect.height/2);
  console.log("Difference in X position of Both Rectangles",movingRect.y - fixRect.y);

  if(fixRect.width/2 + movingRect.width/2 > fixRect.x - movingRect.x && fixRect.width/2 + movingRect.width/2 > movingRect.x - fixRect.x
    && fixRect.height/2 + movingRect.height/2 > fixRect.y - movingRect.y && fixRect.height/2 + movingRect.height/2 > 
    movingRect.y - fixRect.y){

    fixRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } 
    else{
      fixRect.shapeColor = "green";
      movingRect.shapeColor = "green";
  }

  drawSprites();
}