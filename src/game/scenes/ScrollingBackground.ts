import { Scene } from "phaser";

export class ScrollingBackground extends Phaser.GameObjects.Group
{

    private m_firstImage:Phaser.GameObjects.Image;
    private m_secondImage:Phaser.GameObjects.Image;
    private m_scrollingSpeed:number = 1;

    constructor (parentScene:Scene, startingBackgroundID:string = 'tempbg')
    {
        super(parentScene);
        this.scene.add.existing(this);
        this.m_firstImage = this.scene.add.image(0, 0, startingBackgroundID).setOrigin(0,0);
        this.m_secondImage = this.scene.add.image(0, 0 - this.scene.sys.canvas.height, startingBackgroundID).setOrigin(0,0);
    }

    public update():void
    {
        if (this.m_firstImage.y > this.scene.sys.canvas.height)
        {
            this.m_firstImage.y = this.m_scrollingSpeed - this.scene.sys.canvas.height;
        }
        if (this.m_secondImage.y > this.scene.sys.canvas.height)
        {
            this.m_secondImage.y = this.m_scrollingSpeed - this.scene.sys.canvas.height;
        }
        this.m_firstImage.y += this.m_scrollingSpeed;
        this.m_secondImage.y += this.m_scrollingSpeed;
        
    }

}
