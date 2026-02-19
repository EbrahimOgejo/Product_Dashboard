import { useState } from "react";
import { Button, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { products } from "../data/products";
import styles from "./ProductDashboard.module.css";

function ProductDashboard() {
  const [showAvailable, setShowAvailable] = useState(false);

  const filteredProducts = showAvailable
    ? products.filter((product) => product.available)
    : products;

  return (
    <>
      <div className={styles.container}>
        <Typography variant="h4" className={styles.title}>
          Product Dashboard
        </Typography>

        <Button
          variant="contained"
          onClick={() => setShowAvailable(!showAvailable)}
          data-testid="filter-button"
        >
          {showAvailable ? "Show All Products" : "Show Available Only"}
        </Button>

        <div className={styles.grid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <Typography>No products available.</Typography>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDashboard;
