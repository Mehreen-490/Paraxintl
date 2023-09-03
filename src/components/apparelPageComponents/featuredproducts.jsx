import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";
import ProductCard from "../shared/productCard";

const Featuredproducts = () => {
  const product_card_detail = [
    {
      id: 1,
      name: "Castroviejo Corneal Scissors",
      image: images.featured_products.castroviejo_corneal_scissors,
      categories: ["Scissors"],
    },
    {
      id: 2,
      name: "Castroviejo Micro Corneal Scissors",
      image: images.featured_products.castroviejo_micro_corneal_scissors,
      categories: ["Scissors"],
    },
    {
      id: 3,
      name: "Castroviejo Miniature Corneal Scissors",
      image: images.featured_products.castroviejo_miniature_corneal_scissors,
      categories: ["Choppers Hooker and Probes"],
    },
    {
      id: 4,
      name: "Castroviejo Scissors",
      image: images.featured_products.castroviejo_scissors,
      categories: ["Eye Instruments", "Scissors"],
    },
    {
      id: 5,
      name: "Corneal Scissors",
      image: images.featured_products.corneal_scissors,
      categories: ["Eye Instruments", "Specialist Instruments"],
    },
  ];
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: "26px",
          lineHeight: "31px",
          color: "#2a2e39",
          pb: 2,
        }}
      >
        Featured Products
      </Typography>
      <Grid container columnSpacing={1} rowSpacing={2}>
        {product_card_detail.map((card) => (
          <Grid
            item
            key={card.id}
            xl={2.4}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            px={{
              md: 1,
              sm: 3,
              sx: 3,
            }}
          >
            <ProductCard
              name={card.name}
              image={card.image}
              categories={card.categories}
              bgcolor="#f6f6f6"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Featuredproducts;
