function Player() {

    const sprite = new PIXI.Sprite.fromImage("imgs/playerShip.png");
    sprite.x=game.width()/2;
    sprite.y=game.height()-60;
    sprite.anchor.set(.5);
    sprite.scale.set(.33,.33);
    game.stage().addChild(sprite);
    
    var vx=0;
    var vy=0;
    var cooldown=0;
    
    this.pos=()=>{return sprite.position;};

    this.update = function (dt) {
        
        if(cooldown>0)cooldown-=game.getMS()/1000;
        
        else if(keyboard.isDown(key.attack())){
            const p=this.pos();
            game.bullets.push(new Bullet(this.pos()));
            cooldown = .1;
        }
        
        var moveH=0;
        if(keyboard.isDown(key.moveLeft())){
            moveH--;
        }
        if(keyboard.isDown(key.moveRight())){
            moveH++;
        }
        vx+=moveH*1*dt;
        const vmax=10;
        if(vx>vmax)vx=vmax;
        if(vx<-vmax)vx=-vmax;
        
        sprite.x+=vx*dt;
        sprite.y+=vy*dt;
        
        const margin=50;
        
        if(sprite.x<margin){
            sprite.x=margin;
            vx=0;
        }
        
        if(sprite.x>game.width()-margin){
            sprite.x=game.width()-margin;
            vx=0;
        }
        
        if(vx!=0&&moveH==0){
            if(vx>0){
                vx-=1*dt;
                if(vx<0)vx=0;
            }
            if(vx<0){
                vx+=1*dt;
                if(vx>0)vx=0;
            }
        }
    };
}