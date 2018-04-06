var canvas = document.getElementById("canvas");
var gfx = canvas.getContext("2d");

var pTime = 0;
var deltaTime = 0;

function Box(){
    
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 50;
    this.height = 50;
    this.veloc = {x:0,y:0};
    
    this.angle = 0;
    
    this.update = () =>{
        //this.x++;
        //this.angle+= deltaTime * 60;
        
        this.x += this.veloc.x  * deltaTime;
        this.y += this.veloc.y  * deltaTime;
        
        if(mouse.x < this.x) this.veloc.x -= 100 * deltaTime;
        if(mouse.x > this.x) this.veloc.x += 100 * deltaTime;
        if(mouse.y < this.y) this.veloc.y -= 100 * deltaTime;
        if(mouse.y > this.y) this.veloc.y += 100 * deltaTime;
    };
    this.draw = () =>{
        gfx.fillStyle = "#000";
        gfx.translate(this.x, this.y);
        gfx.rotate(this.angle * Math.PI / 180);
        gfx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
        gfx.resetTransform();
    }
}

function Player(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 50;
    this.height = 50;
    
    this.angle = 0;
    
    this.update = () =>{
        //this.x++;
        if(keyboard.isDown(keyboard.w)){
            this.y -= deltaTime * 200;
        }
        if(keyboard.isDown(keyboard.s)){
            this.y += deltaTime * 200;
        }
        if(keyboard.isDown(keyboard.a)){
            this.x -= deltaTime * 200;
        }
        if(keyboard.isDown(keyboard.d)){
            this.x += deltaTime * 200;
        }
        if(keyboard.isDown(keyboard.space)){
            this.width = 100;
            this.height = 100;
        } 
        else{
            this.width = 50;
            this.height = 50;
        }
    };
    this.draw = () =>{
        gfx.fillStyle = "#F00";
        gfx.translate(this.x, this.y);
        gfx.rotate(this.angle * Math.PI / 180);
        gfx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
        gfx.resetTransform();
    }
}

game = {
    boxes : [],
    player : new Player(),
    begin: function(){
        for(var i=0; i<10; i++)this.boxes.push(new Box());
        mouse.setup();
        keyboard.setup();
        this.gameLoop();
    },
    gameLoop : function(time){

        if(time === undefined) time = 0;
        deltaTime = (time - pTime) / 1000;
        pTime = time;


        gfx.clearRect(0,0,canvas.width,canvas.height);

        this.boxes.forEach( (box) =>{
            box.update();
            box.draw();
        });

        this.player.update();
        this.player.draw();
        
        console.log("x " + window.screenX + "y " + window.screenY);

        var me = this;
        requestAnimationFrame(function(time) {me.gameLoop(time);});
    }
}




var mouse = {
    x:0,
    y:0, 
    setup:function(){
        canvas.addEventListener("mousemove", (e) =>{
            mouse.x = e.offsetX;
            mouse.y = e.offsetY;
            //console.log(mouse);
        });
    }
};
var keyboard = {
    keys: [],
    space: 32,
    w : 87,
    a : 65,
    s : 83,
    d : 68,
    isDown: function(code){
        return keyboard.keys[code];
    },
    toggleKey: function(code, down){
        this.keys[code] = down;
    },
    setup: function(){
        document.addEventListener("keydown", (event) =>{
            this.toggleKey(event.keyCode, true);    
        });

        document.addEventListener("keyup", (event) =>{
            this.toggleKey(event.keyCode, false);
        });
    }
};

game.begin();
