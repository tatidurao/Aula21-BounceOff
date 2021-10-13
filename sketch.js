var retFixo, retMovendo;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(400, 100, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 800,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  retMovendo.velocityY = -5;
  retFixo.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2
      && retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2) {
    retMovendo.velocityX = retMovendo.velocityX * (-1);
    retFixo.velocityX = retFixo.velocityX * (-1);
  }
  if (retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2
    && retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2){
    retMovendo.velocityY = retMovendo.velocityY * (-1);
    retFixo.velocityY = retFixo.velocityY * (-1);
  }
  drawSprites();
}
