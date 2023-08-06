import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";

const ContactInfo = () => {
  return (
    <Box sx={{ width: "50%", py: 5 }}>
      {/* Address Box */}
      <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
        {/* Address PNG */}
        <Box sx={{ pt: 3, pr: 2 }}>
          <Avatar
            src={images.dark_address}
            sx={{ borderRadius: "0", width: "35px", height: "35px" }}
          />
        </Box>
        {/* Address */}
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Address:
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "34px",
              fontWeight: "300",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 2,
              pt: 1,
            }}
          >
            DASKA ROAD, PASRUR BYPASS, PAKKI KOTLI, SIALKOT-51310, PAKISTAN
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
          mt: 2,
          mb: 3,
        }}
      ></Box>
      {/* Phone Box */}
      <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
        {/* Phone PNG */}
        <Box sx={{ pt: 3, pr: 2 }}>
          <Avatar
            src={images.dark_phone}
            sx={{ borderRadius: "0", width: "33px", height: "33px" }}
          />
        </Box>
        {/* Phone Number */}
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Phone:
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "34px",
              fontWeight: "300",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 2,
              pt: 1,
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
          mt: 2,
          mb: 3,
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
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Email:
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "34px",
              fontWeight: "300",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 2,
              pt: 1,
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
          mt: 2,
          mb: 3,
        }}
      ></Box>
      {/* Website Box */}
      <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
        {/* Website Png */}
        <Box sx={{ pt: 3, pr: 2 }}>
          <Avatar
            src={images.dark_mail}
            sx={{ borderRadius: "0", width: "33px", height: "33px" }}
          />
        </Box>
        {/* Website Address */}
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              lineHeight: "34px",
              fontWeight: "600",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            Website:
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "34px",
              fontWeight: "300",
              fontFamily: "'Barlow Condensed', sans-serif",
              pb: 2,
              pt: 1,
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
