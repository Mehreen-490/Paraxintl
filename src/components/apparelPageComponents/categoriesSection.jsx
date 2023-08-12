import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function CategoriesSection() {
  return (
    <Box sx={{ width: "100%", color: "#192d34" }}>
      {/* Parax & Intl heading Heading */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* Parax Typography */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "400",
            fontSize: "35px",
            lineHeight: "20px",
            fontFamily: "'Oswald', sans-serif",
            letterSpacing: "5px",
            pt: 12,
            color: " #192d34",
          }}
        >
          PARAX
        </Typography>
        {/* Intl Typography */}
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "10px",
            pt: 12.5,
            color: " #192d34",
          }}
        >
          INTL
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: "20px",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: "700",
              fontSize: "55px",
              lineHeight: "55px",
              color: "#192d34",
              pb: 3,
              letterSpacing: "1px",
            }}
          >
            PARAX INTERNATIONAL
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "22px",
              lineHeight: "43px",
              color: "#4b859b",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            Parax International is specialized in Casual wear, Outerwear, and
            Sportswear. Our company is a professional manufacturer and exporter
            of high-quality Apparels. We are an established supplier of
            customized Apparel backed by technical expertise and experience.
          </Typography>
          <Button
            component={NavLink}
            to="/product"
            variant="outlined"
            sx={{
              color: "black",
              border: "2px solid black",
              borderRadius: "0",
              width: "150px",
              "&:hover": {
                bgcolor: "#000000",
                color: "white",
                border: "0",
              },
            }}
          >
            Product Page
          </Button>
        </Box>{" "}
      </Box>
    </Box>
  );
}

export default CategoriesSection;
// dark: #192d34
// light: #bde7fd
