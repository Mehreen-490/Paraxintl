import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@mui/material";
import Footer from "../components/footer";
import CategoriesSection from "../components/apparelPageComponents/categoriesSection";

function ApparelPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <CategoriesSection />
      <Footer />
    </Box>
  );
}

export default ApparelPage;
