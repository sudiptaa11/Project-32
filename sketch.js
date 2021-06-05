const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg ;
var hour;
// var time;
var ampm;

//var responseJSON;


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

    if(0<=hour && hour<12){
        ampm = "AM";
    } else{
        ampm = "PM";
    }

    fill("bkack");
    textSize(15);
    text("Time: "+hour+ampm,300,500);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();

    // write code slice the datetime
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(4<=hour && hour<=6){
        bg = "sunrise1.png";
    } else if(6<=hour && hour<=8){
        bg = "sunrise2.png";
    } else if(23<=hour && hour === 0){
        bg = "sunset10.png";
    } else if(0===hour && hour<=3){
        bg = "sunset11.png";
    } else {
        bg = "sunset12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
