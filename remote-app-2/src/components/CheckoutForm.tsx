import { Button, Stack, TextField, Typography } from "@mui/material";

export const CheckoutForm = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h6">Address</Typography>
      <TextField label="Name" required />
      <TextField label="Email" type="email" />
      <TextField label="Address" required />
      <TextField label="Address 2" />
      <Stack direction="row" spacing={2} sx={{ flex: 1 }}>
        <TextField sx={{ flex: 1 }} label="Country" required />
        <TextField sx={{ flex: 1 }} label="Province" required />
        <TextField sx={{ flex: 1 }} label="Postal Code" required />
      </Stack>
      <Button variant="contained">Checkout</Button>
    </Stack>
  );
};
