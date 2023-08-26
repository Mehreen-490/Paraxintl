import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/productPageComponents/sidebar";
import Footer from "../components/footer";
import MainBox from "../components/productPageComponents/mainBox";
const ApparelProductPage = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to bottom, #52bffa, #bde7fd, #b5e4fd, #9cdafc)",
        color: "#192d34",
      }}
    >
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <MainBox />
      </Box>
      <Footer />
    </Box>
  );
};

export default ApparelProductPage;
