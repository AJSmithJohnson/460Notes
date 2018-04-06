function Game() {

    keyboard.setup();
    this.bullets = [];
    this.enemies = [];

    this.objs = [];

    var spawnTimer = 0;

    const pixi = new PIXI.Application({
        width: 600,
        height: 800,
        backgroundColor: 0x99AAFF
    });
    document.body.append(pixi.view);

    this.stage = () => {
        return pixi.stage;
    }

    this.width = () => {
        return pixi.screen.width;
    }

    this.height = () => {
        return pixi.screen.height;
    }

    this.init = function () {
        this.player = new Player();

    }

    this.getMS = () => {
        return pixi.ticker.elapsedMS;
    }

    pixi.ticker.add((dt) => {
        this.player.update(dt);

        if (spawnTimer > 0) spawnTimer -= this.getMS() / 1000;
        else {
            this.enemies.push(new Enemy());
            spawnTimer = Math.random() + .5;
        }



        for (var i = this.enemies.length - 1; i >= 0; i--) {

            if (this.enemies[i].update) this.enemies[i].update(dt);

            if (this.enemies[i].dead) {
                this.enemies[i].dispose();
                this.enemies.splice(i, 1);
            }


        }

        for (var i = this.bullets.length - 1; i >= 0; i--) {
            //const b = this.bullets[i];

            if (this.bullets[i].update) this.bullets[i].update(dt);

            this.enemies.forEach(e => {
                const p1 = e.pos();
                const p2 = this.bullets[i].pos();
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < e.radius + this.bullets[i].radius) {
                    e.dead = true;
                    this.bullets[i].dead = true;
                }
            });

            if (this.bullets[i].dead) {
                this.bullets[i].dispose();
                this.bullets.splice(i, 1);
            }


        }
        keyboard.update();

    });
}



const game = new Game();
game.init();
