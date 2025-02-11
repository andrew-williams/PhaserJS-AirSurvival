import { GameObjects } from 'phaser';

export class TitleBackground extends Phaser.GameObjects.Image
{
    
    private m_titleText:GameObjects.Text;
    private m_allowMovement:boolean = false;

    constructor (parentScene:Phaser.Scene)
    {
        super(parentScene, parentScene.sys.game.canvas.width / 2, parentScene.sys.game.canvas.height, 'background');

        let scaleToViewport:number = this.scene.sys.game.canvas.height / this.height;
        this.scene.add.existing(this).setOrigin(0.5, 1).setScale(scaleToViewport);
        
        this.m_titleText = this.scene.add.text(parentScene.sys.game.canvas.width / 2, parentScene.sys.game.canvas.height * 0.08, 'AIR SURVIVAL', {
            fontFamily: 'Consolas', 
            fontSize: 48, 
            color: '#00FFFF',
            stroke: '#000000', 
            strokeThickness: 0,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

    }

}
