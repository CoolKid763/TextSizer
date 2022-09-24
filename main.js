
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(800,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    video.position(200,150);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristx ="+ leftWristX+"rightWristX ="+rightWristX+"difference ="+difference);
    }
}

function draw(){
    background('black');
    document.getElementById("text_side").innerHTML = "width And height of the Text will be ="+difference+"px";
    textSize(difference);
    fill('white');
    text('Kapish', 50, 400);
}

function modelLoaded(){
    console.log('Posenet is Working!');
}

