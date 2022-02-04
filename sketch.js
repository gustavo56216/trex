var trex, trex_running, edges, solo2, nuvens;
var groundImage;
var solo;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")


}

function setup(){
  createCanvas(600,200);
  solo = createSprite(300,190,600,20)
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  solo.addImage("soloimage",groundImage)
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50;
  solo2=createSprite(300,200,600,10)
solo2.visible=false




}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")&&trex.y>160){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
 solo.velocityX = -2
 if(solo.x<0){
   solo.x= solo.width/2


 } 
 //i}mpedir que o trex caia
  trex.collide(solo2)
  drawSprites();
  geranuvens()


}
function geranuvens(){  
nuvens=createSprite(500,100,20,50)
nuvens.velocityX=-3


}




