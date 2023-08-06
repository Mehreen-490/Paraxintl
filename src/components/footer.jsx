import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import images from "../assets/images";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "650px",
        background: "#192d34",
        display: "flex",
        flexDirection: "column",
        color: "#bde7fd",
        letterSpacing: "1px",
      }}
    >
      {/* Upper Footer Section */}
      <Box
        sx={{
          display: "flex",
          height: "75%",
          pt: 3,
          py: 12,
          pl: 14,
          pr: 8,
        }}
      >
        {/* Parax Heading & Desc. */}
        <Box sx={{ width: "30%" }}>
          {/* Parax heading */}
          <Typography
            variant="h2"
            sx={{
              fontSize: "25px",
              lineHeight: "25px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 3,
            }}
          >
            PARAX INTERNATIONAL
          </Typography>
          {/* Parax Deasc */}
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "39px",
              fontFamily: "'Barlow Condensed', sans-serif",
              width: "390px",
              textAlign: "justify",
            }}
          >
            Parax International is a manufacturer of extreme quality Sports
            Wear, Casual Wear, and outerwear. We are an established and popular
            company with an excellent track record for the best customer
            satisfaction. Our main goal is to provide the best quality product
            and services at competitive prices to our worthy customers.
          </Typography>
        </Box>
        {/* Quick Links */}
        <Box sx={{ width: "20%" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "25px",
              lineHeight: "25px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 3,
            }}
          >
            QUICK LINKS
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "41px",
              fontWeight: "500",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "41px",
              fontWeight: "500",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            How To Order
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "41px",
              fontWeight: "500",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "41px",
              fontWeight: "500",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Contact Us
          </Typography>
        </Box>
        {/* Product Categories */}
        <Box sx={{ width: "20%" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "25px",
              lineHeight: "25px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 3,
            }}
          >
            PRODUCT CATEGORIES
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "41px",
              fontWeight: "500",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Sports Wear
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "41px",
              fontWeight: "500",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Casual Wear
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "41px",
              fontWeight: "500",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Fitness Wear
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              lineHeight: "41px",
              fontWeight: "500",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Fashion Jackets
          </Typography>
        </Box>
        {/* Get In Touch */}
        <Box sx={{ width: "20%" }}>
          {/* Heading Typography */}
          <Typography
            variant="h2"
            sx={{
              fontSize: "25px",
              lineHeight: "25px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 3.5,
            }}
          >
            GET IN TOUCH
          </Typography>
          {/* Address Box */}
          <Box sx={{ display: "flex", pb: "10px" }}>
            {/* Address PNG */}
            <Box sx={{ pt: "15px", pr: "12px" }}>
              <Avatar
                src={images.address}
                sx={{ borderRadius: "0", width: "30px", height: "30px" }}
              />
            </Box>
            {/* Address */}
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontWeight: "600",
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                Address:
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "31px",
                  fontWeight: "500",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  pb: "10px",
                }}
              >
                DASKA ROAD, PASRUR BYPASS, PAKKI KOTLI, SIALKOT-51310, PAKISTAN
              </Typography>
            </Box>
          </Box>
          {/* Phone Box */}
          <Box sx={{ display: "flex", pb: "10px" }}>
            {/* Phone PNG */}
            <Box sx={{ pt: "15px", pr: "12px" }}>
              <Avatar
                src={images.phone}
                sx={{ borderRadius: "0", width: "30px", height: "30px" }}
              />
            </Box>
            {/* Phone Number */}
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontWeight: "600",
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                Phone:
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "31px",
                  fontWeight: "500",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  pb: "10px",
                }}
              >
                +92 300 6175621
              </Typography>
            </Box>
          </Box>
          {/* Email Box */}
          <Box sx={{ display: "flex", pb: "10px" }}>
            {/* Email Png */}
            <Box sx={{ pt: "15px", pr: "12px" }}>
              <Avatar
                src={images.mail}
                sx={{ borderRadius: "0", width: "30px", height: "30px" }}
              />
            </Box>
            {/* Email Address */}
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontWeight: "600",
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                Email:
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "31px",
                  fontWeight: "500",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  pb: "10px",
                }}
              >
                sales@paraxintl.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          height: "1.5%",
          width: "84%",
          bgcolor: "#bde7fd",
          ml: 12,
          mr: 15,
        }}
      ></Box>
      {/* Lower Footer Section */}
      <Box
        sx={{
          pl: 14,
          pr: 29,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          src={images.facebook}
          sx={{ borderRadius: "0", mr: 3, width: "28px", height: "28px" }}
        />
        <Avatar
          src={images.twitter}
          sx={{ borderRadius: "0", mx: 3, width: "28px", height: "28px" }}
        />
        <Avatar
          src={images.linkedin}
          sx={{ borderRadius: "0", mx: 3, width: "28px", height: "28px" }}
        />
        {/* Copyright 2023 */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: "400",
            fontSize: "17px",
            lineHeight: "23px",
            ml: "auto",
          }}
        >
          Copyright – 2023 – All rights reserved by ARK Web Solutions
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
// dark: #192d34
// light: #bde7fd
