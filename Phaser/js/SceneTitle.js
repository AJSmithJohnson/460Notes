var SceneTitle={
    preload:function(){
        console.log('title');
    },
    create:function(){
        var txt = this.add.text(400,200,"PLAY",{
            
        });
        txt.setInteractive();
        txt.on("pointerdown",()=>{
            game.scene.start("Play");
            game.scene.stop("Title");
            //game.scene.switch("Title","Play");
        });
        txt.x -= txt.width/2;
    },
    update:function(t,dt){
        
    }
};