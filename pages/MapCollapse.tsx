import { ReactNode } from "react";
import { Box } from "@mui/material";

type MapCollapseProps = {
  children: ReactNode
}

export default function MapCollapse(props: MapCollapseProps) {
  return (
    <Box component={'main'} sx={{ height: '90svh', display: 'flex'}}>
      {props.children}
    </Box>
  );
}