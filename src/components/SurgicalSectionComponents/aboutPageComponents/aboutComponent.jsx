import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import images from "../../../assets/surgicalImages/images";

const AboutComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage:
          "linear-gradient(to bottom, #686d73, #a1a5aa, #bcbfc2, #61656b)",
        color: " #262626",
        pr: {
          xl: 16,
          lg: 10,
          md: 5,
          sm: 2,
          xs: 1,
        },
        pl: {
          xl: 20,
          lg: 5,
          md: 5,
          sm: 2,
          xs: 1,
        },
        pt: 5,
        pb: 10,
      }}
    >
      <Box sx={{ px: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xl: "row",
              lg: "column",
              md: "column",
              sm: "column",
              xs: "column",
            },
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          {/* Parax International Typography & Desc Box */}
          <Box
            sx={{
              pr: {
                xl: 10,
                lg: 5,
                md: 2,
                sm: 2,
                xs: 1,
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: "35px",
                lineHeight: "35px",
                py: 2,
              }}
            >
              WELCOME TO
            </Typography>
            {/* Parax International Typography */}
            <Typography
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: "50px",
                lineHeight: "50px",
                pb: 2,
              }}
            >
              PARAX <br /> INTERNATIONAL
            </Typography>
            {/* Parax International Desc */}
            <Typography
              sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "29px" }}
            >
              PARAX INTERNATIONAL is a brand for manufacturing quality
              instruments. An eminent name among Disposable & Reusable surgical
              instruments manufacturers in Pakistan. The PARAX INTERNATIONAL
              Instruments features a wide range of products details are
              available on website and catalogue. The surgical instruments
              manufactured by PARAX INTERNATIONAL are made of superior quality
              material with a higher degree of precision which is due to the
              company’s more than 20 years of experience in the field and its
              workforce which is highly trained, qualified in the task with a
              thorough exposure of the field. PARAX INTERNATIONAL have gained
              massive popularity among surgeons, clinics and hospitals in both
              the domestic as well as the international markets.
            </Typography>
          </Box>
          {/* Parax Labore Image Box */}
          <Box sx={{ px: 3 }}>
            {/* Parax Labore Image */}

            <Avatar
              src={images.labor}
              sx={{
                borderRadius: "0",
                width: {
                  xl: "600px",
                  lg: "100%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
                height: {
                  xl: "400px",
                  lg: "300px",
                  md: "200px",
                  sm: "200px",
                  xs: "200px",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      {/* Quality */}
      <Box sx={{ px: 2 }}>
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "29px",
            pt: 4,
          }}
        >
          QUALITY
        </Typography>
        {/* Desc */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "29px",
            pt: 1,
          }}
        >
          The Quality Management System of PARAX INTERNATIONAL has been designed
          and implemented as a means of ensuring that products supplied to the
          customers are of the highest quality and in every instance meet the
          needs and requirements of the customers.
        </Typography>
      </Box>
      {/* WHY CHOOSE US */}
      <Box sx={{ px: 2 }}>
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "29px",
            pt: 4,
          }}
        >
          WHY CHOOSE US
        </Typography>
        {/* Desc */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "29px",
            pt: 1,
          }}
        >
          PARAX INTERNATIONAL greatest strength is his Top management which is
          Qualified in business administration, Marketing Management, Mechanical
          and Information Technology engineering and have experienced
          craftsmanship as well.
        </Typography>
      </Box>
      {/* VISION AND MISSION STATEMENT */}
      <Box sx={{ px: 2 }}>
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "29px",
            pt: 4,
          }}
        >
          VISION AND MISSION STATEMENT
        </Typography>
        {/* Desc */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "29px",
            pt: 1,
          }}
        >
          Our mission is to provide high quality instruments at competitive
          prices to healthcare professionals to meet the specific needs of the
          Surgical, Dental and Beauty segment. Our vision is to become the
          surgeons choice for safe and secure instruments manufacture.
        </Typography>
      </Box>
      {/* OUR COMMITMENT */}
      <Box sx={{ px: 2 }}>
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "29px",
            pt: 4,
          }}
        >
          OUR COMMITMENT
        </Typography>
        {/* Desc */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "29px",
            pt: 1,
          }}
        >
          We diversify our business scope by developing new manufacturing lines
          to meet market needs. Capitalizing on our expertise and
          professionalism, we have positioned ourselves as innovative instrument
          manufacturers with superb manufacturing abilities and facilities.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutComponent;
// gray: #686d73
// black: #000000
// fontFamily: "'Barlow Condensed', sans-serif",
// font-family: 'Roboto', sans-serif;
