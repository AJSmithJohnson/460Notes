var ScenePlay={
    preload:function(){
        console.log('play');
        
        this.load.setBaseURL("http://labs.phaser.io");
        //this.load.spritesheet("player","assets/sprites/dude-cropped.png",{frameWidth:32,frameHeight:48});
        this.load.spritesheet('player', 'assets/sprites/dude.png',{frameWidth: 32, frameHeight: 48});
        this.load.image("platform","assets/sprites/platform.png");
    },
    create:function(){
        var txt = this.add.text(400,200,"TITLE",{
            
        });
        txt.setInteractive();
        txt.on("pointerdown",()=>{
            game.scene.start("Title");
            game.scene.stop("Play");
            //game.scene.switch("Play","Title");
        });
        txt.x -= txt.width/2;
        
        
        this.anims.create({
            key:'left',
            frames:this.anims.generateFrameNumbers('player',{start:0,end:3}),
            frameRate:10,
            repeat:-1
        });
        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers('player',{start:5,end:8}),
            frameRate:10,
            repeat:-1
        });
        this.anims.create({
            key:'idle',
            frames:[{key:'player',frame:4}],
            frameRate:420,
        });
        
        console.log(this.anims.generateFrameNumbers('player',{start:0,end:3}));
        
        console.log(this.anims.generateFrameNames('player',{start:5,end:8}));
        
        this.player=this.physics.add.sprite(100,200,"idle");
        
        var platforms=this.physics.add.staticGroup();
        platforms.create(100,400,"platform");
        platforms.create(500,300,"platform");
        
        this.physics.add.collider(this.player, platforms);
    },
    update:function(t,dt){
        
        var keys = this.input.keyboard.createCursorKeys();
        var move = 0;
        if(keys.left.isDown)move--;
        else if(keys.right.isDown)move++;
        
        switch(move){
            case -1:
                this.player.anims.play('left', true);
                break;
            case 0:
                this.player.anims.play('idle');
                break;
            case 1:
                this.player.anims.play('right', true);
                break;
        }
        
        this.player.setVelocityX(move*150);
        
        if(keys.space.isDown && this.player.body.touching.down){
            this.player.setVelocityY(-400);
        }
        
    }
};