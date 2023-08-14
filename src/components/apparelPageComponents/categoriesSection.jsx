import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import images from "../../assets/images";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function CategoriesSection() {
  return (
    <Box
      sx={{
        width: "100%",
        color: "#192d34",
        px: 8,
      }}
    >
      {/* Parax & Intl heading Heading */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* Parax Typography */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "400",
            fontSize: "35px",
            lineHeight: "20px",
            fontFamily: "'Oswald', sans-serif",
            letterSpacing: "5px",
            pt: 8,
            color: " #192d34",
          }}
        >
          PARAX
        </Typography>
        {/* Intl Typography */}
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "10px",
            pt: 12.5,
            color: " #192d34",
          }}
        >
          INTL
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            borderBottom: "5px solid black",
            paddingBottom: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: "700",
              fontSize: "50px",
              lineHeight: "55px",
              color: "#192d34",
              pb: 3,
              letterSpacing: "1px",
            }}
          >
            PARAX INTERNATIONAL
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "22px",
              lineHeight: "43px",
              color: "#4b859b",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            Parax International is specialized in Casual wear, Outerwear, and
            Sportswear. Our company is a professional manufacturer and exporter
            of high-quality Apparels. We are an established supplier of
            customized Apparel backed by technical expertise and experience.
          </Typography>
          <Button
            component={NavLink}
            to="/product"
            variant="outlined"
            sx={{
              color: "black",
              border: "2px solid black",
              borderRadius: "0",
              width: "150px",
              "&:hover": {
                bgcolor: "#000000",
                color: "white",
                border: "0",
              },
            }}
          >
            Product Page
          </Button>
        </Box>{" "}
      </Box>
      <Stack direction="row" justifyContent="space-between" pb={3}>
        <Typography sx={{ fontWeight: "bold" }}>
          OUR PRODUCT CATEGORIES
        </Typography>
        <Stack direction="row">
          <Typography sx={{ fontWeight: "bold" }}>VIEW ALL PRODUCTS</Typography>
          &nbsp;&nbsp;
          <EastIcon />
        </Stack>
      </Stack>

      {/* three images */}
      <Stack direction="row" justifyContent="space-between" mb={4}>
        {images.appearl_home_page.three_images.map((image, i) => {
          return (
            <Paper
              key={i}
              elevation={0}
              sx={{
                width: "32%",
                height: "300px",
                outline: "",
                border: "",
                "&:hover": {
                  backgroundSize: "90% 90%",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src={image}
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundPosition: "100% 100%",
                  borderRadius: "0",
                  "&:hover": {
                    width: "90%",
                    height: "90%",
                    transition: "0.5s ease",
                  },
                }}
              />
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}

export default CategoriesSection;
// dark: #192d34
// light: #bde7fd
