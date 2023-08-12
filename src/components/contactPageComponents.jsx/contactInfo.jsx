import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";

const ContactInfo = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Address Box */}
      <Box sx={{ display: "flex", pl: 4 }}>
        {/* Address PNG */}
        <Box sx={{ pt: 3, pr: 2 }}>
          <Avatar
            src={images.dark_address}
            sx={{ borderRadius: "0", width: "30px", height: "30px" }}
          />
        </Box>
        {/* Address */}
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "19px",
              lineHeight: "34px",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Address:
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: "300",
              fontSize: "19px",
              lineHeight: "34px",
            }}
          >
            DASKA ROAD, PASRUR BYPASS, PAKKI KOTLI, SIALKOT-51310, PAKISTAN
          </Typography>
        </Box>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          height: "0.5px",
          width: "83%",
          bgcolor: "#192d34",
          ml: 4,
          mr: 15,
          mt: 1,
          mb: 2,
        }}
      ></Box>
      {/* Phone Box */}
      <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
        {/* Phone PNG */}
        <Box sx={{ pt: 3, pr: 2 }}>
          <Avatar
            src={images.dark_phone}
            sx={{ borderRadius: "0", width: "25px", height: "25px" }}
          />
        </Box>
        {/* Phone Number */}
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "19px",
              lineHeight: "34px",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Phone:
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: "300",
              fontSize: "19px",
              lineHeight: "34px",
            }}
          >
            +92 300 6175621
          </Typography>
        </Box>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          height: "1px",
          width: "83%",
          bgcolor: "#192d34",
          ml: 4,
          mr: 15,
          mt: 1,
          mb: 2,
        }}
      ></Box>
      {/* Email Box */}
      <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
        {/* Email Png */}
        <Box sx={{ pt: 3, pr: 2 }}>
          <Avatar
            src={images.dark_mail}
            sx={{ borderRadius: "0", width: "33px", height: "33px" }}
          />
        </Box>
        {/* Email Address */}
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "19px",
              lineHeight: "34px",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Email:
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: "300",
              fontSize: "19px",
              lineHeight: "34px",
            }}
          >
            sales@paraxintl.com
          </Typography>
        </Box>
      </Box>
      {/* Divider */}
      <Box
        sx={{
          height: "1px",
          width: "83%",
          bgcolor: "#192d34",
          ml: 4,
          mr: 15,
          mt: 1,
          mb: 2,
        }}
      ></Box>
      {/* Website Box */}
      <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
        {/* Website Png */}
        <Box sx={{ pt: 3, pr: 2 }}>
          <Avatar
            src={images.dark_link}
            sx={{ borderRadius: "0", width: "33px", height: "33px" }}
          />
        </Box>
        {/* Website Address */}
        <Box>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "19px",
              lineHeight: "34px",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Website:
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: "300",
              fontSize: "19px",
              lineHeight: "34px",
            }}
          >
            www.paraxintl.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfo;
