musica1 = "";
musica2 = "";

function preload(){
    musica1 = loadSound("music.mp3");
    musica2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(400, 230);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}
