musica1 = "";
musica2 = "";
pulsoEsquerdoY = 0;
pulsoEsquerdoX = 0;
pulsoDireitoY = 0;
pulsoDireitoX = 0;


function preload(){
    musica1 = loadSound("music.mp3");
    musica2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(400, 230);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        pulsoEsquerdoX = results[0].pose.leftWrist.x;
        pulsoEsquerdoY = results[0].pose.leftWrist.y;
        pulsoDireitoX = results[0].pose.rightWrist.x;
        pulsoDireitoY = results[0].pose.rightWrist.y;
    }
}

function modelLoaded(){
    console.log("poseNet carregado");
}

function draw(){
    image(video, 0, 0, 600, 500);
}
