function Enemy(){
    
    this.dead=false;
    
    var sprite=new PIXI.Sprite.fromImage("imgs/alien.png");
    sprite.x=Math.random()*game.width();
    sprite.y=-100;
    sprite.scale.set(.05,.05)
    sprite.anchor.set(.5);
    game.stage().addChild(sprite);
    
    this.radius=40;
    this.pos=()=>{return sprite.position;};
    
    this.update=function(dt){
        sprite.y+=5*dt;
        if(sprite.y>game.height()+100){
            this.dead=true;
        }
    };
    this.dispose=function(dt){
      game.stage().removeChild(sprite);  
    };
}