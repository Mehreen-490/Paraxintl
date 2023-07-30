import { Box, Button, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";
function Surgical() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${images.surgical})`,
        backgroundSize: "cover",
        width: "50%",
        height: "100%",
        opacity: "0.8",
        pt: 10,
      }}
    >
      {/* Home Heading */}
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontWeight: "400",
            pb: 1,
            letterSpacing: "1px",
            pl: "2px",
          }}
        >
          AX
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: "17px",
            lineHeight: "27px",
            pl: "2px",
            letterSpacing: "2px",
            fontWeight: "500",
          }}
        >
          {" "}
          manufacturer, and export company
        </Typography>
      </Box>
      {/* Surgical Link Section */}
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 16,
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
            pb: "1rem",
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
            fontSize: "17px",
            lineHeight: "27px",
            color: "white",
            textAlign: "center",
            width: "60%",
            pt: 2,
            pb: 2,
          }}
        >
          Parax International is a leading manufacturing company of General
          Surgical and Gynecology Instruments.
        </Typography>
        {/* Apparel Link Button */}
        <Button
          variant="outlined"
          sx={{
            border: "2px solid white",
            borderRadius: "0",
            px: 3,
            py: 2.5,
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
              fontSize: "17px",
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
