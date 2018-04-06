function Enemy(){
    var sprite=new PIXI.Sprite.fromImage("imgs/nick.png");
    sprite.x = Math.random()*game.width();
    sprite.y = -100;
    sprite.anchor.set(.5);
    sprite.scale.set(.25,.25);
    game.stage().addChild(sprite);
    this.dead = false;
    
    this.radius = 35;
    
    this.update=function(dt){
        sprite.y+=5*dt;
        
        if(sprite.y > game.height()+100)this.dead = true;
    }
    this.dispose=function(){
        game.stage().removeChild(sprite);
    }
    
    this.pos=()=>{
        return sprite.position;
    }
}