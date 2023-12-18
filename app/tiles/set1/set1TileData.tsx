export type TileData = {
  tileType: string,
  tileRow: number,
  tileCol: number,
}

type TilesetData = {
  title: string,
  author: string,
  url: URL,
  localPath: string,
  tilesetSize: number,
  tilesetWidth: number,
  tilesetHeight: number,
  tiles: TileData[],
}

export const set1TileData: TilesetData = {
  title: 'PunyWorld Overworld Free Tileset',
  author: 'Shade',
  url: new URL('https://opengameart.org/content/16x16-puny-world-tileset'),
  localPath: '/img/tileset-32x32.png',
  tilesetSize: 32,
  tilesetWidth: 864,
  tilesetHeight: 1216,
  tiles: [
    {
      tileType: 'short-grass',
      tileRow: 0,
      tileCol: 0,
    },
    {
      tileType: 'tall-grass-1',
      tileRow: 0,
      tileCol: 1,
    },
    {
      tileType: 'tall-grass-2',
      tileRow: 0,
      tileCol: 2,
    },
    {
      tileType: 'tall-grass-3',
      tileRow: 1,
      tileCol: 1,
    },
    {
      tileType: 'tall-grass-4',
      tileRow: 2,
      tileCol: 2,
    },
    {
      tileType: 'trees-full',
      tileRow: 1,
      tileCol: 8,
    },
    {
      tileType: 'trees-to-southeast',
      tileRow: 0,
      tileCol: 7,
    },
    {
      tileType: 'trees-to-south',
      tileRow: 1,
      tileCol: 7,
    },
    {
      tileType: 'trees-to-southwest',
      tileRow: 2,
      tileCol: 7,
    },
    {
      tileType: 'trees-to-west',
      tileRow: 2,
      tileCol: 8,
    },
    {
      tileType: 'trees-to-northwest',
      tileRow: 2,
      tileCol: 9,
    },
    {
      tileType: 'trees-to-north',
      tileRow: 1,
      tileCol: 9,
    },
    {
      tileType: 'trees-to-northeast',
      tileRow: 0,
      tileCol: 9,
    },
    {
      tileType: 'trees-to-east',
      tileRow: 0,
      tileCol: 8,
    },
    {
      tileType: 'lake-full',
      tileRow: 8,
      tileCol: 11,
    },
    {
      tileType: 'lake-to-southeast',
      tileRow: 7,
      tileCol: 10,
    },
    {
      tileType: 'lake-to-south',
      tileRow: 8,
      tileCol: 10,
    },
    {
      tileType: 'lake-to-southwest',
      tileRow: 9,
      tileCol: 10,
    },
    {
      tileType: 'lake-to-west',
      tileRow: 9,
      tileCol: 11,
    },
    {
      tileType: 'lake-to-northwest',
      tileRow: 9,
      tileCol: 12,
    },
    {
      tileType: 'lake-to-north',
      tileRow: 8,
      tileCol: 12,
    },
    {
      tileType: 'lake-to-northeast',
      tileRow: 7,
      tileCol: 12,
    },
    {
      tileType: 'lake-to-east',
      tileRow: 7,
      tileCol: 11,
    },
  ]
}