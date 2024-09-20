import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload()
    {
        this.load.image('player', 'assets/astronaut.png');
    }

    create () {
        
        this.add.image(512, 384, 'background').setAlpha(0.5);
    
        this.player = this.add.sprite(300, 300, "player");
        this.cursors = this.input.keyboard.createCursorKeys();
    
        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
    
    update() {
        if (this.cursors.left.isDown) {
            this.player.x = this.player.x - 5; //mengubah posisi sumbu x (horizontal) player
        } else if (this.cursors.right.isDown) {
            this.player.x = this.player.x + 5; //mengubah posisi sumbu x (horizontal) player
        }
        if (this.cursors.up.isDown) {
            this.player.y = this.player.y - 5; //mengubah posisi sumbu y (vertikal) player
        } else if (this.cursors.down.isDown) {
            this.player.y = this.player.y + 5; //mengubah posisi sumbu y (vertikal) player
        }
    }
}