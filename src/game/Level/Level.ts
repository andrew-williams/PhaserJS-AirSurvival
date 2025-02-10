import { Scene } from 'phaser';
import { Room } from './Room';
import { Tile } from './Tile';

const kLevelSize:number = 3;
const kLevelData:Array<Array<number>> = [];

export class Level extends Phaser.GameObjects.Container
{

    //private m_levelSeed:number = -1;
    gameText: Phaser.GameObjects.Text;

    constructor (parentScene:Scene, roomData?:Array<Array<number>>)
    {
        super(parentScene);
        this.scene.add.container(13, 13);
        // Initialize blank level
        
        for (var rows:number = 0; rows < kLevelSize; rows++)
        {
            let columnData:Array<number> = [];
            for (var columns:number = 0; columns < kLevelSize; columns++)
            {
                columnData.push(-1);
            }
            kLevelData.push(columnData);
        }
    }

    public generateLevel():void
    {
        // Generate Seed
        //this.m_levelSeed = Math.random() * Number.MAX_SAFE_INTEGER;
        
        // Determine Start Room
        let startX:number = 0;//Math.floor(Math.random() * kLevelSize);
        let startY:number = 0;//Math.floor(Math.random() * kLevelSize);

        this.addRoom(startX, startY, 0, true, false);

        this.gameText = this.scene.add.text(512, 384, 'Make something fun! test\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

    }

    private addRoom(xPos:number, yPos:number, id:number, isStartRoom:boolean, isExitRoom:boolean):void
    {
        // Check if room origin point is empty
        if (kLevelData[xPos][yPos] == -1)
        {
            kLevelData[xPos][yPos] = id;
            // Create a new Room
            let newRoom:Room = new Room(this.scene, this.generateRoomTemplate(id));
            // Add room to level
            newRoom.addRoomToLevel(xPos, yPos);
        }
        //{
            // Add room to the level
            //this.add(newRoom);
            // Store Room
            //kLevelData[xPos][yPos] = newRoom;
            // RNG exits code here
        //}
    }

    private generateRoomTemplate(id:number):Array<Array<number>> {
        // Generate a room template
        // 0 = start rooom
        const kRoomSize:number = 21;
        var roomData:Array<Array<number>> = [];
        // Empty
        for (var rows:number = 0; rows < kRoomSize; rows++)
        {
            let columnData:Array<number> = [];
            for (var columns:number = 0; columns < kRoomSize; columns++)
            {
                columnData.push(0);
            }
            roomData.push(columnData);
        }
        roomData = Room.generateWalls(roomData);

        switch (id)
        {
            case 0: // Start Room
                // Floor
                roomData[9][9] = Tile.floor_start;
                // Walls
                roomData[8][8] = Tile.wall_basic_red;
                roomData[9][8] = Tile.wall_basic_red;
                roomData[10][8] = Tile.wall_basic_red;
                roomData[11][8] = Tile.wall_basic_red;
                roomData[12][8] = Tile.wall_basic_red;
                roomData[8][9] = Tile.wall_basic_red;
                roomData[8][10] = Tile.wall_basic_red;
                roomData[8][11] = Tile.wall_basic_red;
                roomData[12][9] = Tile.wall_basic_red;
                roomData[12][10] = Tile.wall_basic_red;
                roomData[12][11] = Tile.wall_basic_red;
                roomData[8][12] = Tile.wall_basic_red;
                roomData[9][12] = Tile.wall_basic_red;
                roomData[11][12] = Tile.wall_basic_red;
                roomData[12][12] = Tile.wall_basic_red;
                break;
        }
        return roomData;
    }

}
