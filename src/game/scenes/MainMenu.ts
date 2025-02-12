import { Events, GameObjects, Input, Scene } from 'phaser';

import { EventBus } from '../EventBus';
import { TitleBackground } from './TitleBackground';
import { GUIButton } from './GUIButton';

export class MainMenu extends Scene
{
    private m_background:TitleBackground;
    private m_backgroundMusic:any;
    private m_playButton:GUIButton;
    private m_helpButton:GUIButton;
    private m_creditsButton:GUIButton;
    private m_soundboardButton:GUIButton;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.m_background = new TitleBackground(this);
        this.m_backgroundMusic = this.sound.add('snd_mainmenu', {loop:true});
        this.m_backgroundMusic.play(this.sound);

        let buttonPadding:number = 8;
        let buttonXPos:number = this.sys.game.canvas.width * 0.84 - buttonPadding;
        this.m_soundboardButton = new GUIButton(this, buttonXPos, this.sys.game.canvas.height * 0.975 - buttonPadding, 0.8, 31);
        this.m_creditsButton = new GUIButton(this, buttonXPos, this.m_soundboardButton.y - this.m_soundboardButton.height - buttonPadding, 0.8, 31);
        this.m_helpButton = new GUIButton(this, buttonXPos, this.m_creditsButton.y - this.m_creditsButton.height - buttonPadding, 0.8, 31);
        this.m_playButton = new GUIButton(this, buttonXPos, this.m_helpButton.y - this.m_helpButton.height - buttonPadding, 0.8, 31);
        this.m_playButton.setButtonCallback(() => this.changeScene());
        this.m_soundboardButton.setButtonText("Soundboard");
        this.m_creditsButton.setButtonText("Credits");
        this.m_helpButton.setButtonText("Help");
        this.m_playButton.setButtonText("Play");

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
