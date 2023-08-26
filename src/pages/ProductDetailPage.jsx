import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MainBox from "../components/productPageComponents/mainBox";
const ProductDetailPage = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to bottom, #52bffa, #bde7fd, #b5e4fd, #9cdafc)",
        color: "#192d34",
      }}
    >
      <Navbar />
      <Box sx={{ display: "flex" }} width="100%">
        <Box width="30%">{/* <Sidebar /> */}</Box>
        <Box width="70%">
          <MainBox />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetailPage;
