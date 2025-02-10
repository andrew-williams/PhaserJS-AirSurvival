export class Tile
{
    static wall_basic:number = 1;
    static wall_basic_red:number = 2;
    static floor_start:number = 3;
    static floor_exit:number = 4;

    public static getTileData(id:number):string
    {
        const tileData:Map<number, string> = new Map<number, string>();
        tileData.set(0, "");
        tileData.set(1, "tempTile");
        tileData.set(2, "tempTile2");
        tileData.set(3, "start");
        tileData.set(4, "exit");

        let tileName:string|undefined = tileData.get(id);
        let returnTileName:string = "";
        if (tileName != undefined)
        {
            returnTileName = tileName;
        }
        return returnTileName;
    }
}