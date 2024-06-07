Webcam.set({
    width:350
    ,height:300
    ,image_format : "png",
    png_quality:90
});

function ToCom()
{
    window.location ="sda.html";

}

function draw()
{
    image(video,0,0,300,300);
}

function preload()
{
video = createVideo('video.mp4')
video.hide();
}

function setup()
{
canvas = createCanvas(280,280);
canvas.center();
background("Screenshot 2024-06-03 102104.png");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function start()
{
objectDececter = ml5.objectDececter('cocossd', modelLoaded)
document.getElementById("status").innerHTML = 'Status : Detecting Objects';

}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}