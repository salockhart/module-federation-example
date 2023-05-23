import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  price: string;
  image: string;
}

export const PriceCard: React.FC<Props> = ({ price, image }) => {
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} />
      <CardContent>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <IconButton size="small" color="primary">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
