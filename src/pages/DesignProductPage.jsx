import { Box, Grid, Pagination, Stack } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/designProductPageComponents/sidebar";
import Footer from "../components/footer";
import ListGridBar from "../components/designProductPageComponents/listGridBar";
import images from "../assets/images";
//eslint-disable-next-line
import ProductGridCard from "../components/designProductPageComponents/productGridCard";
//eslint-disable-next-line
import ProductListCard from "../components/designProductPageComponents/productListCard";
const DesignProductPage = () => {
  const product_card_detail = [
    {
      id: 1,
      name: "Assaf Muscle Hook",
      image: images.product_page.assaf_muscle_hook,
      categories: ["Choppers Hooker and Probes"],
    },
    {
      id: 2,
      name: "Barraquer",
      image: images.product_page.barraquer,
      categories: ["Needle Holders"],
    },
    {
      id: 3,
      name: "Barraquer Iris Scissors",
      image: images.product_page.barraquer_iris_scissors,
      categories: ["Scissors"],
    },
    {
      id: 4,
      name: "Barraquer Speculum",
      image: images.product_page.barraquer_speculum,
      categories: ["Eye Instruments", "Specula"],
    },
    {
      id: 5,
      name: "Bell Taylor Vectis",
      image: images.product_page.bell_taylor_vectis,
      categories: ["Choppers Hooker and Probes"],
    },
    {
      id: 6,
      name: "Capsule",
      image: images.product_page.capsule,
      categories: ["Scissors"],
    },
    {
      id: 7,
      name: "Capsulotomy Scissors",
      image: images.product_page.capsulotomy_scissors,
      categories: ["Scissors"],
    },
    {
      id: 8,
      name: "Chauvasse Strabismus Hook",
      image: images.product_page.chauvasse_strabismus_hook,
      categories: ["Choppers Hooker and Probes"],
    },
    {
      id: 9,
      name: "Castroviejo Corneal Scissors",
      image: images.product_page.castroviejo_corneal_scissors,
      categories: ["Eye Instruments", "Scissors"],
    },
    {
      id: 10,
      name: "Cataract",
      image: images.product_page.cataract,
      categories: ["Eye Instruments", "Specialist Instruments"],
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#f6f9fc",
        color: "#192d34",
        pt: 5,
      }}
    >
      <Navbar />
      <Box
        sx={{
          px: {
            lg: 3,
            md: 3,
            xs: 2,
          },
          pb: 15,
          // pr: 1,
        }}
      >
        <Box py={3} px={{ xl: 0.8, lg: 1, md: 1 }} width="100%">
          <ListGridBar />
        </Box>
        <Stack direction="row" py={3}>
          {/* Sidebar Box */}
          <Box
            sx={{
              width: {
                lg: "340px",
                xs: 0,
              },
              display: {
                lg: "block",
                xs: "none",
              },
            }}
          >
            <Sidebar />
          </Box>
          {/* Product List Card */}
          <Box
            sx={{
              pl: {
                lg: 4,
                xs: 0,
              },
              pr: 1,
              width: "100%",
            }}
          >
            <Grid container rowSpacing={2}>
              {product_card_detail.map((card) => (
                <Grid key={card.id} item xs={12}>
                  <ProductListCard
                    name={card.name}
                    image={card.image}
                    categories={card.categories}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Product Card Grid  */}
          {/* <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: {
                lg: 2,
                xs: 0,
              },
            }}
          >
            <Grid container columnSpacing={2} rowSpacing={2} width="100%">
              {product_card_detail.map((card) => (
                <Grid item key={card.id} xl={3} lg={4} md={4} sm={6} xs={12}>
                  <ProductGridCard
                    name={card.name}
                    image={card.image}
                    categories={card.categories}
                  />
                </Grid>
              ))}
            </Grid>
          </Box> */}
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end ",
            pr: 1,
          }}
        >
          <Pagination count={10} variant="outlined" sx={{ color: "#2a2e39" }} />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default DesignProductPage;
