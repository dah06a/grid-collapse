import './Test.css';
import { set1TileData } from './tiles/set1/set1TileData';
import Tile from './tiles/Tile';
import { TileData } from './tiles/set1/set1TileData';

export default function Test() {

  const lostTile: TileData = {
    tileType: 'none-found',
    tileRow: 0,
    tileCol: 0,
  }
  
  const testGrass = set1TileData.tiles.find(tile => tile.tileType === 'trees-full') || lostTile;

  return (
    <Tile 
      size={32}
      entropy={0}
      bgImgPath={set1TileData.localPath}
      xPos={testGrass.tileRow * set1TileData.tilesetSize}
      yPos={testGrass.tileCol * set1TileData.tilesetSize}
    />
  );
}