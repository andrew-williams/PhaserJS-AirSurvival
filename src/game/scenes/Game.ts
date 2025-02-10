import { EventBus } from '../EventBus';
import { Scene } from 'phaser';
import { GameHUD } from '../UI/GameHUD';
import { Room } from '../Level/Room';
import { Level } from '../Level/Level';
import { Player } from './Player';

export class Game extends Scene
{

    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameText: Phaser.GameObjects.Text;

    gameHUD:GameHUD;
    level:Level;
    player:Player;
    cursors:any;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;

        // Create HUD
        this.gameHUD = new GameHUD(this);

        // Generate Level
        //this.levelContainer = this.add.container(13, 13);
       // this.level = new Level(this);
        //this.level.generateLevel();

        //this.camera.setBackgroundColor(0x00ff00);

        //this.background = this.add.image(0, 0, 'gameHUD');
        //this.background.setAlpha(0.5);
/*
        this.gameText = this.add.text(512, 384, 'Make something fun! test\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);
*/
        this.player = new Player(this);
        this.cursors = this.input.keyboard?.createCursorKeys();
       
        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.scene.start('GameOver');
    }
    
    override update(time: number, delta: number):void
    {
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-400);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(400);
        }
        else
        {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-400);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(400);
        }
        else
        {
            this.player.setVelocityY(0);
        }
    }

}
