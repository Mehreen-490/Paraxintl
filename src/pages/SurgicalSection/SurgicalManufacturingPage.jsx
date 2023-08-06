import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/SurgicalSectionComponents/navbar";
import Footer from "../../components/SurgicalSectionComponents/footer";
import ManufacturingComponent from "../../components/SurgicalSectionComponents/manufacturingPageComponents/manufacturingComponent";

const SurgicalManufacturingPage = () => {
  return (
    <Box>
      <Navbar />
      <ManufacturingComponent />
      <Footer />
    </Box>
  );
};

export default SurgicalManufacturingPage;
