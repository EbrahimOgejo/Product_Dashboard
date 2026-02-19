import styles from "./ProductCard.module.css";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card className={styles.card} data-testid="product-card">
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6">
          {product.name}
        </Typography>

        <Typography variant="body1">
          Kshs {product.price}
        </Typography>

        {product.available ? (
          <Button variant="contained" color="success">
            In Stock
          </Button>
        ) : (
          <Button variant="outlined" color="error">
            Out of Stock
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default ProductCard;
