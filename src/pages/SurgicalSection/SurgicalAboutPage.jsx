import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/SurgicalSectionComponents/navbar";
import AboutComponent from "../../components/SurgicalSectionComponents/aboutPageComponents/aboutComponent";
import Footer from "../../components/SurgicalSectionComponents/footer";

const SurgicalAboutPage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <AboutComponent />
      <Footer />
    </Box>
  );
};

export default SurgicalAboutPage;
// gray: #686d73
// black: #000000
