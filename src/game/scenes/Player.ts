import { Tweens } from "phaser";

export class Player extends Phaser.Physics.Arcade.Sprite
{

    private m_allowMovement:boolean = false;
    private m_isMoving:boolean = false;
    private m_introTween:Tweens.Tween | null;

    private m_startXMovementPos:number;
    private m_startYMovementPos:number;
    private m_startXSpritePos:number;
    private m_startYSpritePos:number;

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

    public startMovement(startingXPos:number, startingYPos:number):void
    {
        this.m_isMoving = true;
        this.m_startXMovementPos = startingXPos;
        this.m_startYMovementPos = startingYPos;
        this.m_startXSpritePos = this.x;
        this.m_startYSpritePos = this.y;
    }
    public movePlayer(updatedXPos:number, updatedYPos:number):void
    {
        // Currently for touch movement
        if (this.m_allowMovement && this.m_isMoving)
        {
            let movementX:number = updatedXPos - this.m_startXMovementPos;
            let movementY:number = updatedYPos - this.m_startYMovementPos;
            this.x = this.m_startXSpritePos + movementX;
            this.y = this.m_startYSpritePos + movementY;
            if (this.x < this.width / 2)
            {
                this.x = this.width / 2;
            }
            else if (this.x > this.scene.sys.game.canvas.width - this.width / 2)
            {
                this.x = this.scene.sys.game.canvas.width - this.width / 2;
            }
            if (this.y < this.height / 2)
            {
                this.y = this.height / 2;
            }
            else if (this.y > this.scene.sys.game.canvas.height - this.height / 2)
            {
                this.y = this.scene.sys.game.canvas.height - this.height / 2;
            }
        }

    }

    public stopMovement():void
    {
        this.m_isMoving = false;
    }

}
