function Bullet(pos){
    this.dead = false;
    const textures=[];
    [
        "imgs/bullet1.png",
        "imgs/bullet2.png",
        "imgs/bullet3.png",
        "imgs/bullet4.png",
        "imgs/bullet5.png",
        "imgs/bullet6.png"
    ].forEach((u)=>textures.push(new PIXI.Texture.fromImage(u)));
    this.radius = 14;
    
    const sprite = new PIXI.extras.AnimatedSprite(textures);
    sprite.alpha = .75;
    
    sprite.scale.set(.5,.5);
    sprite.play();
    sprite.anchor.set(.5);
    sprite.x = pos.x;
    sprite.y = pos.y;
    game.stage().addChild(sprite);
    
    this.update=function(dt){
        sprite.y-=10*dt;
        if(sprite.y < -10)this.dead = true;
    }
    this.dispose=function(){
        game.stage().removeChild(sprite);
    }
    
    this.pos=()=>{
        return sprite.position;
    }
}