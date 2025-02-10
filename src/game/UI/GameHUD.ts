import { Scene } from 'phaser';

export class GameHUD extends Phaser.GameObjects.GameObject
{

    hudBackground: Phaser.GameObjects.Image;

    constructor (gameScene:Scene)
    {
        super(gameScene, "hud");
        this.hudBackground = this.scene.add.image(0, 0, 'gameHUD');
        this.hudBackground.setX(this.hudBackground.width / 2);
        this.hudBackground.setY(this.hudBackground.height/ 2);
    }
}