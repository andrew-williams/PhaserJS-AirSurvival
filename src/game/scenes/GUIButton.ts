import { Scene } from "phaser";

export class GUIButton extends Phaser.GameObjects.GameObject
{

    private m_image:Phaser.GameObjects.Image;
    private m_scaleFactor:number;
    private m_callback:Function;
    private m_buttonText: Phaser.GameObjects.Text;
    private m_horizontalPadding:number;
    private m_verticalPadding:number;

    constructor (parentScene:Scene, xPos:number, yPos:number, scale:number, horizontalPadding:number = 0, verticalPadding:number = 0)
    {
        super(parentScene, 'gui_button');
        this.m_scaleFactor = scale;
        this.m_horizontalPadding = horizontalPadding;
        this.m_verticalPadding = verticalPadding;
        this.m_image = this.scene.add.image(xPos, yPos, 'gui_button').setInteractive();
        this.m_image.setOrigin(0.5, 0.5);
        this.m_image.setScale(this.m_scaleFactor, this.m_scaleFactor);
        
    }

    public setButtonText(text:string):void
    {
        this.m_buttonText = this.scene.add.text(this.m_image.x, this.m_image.y, text,
        {
            fontFamily: 'Comic Sans MS',
            fontSize: 16,
            color: '#00FFFF',
            align: 'center'
        }).setOrigin(0.5, 0.5);
        let scaleFactor:number = 1;
        if ((this.m_buttonText.width * this.m_scaleFactor) > (this.m_image.width - this.m_horizontalPadding * 2) * this.m_scaleFactor)
        {
            scaleFactor = ((this.m_image.width - this.m_horizontalPadding * 2) / this.m_buttonText.width) * this.m_scaleFactor;
        }
        this.m_buttonText.setScale(scaleFactor, scaleFactor);
    }

    // function do something with no params
    public setButtonCallback(callback:Function):void
    {
        if (callback != null)
        {
            this.m_callback = callback;
            this.m_image.on('pointerup', this.m_callback);
        }
    }

    public get height():number
    {
        return this.m_image.height * this.m_scaleFactor;
    }

    public get width():number
    {
        return this.m_image.width * this.m_scaleFactor;
    }

    public get y():number
    {
        return this.m_image.y;
    }

    public get x():number
    {
        return this.m_image.x;
    }

}
