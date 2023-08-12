import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/material";
import Footer from "../components/footer";
import CategoriesSection from "../components/apparelPageComponents/categoriesSection";
import MainSlider from "../components/apparelPageComponents/mainSlider";

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
