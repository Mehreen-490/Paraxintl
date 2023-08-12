import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box>
      {/* Upper Section */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "black",
          color: "#686d73",
          py: 10,
          px: {
            xl: 12,
            lg: 10,
            md: 6,
            sm: 3,
            xs: 2.5,
          },
        }}
      >
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* About Us Heading */}

            <Typography
              sx={{
                fontFamily: "'PT Sans', sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "20px",
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
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: "27px",
                textAlign: "justify",
              }}
            >
              Parax International, here you can find the perfect surgical
              instrument for you needs. With a commitment to quality,
              reliability, and affordability. We provide high-quality surgical
              instruments, including forceps, scissors, scalpels, retractors,
              and more. .
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Useful Links Heading */}
            <Typography
              sx={{
                fontFamily: "'PT Sans', sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "20px",
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
                  fontSize: "15px",
                  lineHeight: "27px",
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
                  my: 1,
                }}
              ></Box>
              {/* Products Link */}
              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "27px",
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
                  my: 1,
                }}
              ></Box>
              {/* Catalog Link */}
              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "27px",
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
                  my: 1,
                }}
              ></Box>
              {/* About Us Link */}
              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "27px",
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
                  my: 1,
                }}
              ></Box>
              {/* Contact Us Link */}
              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "27px",
                }}
              >
                Contact Us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            {/* Contact Us Heading */}
            <Typography
              sx={{
                fontFamily: "'PT Sans', sans-serif",
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "20px",
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
                  fontSize: "15px",
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
                mt: 0.3,
                mb: 0.3,
              }}
            ></Box>
            {/* Phone Box */}
            <Box>
              {/* Phone  */}
              <Typography
                sx={{
                  fontSize: "15px",
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
                mt: 0.3,
                mb: 0.3,
              }}
            ></Box>
            {/* Mail Box */}
            <Box>
              {/* Mail  */}
              <Typography
                sx={{
                  fontSize: "15px",
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
                mt: 0.3,
                mb: 0.3,
              }}
            ></Box>
            {/* Website Link Box */}
            <Box>
              {/* Website Link  */}
              <Typography
                sx={{
                  fontSize: "15px",
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
          </Grid>
        </Grid>
      </Box>
      {/* Lower Section */}
      <Box
        sx={{
          height: "30px",
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
            fontWeight: 400,
            fontSize: "14px",
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

// {/* About Us Box */}
// <Box sx={{ width: "36%", pr: 6.5 }}>
// {/* About Us Heading */}

// <Typography
//   sx={{
//     fontFamily: "'PT Sans', sans-serif",
//     fontWeight: 500,
//     fontSize: "20px",
//     lineHeight: "20px",
//     pb: 2,
//   }}
// >
//   About Us
// </Typography>
// {/* Divider */}
// <Box
//   sx={{
//     width: "100px",
//     height: "1px",
//     bgcolor: "#686d73",
//     my: 1,
//     mb: 3,
//   }}
// ></Box>
// {/* About Desc */}
// <Typography
//   sx={{
//     fontFamily: "'Roboto', sans-serif",
//     fontWeight: 300,
//     fontSize: "15px",
//     lineHeight: "27px",
//   }}
// >
//   Parax International, here you can find the perfect surgical
//   instrument for you needs. With a commitment to quality, reliability,
//   and affordability. We provide high-quality surgical instruments,
//   including forceps, scissors, scalpels, retractors, and more. .
// </Typography>
// </Box>
// {/* Useful Links Box */}
// <Box sx={{ width: "30%" }}>
// {/* Useful Links Heading */}
// <Typography
//   sx={{
//     fontFamily: "'PT Sans', sans-serif",
//     fontWeight: 500,
//     fontSize: "20px",
//     lineHeight: "20px",
//     pb: 2,
//   }}
// >
//   Useful Links
// </Typography>
// {/* Divider */}
// <Box
//   sx={{
//     width: "100px",
//     height: "1px",
//     bgcolor: "#686d73",
//     my: 1,
//     mb: 3,
//   }}
// ></Box>
// {/* All Links */}
// <Box>
//   {/* Home Link */}
//   <Typography
//     sx={{
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 400,
//       fontSize: "15px",
//       lineHeight: "27px",
//     }}
//   >
//     Home
//   </Typography>
//   {/* Divider */}
//   <Box
//     sx={{
//       width: "100%",
//       height: "1px",
//       bgcolor: "#333333",
//       my: 1,
//     }}
//   ></Box>
//   {/* Products Link */}
//   <Typography
//     sx={{
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 400,
//       fontSize: "15px",
//       lineHeight: "27px",
//     }}
//   >
//     Products
//   </Typography>
//   {/* Divider */}
//   <Box
//     sx={{
//       width: "100%",
//       height: "1px",
//       bgcolor: "#333333",
//       my: 1,
//     }}
//   ></Box>
//   {/* Catalog Link */}
//   <Typography
//     sx={{
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 400,
//       fontSize: "15px",
//       lineHeight: "27px",
//     }}
//   >
//     Catalog
//   </Typography>
//   {/* Divider */}
//   <Box
//     sx={{
//       width: "100%",
//       height: "1px",
//       bgcolor: "#333333",
//       my: 1,
//     }}
//   ></Box>
//   {/* About Us Link */}
//   <Typography
//     sx={{
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 400,
//       fontSize: "15px",
//       lineHeight: "27px",
//     }}
//   >
//     About Us
//   </Typography>
//   {/* Divider */}
//   <Box
//     sx={{
//       width: "100%",
//       height: "1px",
//       bgcolor: "#333333",
//       my: 1,
//     }}
//   ></Box>
//   {/* Contact Us Link */}
//   <Typography
//     sx={{
//       fontFamily: "'Roboto', sans-serif",
//       fontWeight: 400,
//       fontSize: "15px",
//       lineHeight: "27px",
//     }}
//   >
//     Contact Us
//   </Typography>
//  </Box>
// </Box>
// {/* Contact Us */}
// <Box
// sx={{
//   pl: 6,
//   width: "30%",
// }}
// >
// {/* Contact Us Heading */}
// <Typography
//   sx={{
//     fontFamily: "'PT Sans', sans-serif",
//     fontWeight: 500,
//     fontSize: "20px",
//     lineHeight: "20px",
//     pb: 2,
//   }}
// >
//   Contact Us
// </Typography>
// {/* Divider */}
// <Box
//   sx={{
//     width: "100px",
//     height: "1px",
//     bgcolor: "#686d73",
//     my: 1,
//     mb: 3,
//   }}
// ></Box>
// {/* Address Box */}
// <Box>
//   {/* Address */}
//   <Typography
//     sx={{
//       fontSize: "15px",
//       lineHeight: "25px",
//       fontWeight: 400,
//       fontFamily: "'Roboto', sans-serif",
//       pb: 2,
//       pt: 1,
//     }}
//   >
//     DASKA ROAD, PASRUR BYPASS, PAKKI KOTLI, SIALKOT-51310, PAKISTAN
//   </Typography>
// </Box>
// {/* Divider */}
// <Box
//   sx={{
//     width: "100%",
//     height: "1px",
//     bgcolor: "#333333",
//     mt: 0.3,
//     mb: 0.3,
//   }}
// ></Box>
// {/* Phone Box */}
// <Box>
//   {/* Phone  */}
//   <Typography
//     sx={{
//       fontSize: "15px",
//       lineHeight: "25px",
//       fontWeight: 400,
//       fontFamily: "'Roboto', sans-serif",
//       pb: 2,
//       pt: 1,
//     }}
//   >
//     +92 300 6175621
//   </Typography>
// </Box>
// {/* Divider */}
// <Box
//   sx={{
//     width: "100%",
//     height: "1px",
//     bgcolor: "#333333",
//     mt: 0.3,
//     mb: 0.3,
//   }}
// ></Box>
// {/* Mail Box */}
// <Box>
//   {/* Mail  */}
//   <Typography
//     sx={{
//       fontSize: "15px",
//       lineHeight: "25px",
//       fontWeight: 400,
//       fontFamily: "'Roboto', sans-serif",
//       pb: 2,
//       pt: 1,
//     }}
//   >
//     sales@paraxintl.com
//   </Typography>
// </Box>
// {/* Divider */}
// <Box
//   sx={{
//     width: "100%",
//     height: "1px",
//     bgcolor: "#333333",
//     mt: 0.3,
//     mb: 0.3,
//   }}
// ></Box>
// {/* Website Link Box */}
// <Box>
//   {/* Website Link  */}
//   <Typography
//     sx={{
//       fontSize: "15px",
//       lineHeight: "25px",
//       fontWeight: 400,
//       fontFamily: "'Roboto', sans-serif",
//       pb: 2,
//       pt: 1,
//     }}
//   >
//     www.paraxintl.com
//   </Typography>
// </Box>
// </Box>
