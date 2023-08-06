import { Box, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        pl: 24,
        pr: 30,
        pt: 10,
        pb: 15,
        color: "#192d34",
        backgroundImage:
          "linear-gradient(to bottom, #52bffa, #bde7fd, #b5e4fd, #9cdafc)",
        textAlign: "justify",
      }}
    >
      {/* Parax International Heading */}
      <Typography
        sx={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "55px",
          lineHeight: "55px",
          color: "#192d34",
          letterSpacing: "1px",
        }}
      >
        PARAX INTERNATIONAL
      </Typography>
      {/* Parax Desc */}
      <Typography
        sx={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 400,
          fontSize: "26px",
          lineHeight: "43px",
          letterSpacing: "0.6px",
          width: "90%",
          pt: 3,
          pb: 7,
        }}
      >
        Parax International is specialized in Sports Wear, Casual Wear, and
        outerwear. Our company is a professional manufacturer and exporter of
        high-quality Apparels. We are an established supplier of customized
        Apparel backed by technical expertise and experience.
      </Typography>
      {/* Quality Product Heading */}
      <Typography
        sx={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "30px",
          letterSpacing: "0.6px",
        }}
      >
        QUALITY PRODUCTS:
      </Typography>

      {/* Quality Product Desc */}
      <Typography
        sx={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 400,
          fontSize: "26px",
          lineHeight: "43px",
          letterSpacing: "0.6px",
          width: "90%",
          pt: 3,
          pb: 7,
        }}
      >
        No compromise when it comes to price or quality as we deliver both. With
        Pakistan based factory we manufacture Sports Wear, Casual Wear, and
        outerwear to the highest standard. Our customers fall in love with the
        quality. Parax International also guarantees you are working with a
        Supplier directly, not an agent.
      </Typography>
      {/* Why Choose Us Heading */}
      <Typography
        sx={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "30px",
          letterSpacing: "0.6px",
        }}
      >
        WHY CHOOSE US:
      </Typography>
      {/* Why Choose Us Desc */}
      <Box sx={{ display: "flex" }}>
        <CircleIcon sx={{ width: "13px", height: "13px", mr: 1.7, mt: 5 }} />
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "26px",
            lineHeight: "43px",
            letterSpacing: "0.6px",
            pt: 3,
            pb: 3,
          }}
        >
          We are devoting all our passion and interests in presenting you the
          best quality custom Apparels globally at your desired Prices.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "26px",
            lineHeight: "43px",
            letterSpacing: "0.6px",
          }}
        >
          {" "}
          1. Minimum Quantity
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "26px",
            lineHeight: "43px",
            letterSpacing: "0.6px",
          }}
        >
          {" "}
          2. Low Pricing
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "26px",
            lineHeight: "43px",
            letterSpacing: "0.6px",
          }}
        >
          3. Our Experience
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "26px",
            lineHeight: "43px",
            letterSpacing: "0.6px",
          }}
        >
          {" "}
          4. Highest Quality
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 400,
            fontSize: "26px",
            lineHeight: "43px",
            letterSpacing: "0.6px",
          }}
        >
          {" "}
          5. Samples & Prototypes
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
