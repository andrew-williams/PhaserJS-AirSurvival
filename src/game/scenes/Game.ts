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

    private m_fireRate:number = 8;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;

        // Create HUD
        //this.gameHUD = new GameHUD(this);

        // Generate Level
        //this.levelContainer = this.add.container(13, 13);
       // this.level = new Level(this);
        //this.level.generateLevel();

        //this.camera.setBackgroundColor(0x00ff00);

        this.player = new Player(this, this.sys.game.canvas.width / 2, this.sys.game.canvas.height + 200);
        this.player.init();

        this.cursors = this.input.keyboard?.createCursorKeys();
       
        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        this.player.destructor();
        this.scene.start('GameOver');
    }
    
    override update(time: number, delta: number):void
    {
        if (this.player.getAllowMovement())
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

}
