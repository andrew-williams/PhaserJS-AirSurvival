import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';
import { TitleBackground } from './TitleBackground';
import { GUIButton } from './GUIButton';

export class MainMenu extends Scene
{
    private m_background:TitleBackground;
    private m_backgroundMusic:any;
    private m_buttonGroup:Phaser.GameObjects.Group;
    private m_testButton:GUIButton;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.m_background = new TitleBackground(this);
        this.m_backgroundMusic = this.sound.add('snd_mainmenu', {loop:true});
        this.m_backgroundMusic.play(this.sound);

        // NEXT TODO: ADD BUTTONS
        /*this.m_testButton = new GUIButton(this, 0, 0);
        this.m_buttonGroup = this.add.group(this.m_testButton);
        this.m_buttonGroup.setXY(200, 200, 1, 1);*/

        EventBus.emit('current-scene-ready', this);
    }
    
    changeScene ()
    {
        this.m_backgroundMusic.stop();        
        this.scene.start('Game');
    }
/*
    moveLogo (vueCallback: ({ x, y }: { x: number, y: number }) => void)
    {
        if (this.logoTween)
        {
            if (this.logoTween.isPlaying())
            {
                this.logoTween.pause();
            }
            else
            {
                this.logoTween.play();
            }
        } 
        else
        {
            this.logoTween = this.tweens.add({
                targets: this.logo,
                x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
                y: { value: 80, duration: 1500, ease: 'Sine.easeOut' },
                yoyo: true,
                repeat: -1,
                onUpdate: () => {
                    if (vueCallback)
                    {
                        vueCallback({
                            x: Math.floor(this.logo.x),
                            y: Math.floor(this.logo.y)
                        });
                    }
                }
            });
        }
    }*/
}
