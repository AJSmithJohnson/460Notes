

function Player(){const textures=[];
    [
        "imgs/sprite_01.png",
        "imgs/sprite_02.png",
        "imgs/sprite_03.png",
        "imgs/sprite_04.png",
        "imgs/sprite_03.png",
        "imgs/sprite_02.png"
        
    ].forEach((u)=>textures.push(new PIXI.Texture.fromImage(u)));
    
    const sprite = new PIXI.extras.AnimatedSprite(textures);
    sprite.x=game.width()/2;
    sprite.y=game.height()-100;
    sprite.anchor.set(.5);
    
    sprite.play();
    sprite.animationSpeed = .1;
                  
    sprite.scale.set(2,2);
    
    game.stage().addChild(sprite);
    
    var vx=0;
    var vy=0;
    const margin = 50;
                  
    var coolDown = 0;
    
    this.pos=()=>{
        return sprite.position;
    }
    
    this.update=function(dt){
        if(coolDown > 0)coolDown-=game.getMS()/1000;
        else if(keyboard.isDown(key.attack())){
            const p = this.pos();
            game.bullets.push(new Bullet(p));
            coolDown = .1;
        }
        
        var moveH=0;
        if(keyboard.isDown(key.moveLeft())){
            moveH--;
        }
        if(keyboard.isDown(key.moveRight())){
            moveH++;
        }
        vx+=moveH*1*dt;
        const vmax = 10;
        if(vx>vmax)vx = vmax;
        if(vx<-vmax)vx = -vmax;
        
        sprite.x+=vx*dt;
        sprite.y+=vy*dt;
        if(sprite.x < margin){
            sprite.x = margin;
            vx = 0;
        }
        if(sprite.x >game.width()-margin){
            sprite.x=game.width()-margin;
            vx=0;
        }
        
        if(vx !=0 && moveH==0){
            if(vx>0){
                vx-=1*dt;
                if(vx<0)vx=0;
            }
            if(vx<0){
                vx+=1*dt;
                if(vx>0)vx=0;
            }
        }
    }
}