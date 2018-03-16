alert("you loaded the script");

var arr = [];

arr.push(1,3,3,7);

arr.forEach((item) => {
    console.log(item);
});

var canvas = document.getElementById("myCanvas");
var gfx = canvas.getContext("2d");

var angle = 0;

var squarePos = -25;

setInterval(() => {
    angle++;
    gfx.clearRect(0,0,canvas.width, canvas.height);
    gfx.fillStyle = "#0000FF";
    gfx.translate(50, 50);
    gfx.rotate(angle * Math.PI / 180);
    gfx.fillRect(-25, -25, 50, 50);
    gfx.resetTransform();
});

document.addEventListener("keypress", (event) =>{
    const keyName = event.keyCode;
    
    console.log(keyName);
    
});