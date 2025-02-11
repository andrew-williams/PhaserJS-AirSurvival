import { Tweens } from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite
{

    private m_allowMovement:boolean = false;
    private m_introTween:Tweens.Tween | null;

    constructor (parentScene:Phaser.Scene, startX:number, startY:number)
    {
        // Spawn player
        super(parentScene, startX, startY, 'player');
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        // Add anim
        this.anims.create(
            {
                key : 'main',
                frames : this.anims.generateFrameNumbers('player', { start : 0, end : 2}),
                frameRate : 10,
                repeat : -1
            }
        );
        this.anims.play('main');
    }

    // Animate the intro during start of gameplay or after losing a life while still having lives
    public init():void
    {
        this.m_introTween = this.scene.tweens.add(
            {
                targets : this,
                y : this.scene.sys.game.canvas.height * 0.9,
                ease : 'easeOutCubic',
                duration : 1000,
                onComplete : () => this.enableControl()
            }
        );    
    }

    private enableControl():void
    {
        this.setCollideWorldBounds(true);
        this.m_allowMovement = true;
    }

    public getAllowMovement():boolean
    {
        return this.m_allowMovement;
    }

    public destructor():void
    {
        if (this.m_introTween)
        {
            this.m_introTween.stop();
            this.m_introTween = null;
        }
    }

}
