import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      {/* Upper Section */}
      <Box
        sx={{
          width: "100%",
          height: "650px",
          bgcolor: "black",
          color: "#686d73",
          px: 12,
          py: 20,
          display: "flex",
        }}
      >
        {/* About Us Box */}
        <Box sx={{ width: "36%", pr: 12 }}>
          {/* About Us Heading */}

          <Typography
            sx={{
              fontFamily: "'PT Sans', sans-serif",
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "28px",
              pb: 2,
            }}
          >
            About Us
          </Typography>
          {/* Divider */}
          <Box
            sx={{
              width: "100px",
              height: "1px",
              bgcolor: "#686d73",
              my: 1,
              mb: 3,
            }}
          ></Box>
          {/* About Desc */}
          <Typography
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: "19px",
              lineHeight: "30px",
            }}
          >
            Parax International, here you can find the perfect surgical
            instrument for you needs. With a commitment to quality, reliability,
            and affordability. We provide high-quality surgical instruments,
            including forceps, scissors, scalpels, retractors, and more. .
          </Typography>
        </Box>
        {/* Useful Links Box */}
        <Box sx={{ width: "30%" }}>
          {/* Useful Links Heading */}
          <Typography
            sx={{
              fontFamily: "'PT Sans', sans-serif",
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "28px",
              pb: 2,
            }}
          >
            Useful Links
          </Typography>
          {/* Divider */}
          <Box
            sx={{
              width: "100px",
              height: "1px",
              bgcolor: "#686d73",
              my: 1,
              mb: 3,
            }}
          ></Box>
          {/* All Links */}
          <Box>
            {/* Home Link */}
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "20px",
              }}
            >
              Home
            </Typography>
            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "#333333",
                my: 2,
              }}
            ></Box>
            {/* Products Link */}
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "20px",
              }}
            >
              Products
            </Typography>
            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "#333333",
                my: 2,
              }}
            ></Box>
            {/* Catalog Link */}
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "20px",
              }}
            >
              Catalog
            </Typography>
            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "#333333",
                my: 2,
              }}
            ></Box>
            {/* About Us Link */}
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "20px",
              }}
            >
              About Us
            </Typography>
            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                bgcolor: "#333333",
                my: 2,
              }}
            ></Box>
            {/* Contact Us Link */}
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "20px",
              }}
            >
              Contact Us
            </Typography>
          </Box>
        </Box>
        {/* Contact Us */}
        <Box
          sx={{
            pl: 6,
            width: "30%",
          }}
        >
          {/* Contact Us Heading */}
          <Typography
            sx={{
              fontFamily: "'PT Sans', sans-serif",
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "28px",
              pb: 2,
            }}
          >
            Contact Us
          </Typography>
          {/* Divider */}
          <Box
            sx={{
              width: "100px",
              height: "1px",
              bgcolor: "#686d73",
              my: 1,
              mb: 3,
            }}
          ></Box>
          {/* Address Box */}
          <Box>
            {/* Address */}
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: 400,
                fontFamily: "'Roboto', sans-serif",
                pb: 2,
                pt: 1,
              }}
            >
              DASKA ROAD, PASRUR BYPASS, PAKKI KOTLI, SIALKOT-51310, PAKISTAN
            </Typography>
          </Box>
          {/* Divider */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "#333333",
              mt: 1,
              mb: 0.5,
            }}
          ></Box>
          {/* Phone Box */}
          <Box>
            {/* Phone  */}
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: 400,
                fontFamily: "'Roboto', sans-serif",
                pb: 2,
                pt: 1,
              }}
            >
              +92 300 6175621
            </Typography>
          </Box>
          {/* Divider */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "#333333",
              mt: 1,
              mb: 0.5,
            }}
          ></Box>
          {/* Mail Box */}
          <Box>
            {/* Mail  */}
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: 400,
                fontFamily: "'Roboto', sans-serif",
                pb: 2,
                pt: 1,
              }}
            >
              sales@paraxintl.com
            </Typography>
          </Box>
          {/* Divider */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "#333333",
              mt: 1,
              mb: 0.5,
            }}
          ></Box>
          {/* Website Link Box */}
          <Box>
            {/* Website Link  */}
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "25px",
                fontWeight: 400,
                fontFamily: "'Roboto', sans-serif",
                pb: 2,
                pt: 1,
              }}
            >
              www.paraxintl.com
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Lower Section */}
      <Box
        sx={{
          height: "50px",
          width: "100%",
          bgcolor: "#afb2b6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "25px",
            color: "black",
          }}
        >
          Copyright © 2023 – All Rights Reserved By ARK WEB SOLUTIONS
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
// gray: #686d73
// black: #000000
// fontFamily: "'Barlow Condensed', sans-serif",
// font-family: 'Roboto', sans-serif;
