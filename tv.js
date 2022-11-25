status = " ";
img = " ";
object = [ ];

function preload(){
   img = loadImage('img3.jpg');
}

function setup(){
   canvas = createCanvas(640, 420);
   canvas.center();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log('model Loaded!');
    status  = true;
    objectDetector.detect(img , gotResults);
}

function gotResults(error , results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        object = results;
    }
}