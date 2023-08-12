import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/SurgicalSectionComponents/footer";
import Navbar from "../../components/SurgicalSectionComponents/navbar";
import ContactForm from "../../components/SurgicalSectionComponents/contactPageComponents.jsx/contactForm";
import ContactInfo from "../../components/SurgicalSectionComponents/contactPageComponents.jsx/contactInfo";

const SurgicalContactPage = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          // pl: 24,
          // pr: 30,
          py: 3,
          color: "black",
          backgroundImage:
            "linear-gradient(to bottom, #686d73, #a1a5aa, #bcbfc2, #61656b)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: "700",
            fontSize: "50px",
            lineHeight: "50px",
            color: "black",
            pb: 3,
            letterSpacing: "1px",
          }}
        >
          GET IN TOUCH
        </Typography>
        <Box sx={{ width: "100%", display: "flex" }}>
          <ContactForm />
          <ContactInfo />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default SurgicalContactPage;
// gray: #686d73
// black: #000000
// fontFamily: "'Barlow Condensed', sans-serif",
// font-family: 'Roboto', sans-serif;
