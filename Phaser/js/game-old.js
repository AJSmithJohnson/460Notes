var config={
    type:Phaser.AUTO,
    width:800,
    height:500,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:800}
        }
    },
    scene:{
        preload:function(){
            this.load.setBaseURL("http://labs.phaser.io");
            this.load.image("sky","assets/skies/space3.png");
            this.load.image("red","assets/particles/red.png");
            this.load.image("logo","assets/sprites/phaser3-logo.png")
        },
        create:function(){
            this.add.image(0,0,"sky").setOrigin(0,0);
            this.test = this.add.text(0,0,"helloworld");
            
            var parts = this.add.particles("red");
            var emitter = parts.createEmitter({
                speed:Phaser.Math.Between(0,500),
                scale:{start:1,end:0},
                blendMode:'ADD',
            });
            
            var logo= this.physics.add.image(400,250,"logo");
            logo.setCollideWorldBounds(true);
            logo.setBounce(1,1);
            logo.setVelocity(100, -400);
            
            emitter.startFollow(logo);
        },
        update:function(time,dt){
            this.test.y+=dt;
            this.test.x+=dt;
            this.test.angle+=dt;
        }
    }
};
var game=new Phaser.Game(config); 