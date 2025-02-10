import { GameObjects, Scene } from 'phaser';

export class Preloader extends Scene
{
    
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        
        //  We loaded this image in our Boot Scene, so we can display it here
        let background:GameObjects.Image = this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height, 'background');
        background.setOrigin(0.5,1);   
        let scaleToViewport:number = this.sys.game.canvas.height / background.height;
        background.setScale(scaleToViewport);

        //  A simple progress bar. This is the outline of the bar.
        let rectangle:GameObjects.Rectangle = this.add.rectangle(this.sys.game.canvas.width * 0.1, this.sys.game.canvas.height * 0.95, this.sys.game.canvas.width * 0.8, 32).setStrokeStyle(1, 0xffffff);
        rectangle.setOrigin(0, 1);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(rectangle.x, this.sys.game.canvas.height * 0.95, 4, 32, 0xffffff);
        bar.setOrigin(0, 1);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {

            //  Update the progress bar
            bar.width = 4 + (this.sys.game.canvas.width * 0.8 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');
        this.load.image('star', 'star.png');

        // GUI
        this.load.image('gameHUD', 'GUI/TempHud.png');
        // Level
        this.load.image('roomTemplate', 'Level/BaseFloor.png');
        this.load.image('tempTile', 'Level/TempTile.png');
        this.load.image('tempTile2', 'Level/TempTile2.png');
        this.load.image('start', 'Level/start.png');
        this.load.image('exit', 'Level/exit.png');
        // Entities
        this.load.spritesheet('player', 'Player/Player_SpriteSheet.png', { frameWidth : 64, frameHeight : 64 });
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
