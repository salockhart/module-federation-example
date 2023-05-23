import { Box, Typography } from "@mui/material";
import { CheckoutForm } from "./components/CheckoutForm";

export const App = () => {
  return (
    <>
      <Typography variant="h4" sx={{ p: 1 }}>
        MFE Example: Remote App 2
      </Typography>
      <Box sx={{ p: 2 }}>
        <CheckoutForm />
      </Box>
    </>
  );
};
