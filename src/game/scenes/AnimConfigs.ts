import { Scene } from "phaser";

export class AnimConfigs
{
    
    /*var POWERUP_BULLET:Phaser.Types.Animations.Animation = {
        {
            key : 'main',
            frames : this.generateFrameNumbers(spriteID, { start : frameStart, end : frameEnd}),
            frameRate : 10,
            repeat : -1
        }
    };*/
    public static createAnims(scene:Scene):void
    {
        scene.anims.create(
        {
            key : 'bullet_powerup_spritesheet',
            frames : scene.anims.generateFrameNumbers('item_bullet_spritesheet', { start : 0, end : 5}),
            frameRate : 10,
            repeat : -1
        });
    }

}
/*
export class Item extends Phaser.GameObjects.Container
{

    private m_sprite:Phaser.Physics.Arcade.Sprite;
    private m_tween:Tweens.Tween | null;

    private m_startXMovementPos:number;
    private m_startYMovementPos:number;
    private m_startXSpritePos:number;
    private m_startYSpritePos:number;

    constructor (parentScene:Phaser.Scene, startX:number, startY:number, spriteID:string, animParams?:Phaser.Types.Animations.Animation, frameStart?:number, frameEnd?: number)
    {
        // Spawn Item
        super(parentScene, startX, startY);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        
        this.m_sprite = new Phaser.Physics.Arcade.Sprite(this.scene, 0, 0, spriteID);
        this.add(this.m_sprite);
        if (animParams != null)
        {
            // Add anim
            this.m_sprite.anims.create(
                {
                    key : 'main',
                    frames : this.m_sprite.anims.generateFrameNumbers(spriteID, { start : frameStart, end : frameEnd}),
                    frameRate : 10,
                    repeat : -1
                }
            );
            this.m_sprite.anims.play('main');
        }
    }

    // Animate the intro during start of gameplay or after losing a life while still having lives
    public init():void
    {/*
        this.m_introTween = this.scene.tweens.add(
            {
                targets : this,
                y : this.scene.sys.game.canvas.height * 0.9,
                ease : 'easeOutCubic',
                duration : 1000,
                onComplete : () => this.enableControl()
            }
        );    */
//    }

