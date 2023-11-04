leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
 video=createCapture(VIDEO);
 video.size(450,400);
 canvas=createCanvas(450,450);
 canvas.position(550,120);

 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
        console.log("left wirst x= "+leftWristX+"right wrist x= "+rightWristX+"difference= "+difference);
    }
}

function draw(){
    background('#367588');
    textSize(difference);
    fill('#FFFF00');
    text('Ridhima',150,200);
    document.getElementById("font-size").innerHTML="Font size of the text is "+difference;
}