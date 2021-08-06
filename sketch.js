var RectFijo, RectMovil



function setup() {
  RectFijo = createSprite(200,200,50,80);
  RectMovil = createSprite(400,200,80,30);

  createCanvas(1200,800);
}

function draw() {


  background(255,255,255);
  RectMovil.x = World.mouseX;
  RectMovil.y = World.mouseY;
  if(RectMovil.x-RectFijo.x < RectMovil.width/2+RectFijo.width/2
    &&RectFijo.x-RectMovil.x < RectMovil.width/2+RectFijo.width/2
    &&RectMovil.y-RectFijo.y < RectMovil.height/2+RectFijo.height/2
    &&RectFijo.y-RectMovil.y < RectMovil.height/2+RectFijo.height/2){
      RectFijo.shapeColor = "red"
    RectMovil.shapeColor = "red"
  }
  else{
    RectFijo.shapeColor = "green"
    RectMovil.shapeColor = "green"
  }

  drawSprites();
}