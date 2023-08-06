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
          height: "50px",
          bgcolor: "black",
          display: "flex",
          alignItems: "center",
          pl: 8,
        }}
      >
        <Avatar
          src={images.america}
          sx={{ borderRadius: "0", mx: 0.5, width: "20px", height: "25px" }}
        />
        <Avatar
          src={images.canada}
          sx={{ borderRadius: "0", mx: 1, width: "20px", height: "25px" }}
        />
        <Avatar
          src={images.france}
          sx={{ borderRadius: "0", mx: 1, width: "20px", height: "25px" }}
        />
        <Avatar
          src={images.spain}
          sx={{ borderRadius: "0", mx: 1, width: "20px", height: "25px" }}
        />
        <Typography sx={{ ml: "auto", color: "#686d73", mr: 8 }}>
          info@paraxintl.com
        </Typography>
      </Box>
      {/* Lower Bar */}
      <Box
        sx={{
          width: "100%",
          height: "120px",
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
            pl: 100,
          }}
        >
          {/* Parax Typography */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              fontSize: "55px",
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
            mr: "20px",
          }}
        >
          <Avatar src={images.facebook} sx={{ borderRadius: "0", mx: 3 }} />
          <Avatar src={images.insta} sx={{ borderRadius: "0", mx: 3 }} />
          <Avatar src={images.twitter} sx={{ borderRadius: "0", mx: 3 }} />
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
          width: "100%",
          height: "80px",
          bgcolor: "#686d73",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 300,
            fontSize: "22px",
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
            fontSize: "22px",
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
            fontSize: "22px",
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
            fontSize: "22px",
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
            fontSize: "22px",
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
