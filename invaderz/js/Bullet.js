function Bullet(p) {

    const textures = [];

    ["imgs/pews/01.png", "imgs/pews/02.png", "imgs/pews/03.png"].forEach(u => textures.push(new PIXI.Texture.fromImage(u)));

    const sprite = new PIXI.extras.AnimatedSprite(textures);
    sprite.anchor.set(.5);
    sprite.position.copy(p);
    sprite.animationSpeed = .1;
    sprite.loop = false;
    sprite.play();
    game.stage().addChild(sprite);
    
    this.radius=60;
    
    this.pos=()=>{return sprite.position;};


    this.dead = false;

    this.update = function (dt) {
        sprite.y -= 10 * dt;
        if (sprite.y < -10) this.dead = true;
    };
    this.dispose = function () {
        game.stage().removeChild(sprite);
    };

}
