import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const OverlaySection = () => {
  return (
    <Box
      sx={{
        marginTop: "30px",
        width: "100%",
        height: "500px",
        backgroundImage: `url("https://images.pexels.com/photos/6627704/pexels-photo-6627704.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        backgroundSize: "100% 100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: "black",
          opacity: "0.6",
          width: "100%",
          height: "100%",
        }}
      ></Box>
      <Stack
        direction="row"
        sx={{
          position: "absolute",
          top: {
            md: "20%",
            xs: "20%",
          },
          color: "white",
          py: "0",
          px: {
            sm: "6%",
            xs: "2%",
          },
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: {
              md: "50%",
              xs: "0%",
            },
            py: "4%",
            display: {
              md: "block",
              xs: "none",
            },
          }}
        >
          <Typography variant="h6">
            No compromise when it comes to price or quality as we deliver both.
            With a Pakistan-based factory we manufacture Sports Wear, Casual
            Wear, and Outerwear to the highest standard. Our customers fall in
            love with the quality. PARAX International also guarantees you are
            working with a Supplier directly, not an agent.
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              md: "50%",
              xs: "100%",
            },

            pl: "6%",
          }}
        >
          <Typography
            variant="h2"
            fontWeight={600}
            sx={{ fontStyle: "italic" }}
          >
            PARAX INTL <br /> BEST QUALITY <br /> PROVIDERS
          </Typography>
          <Typography>CLICK TO VIEW OUR BEST WUALITY PRODUCTS</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default OverlaySection;
