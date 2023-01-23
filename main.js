oculosX = 0;
oculosY = 0;

function preload(){
    img=loadImage("https://i.postimg.cc/kGTpCfLW/oculos.png");
}
function setup(){
    canvas=createCanvas( 350, 300);

    video=createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("deu load no modelo");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        oculosX = results[0].pose.leftEye.X;
        oculosY = results[0].pose.leftEye.Y;
    }
}
function draw(){
    image(video, 0, 0, 350, 300);
    image(img, oculosX, oculosY, 50, 50);
}