import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/surgicalImages/images";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      {/* Upper Bar */}
      <Box
        sx={{
          width: "100%",
          height: "35px",
          bgcolor: "black",
          display: "flex",
          alignItems: "center",
          pl: {
            xl: 8,
            lg: 2,
            md: 2,
            sm: 1,
            xs: 1,
          },
        }}
      >
        <Avatar
          src={images.america}
          sx={{ borderRadius: "0", mx: 0.5, width: "20px", height: "25px" }}
        />
        <Avatar
          src={images.canada}
          sx={{ borderRadius: "0", mx: 0.5, width: "20px", height: "25px" }}
        />
        <Avatar
          src={images.france}
          sx={{ borderRadius: "0", mx: 0.5, width: "20px", height: "25px" }}
        />
        <Avatar
          src={images.spain}
          sx={{ borderRadius: "0", mx: 0.5, width: "20px", height: "25px" }}
        />
        <Typography
          sx={{
            ml: "auto",
            color: "#686d73",
            mr: {
              xl: 8,
              lg: 2,
              md: 2,
              sm: 2,
              xs: 1,
            },
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "15px",
            lineHeight: "27px",
            letterSpacing: "0.3px",
          }}
        >
          info@paraxintl.com
        </Typography>
      </Box>
      {/* Lower Bar */}
      <Box
        sx={{
          width: "100%",
          height: "90px",
          bgcolor: "#686d73",
          color: "black",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Parax Heading */}
        <Box
          sx={{
            display: "flex",
            pl: {
              xl: 78,
              lg: 2,
              md: 2,
              sm: 2,
              xs: 1,
            },
          }}
        >
          {/* Parax Typography */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              fontSize: {
                xl: "55px",
                lg: "55px",
                md: "55px",
                sm: "35px",
                xs: "35px",
              },
              lineHeight: "20px",
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "5px",
            }}
          >
            PARAX
          </Typography>
          {/* Intl Typography */}
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            INTL
          </Typography>
        </Box>
        {/* Useful Links */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            mr: {
              xl: "20px",
              lg: "20px",
              md: "20px",
              sm: "5px",
              xs: "5px",
            },
          }}
        >
          <Avatar
            src={images.facebook}
            sx={{
              borderRadius: "0",
              mx: 3,
              width: {
                xl: "25px",
                lg: "25px",
                md: "25px",
                sm: 0,
                xs: 0,
              },
              height: {
                xl: "25px",
                lg: "25px",
                md: "25px",
                sm: 0,
                xs: 0,
              },
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          />
          <Avatar
            src={images.insta}
            sx={{
              borderRadius: "0",
              mx: 3,
              width: {
                xl: "25px",
                lg: "25px",
                md: "25px",
                sm: 0,
                xs: 0,
              },
              height: {
                xl: "25px",
                lg: "25px",
                md: "25px",
                sm: 0,
                xs: 0,
              },
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          />
          <Avatar
            src={images.twitter}
            sx={{
              borderRadius: "0",
              mx: 3,
              width: {
                xl: "25px",
                lg: "25px",
                md: "25px",
                sm: 0,
                xs: 0,
              },
              height: {
                xl: "25px",
                lg: "25px",
                md: "25px",
                sm: 0,
                xs: 0,
              },
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          />
        </Box>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          height: "2px",
          width: "100%",
          bgcolor: "black",
        }}
      ></Box>
      {/* Nav Routes */}
      <Box
        sx={{
          width: {
            xl: "100%",
            lg: "100%",
            md: "100%",
            sm: 0,
            xs: 0,
          },
          bgcolor: "#686d73",
          color: "black",
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
          alignItems: "center",
          justifyContent: "center",
          py: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: "20px",
            pr: 2.5,
            cursor: "pointer",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: "20px",
            px: 2.5,
            cursor: "pointer",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Products
        </Typography>
        <Typography
          component={NavLink}
          to="/surgical/about-us"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: "20px",
            px: 2,
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
            "&:hover": {
              color: "white",
            },
          }}
        >
          About Us
        </Typography>
        <Typography
          component={NavLink}
          to="/surgical/manufacturing-process"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: "20px",
            px: 2.5,
            textDecoration: "none",
            color: "black",
            cursor: "pointer",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Manufacturing Process
        </Typography>
        <Typography
          component={NavLink}
          to="/surgical/contact-us"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: "20px",
            px: 3,
            cursor: "pointer",
            textDecoration: "none",
            color: "black",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Contact Us
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
// gray: #686d73
// black: #000000
// font-family: 'Roboto', sans-serif;
