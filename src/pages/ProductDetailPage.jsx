import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MainBox from "../components/productDetailPageComponents/mainBox";
const ProductDetailPage = () => {
  return (
    <>
      <Box
        sx={{
          background: "#f6f9fc",
          color: "#192d34",
          px: {
            lg: 6,
            xs: 0,
          },
          py: 5,
        }}
      >
        <Navbar />
        <Box
          sx={{
            width: "100%",
            px: {
              md: 4,
              xs: 1,
            },
          }}
        >
          <MainBox />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
