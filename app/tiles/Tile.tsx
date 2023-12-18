import Box from '@mui/material/Box';
import testImg from './set1/tileset-32x32.png'

type TileProps = {
  size: number,
  entropy: number,
  bgImgPath: null | string,
  xPos: null | number,
  yPos: null | number,
}

export default function Tile(props: TileProps) {
  console.log(props);
  const { size, entropy, bgImgPath, xPos, yPos } = props;
  const isCollapsed: boolean = entropy === 0;

  return (
    <Box 
      sx={{ 
        width: `${size}px`,
        height: `${size}px`,
        background: isCollapsed ? `url(${bgImgPath})` : 'black',
        backgroundPosition: isCollapsed ? `-${xPos}px -${yPos}px` : '0 0',
        border: isCollapsed ? 'none' : '1px solid white',
      }}
    >
      {entropy || 'test'}
    </Box>
  );
}