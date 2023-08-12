import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import images from "../assets/images";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        backgroundImage: `url(${images.footer})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        color: "#bde7fd",
        letterSpacing: "1px",
        pt: 30,
        px: {
          xs: 5,
          sm: 10,
          md: 10,
          lg: 10,
          xl: 10,
        },
        pb: 1,
      }}
    >
      <Grid container columnSpacing={1}>
        {/* Parax Heading & Desc. */}
        <Grid item xl={3.5} lg={6} sm={12} p={3}>
          {/* Parax heading */}
          <Typography
            variant="h2"
            sx={{
              fontSize: "25px",
              lineHeight: "25px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 3,
              letterSpacing: "1px",
            }}
          >
            PARAX INTERNATIONAL
          </Typography>
          {/* Parax Deasc */}
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "29px",
              fontFamily: "'Barlow Condensed', sans-serif",
              // width: "390px",
              textAlign: "justify",
            }}
          >
            Parax International is a manufacturer of extreme quality Sports
            Wear, Casual Wear, and outerwear. We are an established and popular
            company with an excellent track record for the best customer
            satisfaction. Our main goal is to provide the best quality product
            and services at competitive prices to our worthy customers.
          </Typography>
        </Grid>
        {/* Quick Links */}
        <Grid item xl={2.5} lg={6} sm={12} p={3}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "25px",
              lineHeight: "25px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 3,
              letterSpacing: "1px",
            }}
          >
            QUICK LINKS
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "31px",
              fontWeight: 400,
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "31px",
              fontWeight: 400,
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            How To Order
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "31px",
              fontWeight: 400,
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "31px",
              fontWeight: 400,
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Contact Us
          </Typography>
        </Grid>
        {/* Product Categories */}
        <Grid item xl={2.5} lg={6} sm={12} p={3}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "25px",
              lineHeight: "25px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 3,
              letterSpacing: "1px",
            }}
          >
            PRODUCT CATEGORIES
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "31px",
              fontWeight: 400,
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Sports Wear
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "31px",
              fontWeight: 400,
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Casual Wear
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "31px",
              fontWeight: 400,
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Fitness Wear
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              lineHeight: "31px",
              fontWeight: 400,
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: "10px",
            }}
          >
            Fashion Jackets
          </Typography>
        </Grid>
        {/* Get In Touch */}
        <Grid item xl={3.5} lg={6} sm={12} p={3}>
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
          <Box sx={{ display: "flex", pb: "5px" }}>
            {/* Address PNG */}
            <Box sx={{ pt: "20px", pr: "12px" }}>
              <Avatar
                src={images.address}
                sx={{ borderRadius: "0", width: "25px", height: "25px" }}
              />
            </Box>
            {/* Address */}
            <Box>
              <Typography
                sx={{
                  fontSize: "17px",
                  lineHeight: "31px",
                  fontWeight: 600,
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                Address:
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  lineHeight: "31px",
                  fontWeight: 400,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  // pb: "10px",
                }}
              >
                DASKA ROAD, PASRUR BYPASS, PAKKI KOTLI, SIALKOT-51310, PAKISTAN
              </Typography>
            </Box>
          </Box>
          {/* Phone Box */}
          <Box sx={{ display: "flex", pb: "5px" }}>
            {/* Phone PNG */}
            <Box sx={{ pt: "15px", pr: "12px" }}>
              <Avatar
                src={images.phone}
                sx={{ borderRadius: "0", width: "25px", height: "25px" }}
              />
            </Box>
            {/* Phone Number */}
            <Box>
              <Typography
                sx={{
                  fontSize: "17px",
                  lineHeight: "31px",
                  fontWeight: 600,
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                Phone:
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  lineHeight: "31px",
                  fontWeight: 400,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  // pb: "10px",
                }}
              >
                +92 300 6175621
              </Typography>
            </Box>
          </Box>
          {/* Email Box */}
          <Box sx={{ display: "flex", pb: "5px" }}>
            {/* Email Png */}
            <Box sx={{ pt: "15px", pr: "12px" }}>
              <Avatar
                src={images.mail}
                sx={{ borderRadius: "0", width: "25px", height: "25px" }}
              />
            </Box>
            {/* Email Address */}
            <Box>
              <Typography
                sx={{
                  fontSize: "17px",
                  lineHeight: "31px",
                  fontWeight: 600,
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                Email:
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  lineHeight: "31px",
                  fontWeight: 400,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  pb: "10px",
                }}
              >
                sales@paraxintl.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Divider */}
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            height: "4px",
            width: "100%",
            bgcolor: "#bde7fd",
          }}
        ></Box>
      </Box>
      {/* Lower Footer Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            sm: "center",
          },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          p: 4,
        }}
      >
        <Box display="flex" p={2}>
          <Avatar
            src={images.facebook}
            sx={{ borderRadius: "0", mr: 2, width: "22px", height: "22px" }}
          />
          <Avatar
            src={images.twitter}
            sx={{ borderRadius: "0", mx: 2, width: "22px", height: "22px" }}
          />
          <Avatar
            src={images.linkedin}
            sx={{ borderRadius: "0", mx: 2, width: "22px", height: "22px" }}
          />
        </Box>
        {/* Copyright 2023 */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: "400",
            fontSize: "17px",
            lineHeight: "23px",
            ml: {
              xs: 0,
              sm: 0,
              md: "auto",
            },
            textAlign: "center",
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
//  {/* Upper Footer Section */}
//  <Box
//  sx={{
//    display: "flex",
//    height: "75%",
//    pt: 5,
//    pl: 11,
//    pr: 8,
//  }}
// >
//  {/* Parax Heading & Desc. */}
//  <Box sx={{ width: "33%", p: 3 }}>
//  {/* Parax heading */}
//  <Typography
//    variant="h2"
//    sx={{
//      fontSize: "25px",
//      lineHeight: "25px",
//      fontWeight: "600",
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: 3,
//      letterSpacing: "1px",
//    }}
//  >
//    PARAX INTERNATIONAL
//  </Typography>
//  {/* Parax Deasc */}
//  <Typography
//    sx={{
//      fontWeight: "400",
//      fontSize: "16px",
//      lineHeight: "29px",
//      fontFamily: "'Barlow Condensed', sans-serif",
//      // width: "390px",
//      textAlign: "justify",
//    }}
//  >
//    Parax International is a manufacturer of extreme quality Sports
//    Wear, Casual Wear, and outerwear. We are an established and popular
//    company with an excellent track record for the best customer
//    satisfaction. Our main goal is to provide the best quality product
//    and services at competitive prices to our worthy customers.
//  </Typography>
//  </Box>
//  {/* Quick Links */}
//  <Box sx={{ width: "17%", p: 3 }}>
//  <Typography
//    variant="h2"
//    sx={{
//      fontSize: "25px",
//      lineHeight: "25px",
//      fontWeight: "600",
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: 3,
//      letterSpacing: "1px",
//    }}
//  >
//    QUICK LINKS
//  </Typography>
//  <Typography
//    sx={{
//      fontSize: "17px",
//      lineHeight: "31px",
//      fontWeight: 400,
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: "10px",
//    }}
//  >
//    Home
//  </Typography>
//  <Typography
//    sx={{
//      fontSize: "17px",
//      lineHeight: "31px",
//      fontWeight: 400,
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: "10px",
//    }}
//  >
//    How To Order
//  </Typography>
//  <Typography
//    sx={{
//      fontSize: "17px",
//      lineHeight: "31px",
//      fontWeight: 400,
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: "10px",
//    }}
//  >
//    About Us
//  </Typography>
//  <Typography
//    sx={{
//      fontSize: "17px",
//      lineHeight: "31px",
//      fontWeight: 400,
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: "10px",
//    }}
//  >
//    Contact Us
//  </Typography>
//  </Box>
//  {/* Product Categories */}
//  <Box sx={{ width: "20%", p: 3 }}>
//  <Typography
//    variant="h2"
//    sx={{
//      fontSize: "25px",
//      lineHeight: "25px",
//      fontWeight: "600",
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: 3,
//      letterSpacing: "1px",
//    }}
//  >
//    PRODUCT CATEGORIES
//  </Typography>
//  <Typography
//    sx={{
//      fontSize: "17px",
//      lineHeight: "31px",
//      fontWeight: 400,
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: "10px",
//    }}
//  >
//    Sports Wear
//  </Typography>
//  <Typography
//    sx={{
//      fontSize: "17px",
//      lineHeight: "31px",
//      fontWeight: 400,
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: "10px",
//    }}
//  >
//    Casual Wear
//  </Typography>
//  <Typography
//    sx={{
//      fontSize: "17px",
//      lineHeight: "31px",
//      fontWeight: 400,
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: "10px",
//    }}
//  >
//    Fitness Wear
//  </Typography>
//  <Typography
//    sx={{
//      fontSize: "17px",
//      lineHeight: "31px",
//      fontWeight: 400,
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: "10px",
//    }}
//  >
//    Fashion Jackets
//  </Typography>
//  </Box>
//  {/* Get In Touch */}
//  <Box sx={{ width: "25%", p: 3 }}>
//  {/* Heading Typography */}
//  <Typography
//    variant="h2"
//    sx={{
//      fontSize: "25px",
//      lineHeight: "25px",
//      fontWeight: "600",
//      fontFamily: "'Barlow Condensed', sans-serif",
//      pb: 3.5,
//    }}
//  >
//    GET IN TOUCH
//  </Typography>
//  {/* Address Box */}
//  <Box sx={{ display: "flex", pb: "5px" }}>
//    {/* Address PNG */}
//    <Box sx={{ pt: "20px", pr: "12px" }}>
//      <Avatar
//        src={images.address}
//        sx={{ borderRadius: "0", width: "25px", height: "25px" }}
//      />
//    </Box>
//    {/* Address */}
//    <Box>
//      <Typography
//        sx={{
//          fontSize: "17px",
//          lineHeight: "31px",
//          fontWeight: 600,
//          fontFamily: "'Barlow Condensed', sans-serif",
//        }}
//      >
//        Address:
//      </Typography>
//      <Typography
//        sx={{
//          fontSize: "17px",
//          lineHeight: "31px",
//          fontWeight: 400,
//          fontFamily: "'Barlow Condensed', sans-serif",
//          // pb: "10px",
//        }}
//      >
//        DASKA ROAD, PASRUR BYPASS, PAKKI KOTLI, SIALKOT-51310, PAKISTAN
//      </Typography>
//    </Box>
//  </Box>
//  {/* Phone Box */}
//  <Box sx={{ display: "flex", pb: "5px" }}>
//    {/* Phone PNG */}
//    <Box sx={{ pt: "15px", pr: "12px" }}>
//      <Avatar
//        src={images.phone}
//        sx={{ borderRadius: "0", width: "25px", height: "25px" }}
//      />
//    </Box>
//    {/* Phone Number */}
//    <Box>
//      <Typography
//        sx={{
//          fontSize: "17px",
//          lineHeight: "31px",
//          fontWeight: 600,
//          fontFamily: "'Barlow Condensed', sans-serif",
//        }}
//      >
//        Phone:
//      </Typography>
//      <Typography
//        sx={{
//          fontSize: "17px",
//          lineHeight: "31px",
//          fontWeight: 400,
//          fontFamily: "'Barlow Condensed', sans-serif",
//          // pb: "10px",
//        }}
//      >
//        +92 300 6175621
//      </Typography>
//    </Box>
//  </Box>
//  {/* Email Box */}
//  <Box sx={{ display: "flex", pb: "5px" }}>
//    {/* Email Png */}
//    <Box sx={{ pt: "15px", pr: "12px" }}>
//      <Avatar
//        src={images.mail}
//        sx={{ borderRadius: "0", width: "25px", height: "25px" }}
//      />
//    </Box>
//    {/* Email Address */}
//    <Box>
//      <Typography
//        sx={{
//          fontSize: "17px",
//          lineHeight: "31px",
//          fontWeight: 600,
//          fontFamily: "'Barlow Condensed', sans-serif",
//        }}
//      >
//        Email:
//      </Typography>
//      <Typography
//        sx={{
//          fontSize: "17px",
//          lineHeight: "31px",
//          fontWeight: 400,
//          fontFamily: "'Barlow Condensed', sans-serif",
//          pb: "10px",
//        }}
//      >
//        sales@paraxintl.com
//      </Typography>
//    </Box>
//  </Box>
//  </Box>
// </Box>
// {/* Divider */}
// <Box
//  sx={{
//    height: "1px",
//    width: "84%",
//    bgcolor: "#bde7fd",
//    ml: 12,
//    mr: 15,
//    my: 2,
//  }}
// ></Box>
// {/* Lower Footer Section */}
// <Box
//  sx={{
//    pl: 14,
//    pr: 29,
//    // height: "100%",
//    display: "flex",
//    alignItems: "center",
//    // py: 5,
//    py: 1,
//  }}
// >
//  <Avatar
//    src={images.facebook}
//    sx={{ borderRadius: "0", mr: 3, width: "22px", height: "22px" }}
//  />
//  <Avatar
//    src={images.twitter}
//    sx={{ borderRadius: "0", mx: 3, width: "22px", height: "22px" }}
//  />
//  <Avatar
//    src={images.linkedin}
//    sx={{ borderRadius: "0", mx: 3, width: "22px", height: "22px" }}
//  />
//  {/* Copyright 2023 */}
//  <Typography
//    sx={{
//      fontFamily: "'Barlow Condensed', sans-serif",
//      fontWeight: "400",
//      fontSize: "17px",
//      lineHeight: "23px",
//      ml: "auto",
//    }}
//  >
//    Copyright – 2023 – All rights reserved by ARK Web Solutions
//  </Typography>
// </Box>
