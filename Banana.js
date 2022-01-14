class Banana{
  constructor(){
    this.sprite = createSprite(displayWidth/2,displayHeight/2-200,0,0)
    this.image = loadImage("OtherSprites/BananaImg.png");

    this.sprite.addImage(this.image);
    this.sprite.scale = 0.3;
  }

display(){

  drawSprites();
  } 
}