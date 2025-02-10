export class Player extends Phaser.Physics.Arcade.Sprite
{

    constructor (parentScene:Phaser.Scene)
    {
        super(parentScene, 100, 300, 'player');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        //this.setBounce(0, 0);
        this.setCollideWorldBounds(true);
        
        this.anims.create(
            {
                key : 'main',
                frames : this.anims.generateFrameNumbers('player', { start : 0, end : 2}),
                frameRate : 10,
                repeat : -1
            }
        );
        
        this.anims.play('main');
        
        console.log("constructor");
    }

}
