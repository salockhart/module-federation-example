import { Box, Typography } from "@mui/material";
import { PriceGrid } from "./components/PriceGrid";

export const App = () => {
  return (
    <>
      <Typography variant="h4" sx={{ p: 1 }}>
        MFE Example: Remote App 1
      </Typography>
      <Box sx={{ p: 2 }}>
        <PriceGrid />
      </Box>
    </>
  );
};
