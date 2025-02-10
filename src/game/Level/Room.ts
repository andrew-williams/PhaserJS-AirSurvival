import { Scene } from 'phaser';
import { Tile } from './Tile';

const kRoomSize:number = 21;
const kTileSize:number = 32;

export class Room
{

    private gameScene:Scene;
    private roomData:Array<Array<number>>;

    constructor (gameScene:Scene, roomData:Array<Array<number>>)
    {
        this.gameScene = gameScene;
        this.roomData = roomData;
    }

    public addRoomToLevel(xPos:number, yPos:number):void
    {
        
        // add base floor
        let xOffset:number = xPos * kRoomSize * kTileSize;
        let yOffset:number = yPos * kRoomSize * kTileSize;
        let baseFloor:Phaser.GameObjects.Image = this.gameScene.add.image(xOffset, yOffset, "roomTemplate");
        baseFloor.setOrigin(0,0);

        for (let rows:number = 0; rows < this.roomData.length; rows++)
        {
            for (let columns:number = 0; columns < this.roomData[rows].length; columns++)
            {
                if (this.roomData[rows][columns] != 0)
                {
                    let tile:Phaser.GameObjects.Image = this.gameScene.add.image(((rows * kTileSize) + xOffset), ((columns * kTileSize) + yOffset), Tile.getTileData(this.roomData[rows][columns]));
                    tile.setOrigin(0,0);
                }
            }
        }
    }

    public static generateWalls(roomData:Array<Array<number>>):Array<Array<number>>
    {
        const updatedRoomData:Array<Array<number>> = roomData;
        updatedRoomData[0][0] = Tile.wall_basic;
        updatedRoomData[1][0] = Tile.wall_basic;
        updatedRoomData[2][0] = Tile.wall_basic;
        updatedRoomData[3][0] = Tile.wall_basic;
        updatedRoomData[4][0] = Tile.wall_basic;
        updatedRoomData[5][0] = Tile.wall_basic;
        updatedRoomData[6][0] = Tile.wall_basic;
        updatedRoomData[7][0] = Tile.wall_basic;
        updatedRoomData[8][0] = Tile.wall_basic;
        updatedRoomData[12][0] = Tile.wall_basic;
        updatedRoomData[13][0] = Tile.wall_basic;
        updatedRoomData[14][0] = Tile.wall_basic;
        updatedRoomData[15][0] = Tile.wall_basic;
        updatedRoomData[16][0] = Tile.wall_basic;
        updatedRoomData[17][0] = Tile.wall_basic;
        updatedRoomData[18][0] = Tile.wall_basic;
        updatedRoomData[19][0] = Tile.wall_basic;
        updatedRoomData[20][0] = Tile.wall_basic;
        updatedRoomData[0][20] = Tile.wall_basic;
        updatedRoomData[1][20] = Tile.wall_basic;
        updatedRoomData[2][20] = Tile.wall_basic;
        updatedRoomData[3][20] = Tile.wall_basic;
        updatedRoomData[4][20] = Tile.wall_basic;
        updatedRoomData[5][20] = Tile.wall_basic;
        updatedRoomData[6][20] = Tile.wall_basic;
        updatedRoomData[7][20] = Tile.wall_basic;
        updatedRoomData[8][20] = Tile.wall_basic;
        updatedRoomData[12][20] = Tile.wall_basic;
        updatedRoomData[13][20] = Tile.wall_basic;
        updatedRoomData[14][20] = Tile.wall_basic;
        updatedRoomData[15][20] = Tile.wall_basic;
        updatedRoomData[16][20] = Tile.wall_basic;
        updatedRoomData[17][20] = Tile.wall_basic;
        updatedRoomData[18][20] = Tile.wall_basic;
        updatedRoomData[19][20] = Tile.wall_basic;
        updatedRoomData[20][20] = Tile.wall_basic;
        updatedRoomData[0][1] = Tile.wall_basic;
        updatedRoomData[0][2] = Tile.wall_basic;
        updatedRoomData[0][3] = Tile.wall_basic;
        updatedRoomData[0][4] = Tile.wall_basic;
        updatedRoomData[0][5] = Tile.wall_basic;
        updatedRoomData[0][6] = Tile.wall_basic;
        updatedRoomData[0][7] = Tile.wall_basic;
        updatedRoomData[0][8] = Tile.wall_basic;
        updatedRoomData[0][12] = Tile.wall_basic;
        updatedRoomData[0][13] = Tile.wall_basic;
        updatedRoomData[0][14] = Tile.wall_basic;
        updatedRoomData[0][15] = Tile.wall_basic;
        updatedRoomData[0][16] = Tile.wall_basic;
        updatedRoomData[0][17] = Tile.wall_basic;
        updatedRoomData[0][18] = Tile.wall_basic;
        updatedRoomData[0][19] = Tile.wall_basic;
        updatedRoomData[20][1] = Tile.wall_basic;
        updatedRoomData[20][2] = Tile.wall_basic;
        updatedRoomData[20][3] = Tile.wall_basic;
        updatedRoomData[20][4] = Tile.wall_basic;
        updatedRoomData[20][5] = Tile.wall_basic;
        updatedRoomData[20][6] = Tile.wall_basic;
        updatedRoomData[20][7] = Tile.wall_basic;
        updatedRoomData[20][8] = Tile.wall_basic;
        updatedRoomData[20][12] = Tile.wall_basic;
        updatedRoomData[20][13] = Tile.wall_basic;
        updatedRoomData[20][14] = Tile.wall_basic;
        updatedRoomData[20][15] = Tile.wall_basic;
        updatedRoomData[20][16] = Tile.wall_basic;
        updatedRoomData[20][17] = Tile.wall_basic;
        updatedRoomData[20][18] = Tile.wall_basic;
        updatedRoomData[20][19] = Tile.wall_basic;
        return updatedRoomData;
    }

}