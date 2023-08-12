import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
function Surgical() {
  return (
    <Box>
      {/* Surgical Link Section */}
      <Box
        sx={{
          height: {
            xs: "300px",
            sm: "300px",
            md: "300px",
            lg: "100%",
            xl: "100%",
          },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: {
            xs: 3,
            md: 5,
            lg: 16,
          },
          mb: {
            xs: "10px",
          },
        }}
      >
        {/* Surgical Heading */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "400",
            fontSize: "40px",
            lineHeight: "40px",
            color: "white",
            pb: "0.5rem",
            letterSpacing: "1.5px",
          }}
        >
          SURGICAL
        </Typography>
        {/* Surgical Description */}
        <Typography
          variant="p"
          sx={{
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "27px",
            color: "white",
            textAlign: "center",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "60%",
              xl: "50%",
            },
            pt: 2,
            pb: 2,
          }}
        >
          Parax International is a leading manufacturing company of General
          Surgical and Gynecology Instruments.
        </Typography>
        {/* Surgical Link Button */}
        <Button
          variant="outlined"
          component={Link}
          to="/surgical/about-us"
          sx={{
            border: "2px solid white",
            borderRadius: "0",
            px: 2,
            py: 2,
            "&:hover": {
              bgcolor: "black",
              color: "white",
              border: "0",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "500",
              fontSize: "15px",
              lineHeight: "15px",
              color: "white",
              letterSpacing: "2px",
            }}
          >
            Visit Now
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default Surgical;
