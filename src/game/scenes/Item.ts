import { Tweens } from "phaser";

export class Item extends Phaser.GameObjects.Container
{

    private m_sprite:Phaser.Physics.Arcade.Sprite;
    private m_tween:Tweens.Tween | null;

    private m_startXMovementPos:number;
    private m_startYMovementPos:number;
    private m_startXSpritePos:number;
    private m_startYSpritePos:number;

    constructor (parentScene:Phaser.Scene, startX:number, startY:number, spriteID:string, animID?:string)
    {
        // Spawn Item
        super(parentScene, startX, startY);
        this.scene.add.existing(this);
        this.m_sprite = new Phaser.Physics.Arcade.Sprite(this.scene, 0, 0, spriteID);
        this.add(this.m_sprite);
        this.scene.physics.add.existing(this);
        if (animID != null)
        {
            // Add anim
            this.scene.anims.play(animID, this.m_sprite);
        }
    }

    public destructor():void
    {
        /*if (this.m_introTween)
        {
            this.m_introTween.stop();
            this.m_introTween = null;
        }*/
    }

    public disableItem():void
    {
        console.log("attempting to disable item");
        this.m_sprite.disableBody(true, true);
    }

    public enableItem(xPos:number, yPos:number):void
    {
        console.log("attempting to enable item");
        this.m_sprite.enableBody(true, xPos, yPos, true, true);
    }

    public relocateTemp():void
    {
        this.setX(Math.floor(Math.random() * 300));
        this.setY(Math.floor(Math.random() * 500));
    }

    public moveItem(updatedXPos:number, updatedYPos:number):void
    {
        /*
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
*/
    }

}
