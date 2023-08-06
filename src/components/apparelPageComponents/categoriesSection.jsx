import { Box, Typography } from "@mui/material";
import React from "react";

function CategoriesSection() {
  return (
    <Box sx={{ width: "100%", color: "#192d34" }}>
      {/* Parax & Intl heading Heading */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* Parax Typography */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "500",
            fontSize: "45px",
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
            fontSize: "14px",
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
              fontSize: "24px",
              lineHeight: "33px",
              color: "#4b859b",
              letterSpacing: "1px",
            }}
          >
            Parax International is specialized in Casual wear, Outerwear, and
            Sportswear. Our company is a professional manufacturer and exporter
            of high-quality Apparels. We are an established supplier of
            customized Apparel backed by technical expertise and experience.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CategoriesSection;
// dark: #192d34
// light: #bde7fd
