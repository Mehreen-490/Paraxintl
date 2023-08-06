import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ContactInfo from "../../components/contactPageComponents.jsx/contactInfo";
import ContactForm from "../../components/contactPageComponents.jsx/contactForm";

const ApparelContactPage = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          pl: 24,
          pr: 30,
          py: 10,
          color: "#192d34",
          backgroundImage:
            "linear-gradient(to bottom, #52bffa, #bde7fd, #b5e4fd, #9cdafc)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: "700",
            fontSize: "65px",
            lineHeight: "55px",
            color: "#192d34",
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

export default ApparelContactPage;
