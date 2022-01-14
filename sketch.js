var macaco;
var aguia;
var banana;


var bgImg;
var platformB, platformM, platformS
var banana;
var treeImg;


function preload(){
   
   bgImg = loadImage("OtherSprites/BgImg.png")
   treeImg = loadImage("OtherSprites/TreeImg.png")




}
function setup(){
   createCanvas(displayWidth,displayHeight)
   macaco = new Macaco();
   aguia = new Eagle();
   banana = new Banana();

   platformB = new Plataforma();
   




}
function draw(){
   background(bgImg)
   push()
   imageMode(CENTER);
   image(treeImg,displayWidth/2,displayHeight/2+displayHeight/10,displayWidth/2,displayHeight*2)
   pop()
   
  
   macaco.controles();
   macaco.display();
   aguia.display();
   banana.display();

   platformB.display();
}
