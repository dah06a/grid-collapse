import Box from '@mui/material/Box';

type TileProps = {
  size: number,
  entropy: number,
  bgImgPath: null | string,
  xPos: null | number,
  yPos: null | number,
}

export default function Tile(props: TileProps) {
  const { size, entropy, bgImgPath, xPos, yPos } = props;
  const isCollapsed: boolean = entropy === 0;

  return (
    <Box 
      sx={{ 
        width: `${size}px`,
        height: `${size}px`,
        background: isCollapsed ? `url(${bgImgPath})` : 'black',
        backgroundPosition: isCollapsed ? `-${xPos}px -${yPos}px` : '0 0',
        border: isCollapsed ? 'none' : '0.5px solid white',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {entropy || null}
    </Box>
  );
}