import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/ApparelSectionComponents/productPageComponents/sidebar";
import Footer from "../../components/footer";
import MainBox from "../../components/ApparelSectionComponents/productDetailPageComponents/mainBox";
const ApparelProductDetailPage = () => {
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

export default ApparelProductDetailPage;
