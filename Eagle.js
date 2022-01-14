class Eagle{
  constructor(){
    this.sprite = createSprite(displayWidth/2,displayHeight/2-300,0,0)
    this.fly = loadAnimation("EagleSprites/Eagle1.png","EagleSprites/Eagle2.png","EagleSprites/Eagle3.png")
    
    this.sprite.addAnimation("Voando",this.fly);
    this.sprite.scale = 0.8
  }

display(){


  drawSprites();
  }
}