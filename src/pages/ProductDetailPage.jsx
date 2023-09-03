import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/productPageComponents/sidebar";
import MainBox from "../components/productDetailPageComponents/mainBox";
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
        <Box sx={{ width: "300px" }}>
          <Sidebar />
        </Box>
        <Box sx={{ width: "calc(100% - 300px)" }}>
          <MainBox />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetailPage;
