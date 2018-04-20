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
};

var game=new Phaser.Game(config);
game.scene.add("Title", SceneTitle);
game.scene.add("Play", ScenePlay);
game.scene.start("Play");