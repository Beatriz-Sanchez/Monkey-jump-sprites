var macaco;
var aguia;
var banana;


var bgImg;
var platform, platformM, platformS
var banana;
var treeImg;
var platformSprites,tops,bottoms;
var platformObjects = [];


function preload(){
   
   bgImg = loadImage("OtherSprites/BgImg.png")
   treeImg = loadImage("OtherSprites/TreeImg.png")




}
function setup(){
   createCanvas(displayWidth,displayHeight)
   macaco = new Macaco();
   aguia = new Eagle();
   banana = new Banana();
   
   //novo
   platformSprites = new Group();
   tops = new Group();
   bottoms = new Group();
   


}
function draw(){
   background(bgImg);
   push();
   imageMode(CENTER);
   image(treeImg,displayWidth/2,displayHeight/2+displayHeight/10,displayWidth/2,displayHeight*2);
   pop();
   
  
   macaco.controles();
   macaco.display();
   macaco.sprite.collide(platformSprites);//collide
   aguia.display();
   banana.display();

   //novo
   spawnPlatforms();
   if(platformObjects[0]){
      platform.display();
      for (let p=0; p < platformObjects.length; p++){
         if (platformObjects[p].top.isTouching(macaco.sprite)){

            setTimeout(()=>{
               platformObjects[p].velocity(0,15);
            },2500);
         }
      }
   }

   
   
}

function spawnPlatforms(){
   if (frameCount%100 === 0){
      platform = new Plataforma();
      platform.velocity(0,2);
      platform.setLifetime(displayHeight/2+30);
      platform.addToGroups();
      platformObjects.push(platform);
   }
}
