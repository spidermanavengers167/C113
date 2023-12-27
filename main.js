function preload(){

}
function setup(){
canvas=createCanvas(640,480)
canvas.position(110,250)
video=createCapture(VIDEO)
video.hide()
filter_shape=""
}
function draw(){
image(video,30,100,640,480)
tint(filter_shape)
image(video,45,45,640,480)
tint(filter_shape)
image(video,25,78,640,480)
tint(filter_shape)
}
function filterShape(){
filter_shape=document.getElementById("shape_name").value
}
function take_snapshot(){
save("AAAAAAAAAA.png")
}