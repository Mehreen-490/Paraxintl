import React from "react";
import { Box } from "@mui/material";
import MainSlider from "../../src/components/apparelPageComponents/mainSlider";
import Navbar from "../../src/components/navbar";
import Footer from "../../src/components/footer";
// import CategoriesSection from "../../src/components/apparelPageComponents/categoriesSection";
import ProductQuality from "../components/apparelPageComponents/productQuality";
import ProductCategoies from "../components/apparelPageComponents/productCategoies";
import Featuredproducts from "../components/apparelPageComponents/featuredproducts";
import OverlaySection from "../components/apparelPageComponents/overlaySection";
import ProductSlider from "../components/apparelPageComponents/productSlider";
function ApparelPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <MainSlider />
      <Box sx={{ px: 8, py: 4 }}>
        <ProductQuality />
        <ProductCategoies />
        <Featuredproducts />
      </Box>
      <OverlaySection />
      <Box sx={{ px: 8, py: 4 }}>
        <ProductSlider />
      </Box>

      {/* <CategoriesSection /> */}
      <Footer />
    </Box>
  );
}

export default ApparelPage;
