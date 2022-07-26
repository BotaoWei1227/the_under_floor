// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級2":
            case "層級2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "層級":
            case "層級1":return tiles.createTilemap(hex`10001000080f0f0f0f0f0f0f0f0f0f0f0f0f0f090c07070707070707070707070707070d0c07070707070707070707070707070d0c07070710101010101010100707070d0c07070710070711070707100707070d0c07070710070707070707100707070d0c07070710100407070510100707070d0c07070707070301010207070707070d0c07070707070301010207070707070d0c07070707070406060507070707070d0c07070707070707070707070707070d0c07070707070707070707070707070d0c07070707070707070707070707070d0c07070707070707070707070707070d0c07070707070707070707070707070d0a0e0e0e0e0e0e0e0e0e0e0e0e0e0e0b`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
. . . . 2 2 2 . . 2 2 2 . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.doorOpenEast,sprites.dungeon.doorOpenWest,sprites.dungeon.doorClosedWest,sprites.dungeon.doorClosedEast,sprites.dungeon.doorOpenSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorth,sprites.dungeon.floorLight0,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "我的貼圖":
            case "tile1":return tile1;
            case "我的貼圖0":
            case "tile2":return tile2;
            case "transparency16":return transparency16;
            case "我的貼圖1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
