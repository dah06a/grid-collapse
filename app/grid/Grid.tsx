"use client"

import { ReactNode } from "react";
import { Box } from "@mui/material";
import Test from "../Test";

export default function Grid() {

  const GRID_WIDTH: number = 25;
  const GRID_HEIGHT: number = 15;
  const GRID_SIZE: number = 32;
  const t: number = (GRID_WIDTH * GRID_HEIGHT);
  const w: number = GRID_WIDTH * GRID_SIZE;
  const h: number = GRID_HEIGHT * GRID_SIZE;

  const tiles: ReactNode[] = [];
  for (let i = 0; i < t; i++) {
    tiles.push(<Test />);
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexWrap: 'wrap',
      width: w,
      height: h,
      alignSelf: 'center',
      mx: 'auto',
      backgroundColor: 'grey',
    }}>
      {tiles}
    </Box>
  );

}