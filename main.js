musica1 = "";
musica2 = "";

function preload(){
    musica1 = loadSound("music.mp3");
    musica2 = loadSound("music2.mp3");
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}