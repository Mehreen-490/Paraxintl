import React from "react";
import { Box } from "@mui/material";
import MainSlider from "../../components/apparelPageComponents/mainSlider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CategoriesSection from "../../components/apparelPageComponents/categoriesSection";
function ApparelPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <MainSlider />
      <CategoriesSection />
      <Footer />
    </Box>
  );
}

export default ApparelPage;
