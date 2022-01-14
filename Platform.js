class Plataforma {
 constructor(){
  this.spriteB = createSprite(displayWidth/2,displayHeight/2-400,0,0);
  
  
  this.imageB = loadImage("OtherSprites/PlatformB.png");
  this.imageM = loadImage("OtherSprites/PlatformM.png");
  this.imageS = loadImage("OtherSprites/PlatformS.png");

  this.spriteB.addImage(this.imageB)
  this.spriteB.scale = 0.4
  
  } 
display(){



  drawSprites();
  }

}