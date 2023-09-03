import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../shared/productCard";
import images from "../../assets/images";

function RelatedProducts() {
  const product_card_detail = [
    {
      id: 1,
      name: "Capsule",
      image: images.product_page.capsule,
      categories: ["Scissors"],
    },
    {
      id: 2,
      name: "Capsulotomy Scissors",
      image: images.product_page.capsulotomy_scissors,
      categories: ["Scissors"],
    },
    {
      id: 3,
      name: "Chauvasse Strabismus Hook",
      image: images.product_page.chauvasse_strabismus_hook,
      categories: ["Choppers Hooker and Probes"],
    },
    {
      id: 4,
      name: "Castroviejo Corneal Scissors",
      image: images.product_page.castroviejo_corneal_scissors,
      categories: ["Eye Instruments", "Scissors"],
    },
    {
      id: 5,
      name: "Cataract",
      image: images.product_page.cataract,
      categories: ["Eye Instruments", "Specialist Instruments"],
    },
  ];
  return (
    <Box width="100%">
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
        Related Products
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
              bgcolor="white"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RelatedProducts;
