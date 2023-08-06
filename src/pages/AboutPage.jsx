import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Box } from "@mui/material";
import About from "../components/aboutPageComponents/about";

const AboutPage = () => {
  return (
    <Box>
      <Navbar />
      <About />
      <Footer />
    </Box>
  );
};

export default AboutPage;
