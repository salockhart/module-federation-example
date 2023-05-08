import { Grid } from "@mui/material";
import { PriceCard } from "./PriceCard";

export const PriceGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PriceCard price="$2.99" image={require("../img/shapes-1.webp")} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PriceCard price="$3.99" image={require("../img/shapes-2.webp")} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PriceCard price="$6.99" image={require("../img/shapes-3.jpg")} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PriceCard price="$14.99" image={require("../img/shapes-4.webp")} />
      </Grid>
      <Grid item xs={12} md={6}>
        <PriceCard price="$2.99" image={require("../img/shapes-5.jpg")} />
      </Grid>
    </Grid>
  );
};
