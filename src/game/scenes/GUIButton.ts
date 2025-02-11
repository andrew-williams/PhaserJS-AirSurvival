import { Scene } from "phaser";

export class GUIButton extends Phaser.GameObjects.GameObject
{

    private m_image:Phaser.GameObjects.Image;

    constructor (parentScene:Scene, xPos:number, yPos:number, text?:string, callback?:any)
    {
        super(parentScene, 'gui_button');
        this.m_image = this.scene.add.image(xPos, yPos, 'gui_button');

    }

    create ()
    {
       
    }
    
}
