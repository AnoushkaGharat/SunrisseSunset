const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
         }

    Engine.update(engine);

    // write code to display time in correct format here


}


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    console.log(response);
    var responseJSON = await response.json()
    console.log(responseJSON);
    var dateTime = responseJSON.datetime;
    var h = dateTime.slice(11,13)
    console.log(h);

if(h>=04 && h<=06){
  var bg = "sunrise1.png";

}else if(h>=06 && h<=08){
      bg = "sunrise2.png";

}else if(h>=08 && h<=10){
      bg = "sunrise3.png";  
    
}else if(h>=10 && h<=12){
      bg = "sunrise4.png";  

}else if(h>=12 && h<=14){
      bg = "sunrise5.png"; 

}else if(h>=14 && h<=16){
    bg = "sunrise6.png"; 

}else if(h>=16 && h<=17){
    bg = "sunset7.png"; 
    
}else if(h>=17 && h<=18){
    bg = "sunset8.png"; 

}else if(h>=18 && h<=19){
    bg = "sunset9.png"; 
    
}else if(h>=19 && h<=21){
    bg = "sunset10.png"; 

}else if(h>=21 && h<=23){
    bg = "sunset11.png"; 
        
}else if(h>=23 && h<=4){
    bg = "sunset12.png"; 
}

    backgroundImg = loadImage(bg);
}