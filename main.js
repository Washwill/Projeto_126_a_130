var musica1 = "";
var musica2 = "";
pulsoEsquerdo = 0;
pulsoDireito = 0;
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
        pulsoDireito = results[0].pose.keypoints[10].score;
        pulsoEsquerdo = results[0].pose.keypoints[9].score;
        console.log("pulsoEsquerdo = " + pulsoEsquerdo);

        pulsoEsquerdoX = results[0].pose.leftWrist.x;
        pulsoEsquerdoY = results[0].pose.leftWrist.y;
        console.log("pulsoEsquerdoX = " + pulsoEsquerdoX + "pulsoEsquerdoY = " + pulsoEsquerdoY);

        pulsoDireitoX = results[0].pose.rightWrist.x;
        pulsoDireitoY = results[0].pose.rightWrist.y;
        console.log("pulsoDireitoX = " + pulsoDireitoX + "pulsoDireitoY = " + pulsoDireitoY);
    }
}

function modelLoaded(){
    console.log("poseNet carregado");
}

function draw(){
    image(video, 0, 0, 600, 500);
    if(pulsoEsquerdo > 0.2){
        fill("green");
        stroke("cyan");
        circle(pulsoDireitoX, pulsoDireitoY, 20);
        musica2.stop();
        if(musica1 = false){
            play2();
            document.getElementById("nomeMusica").innerHTML = "Música do Harry Potter (Eu acho)";
        }
        
    }
    isPlaying();
    if(pulsoDireito > 0.2){
        fill("cyan");
        stroke("green");
        circle(pulsoEsquerdoX, pulsoEsquerdoY, 20);
        musica1.stop();
        if(musica2 = false){
            play();
            document.getElementById("nomeMusica").innerHTML = "Música do Peter Pan";
        }
    }
}

function isPlaying(){
    musica1.isPlaying();
}

function play(){
    musica1.play();
    musica1.setVolume(1);
    musica1.rate(1);
}

function play2(){
    musica2.play2();
    musica2.setVolume(1);
    musica2.rate(1);
}

play();
