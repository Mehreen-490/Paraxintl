import { Box, Button, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";
import { NavLink } from "react-router-dom";
function Apparel() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${images.apparel})`,
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
            textAlign: "right",
            color: "white",
            fontWeight: "400",
            pb: 1,
            letterSpacing: "1px",
            pr: "2px",
          }}
        >
          PAR
        </Typography>
        <Typography
          sx={{
            textAlign: "right",
            color: "white",
            fontSize: "17px",
            lineHeight: "27px",
            pr: "3px",
            letterSpacing: "2px",
            fontWeight: "500",
          }}
        >
          We are an innovative, original design {"  "}
        </Typography>
      </Box>
      {/* Apparel Link Section */}
      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 18,
        }}
      >
        {/* Apparel Heading */}
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
          APPAREL
        </Typography>
        {/* Apparel Description */}
        <Typography
          variant="p"
          sx={{
            fontWeight: "500",
            fontSize: "17px",
            lineHeight: "27px",
            color: "white",
            textAlign: "center",
            width: "65%",
            pt: 2,
            pb: 3,
          }}
        >
          Parax International is a leading manufacturing company of Custom
          Sportswear, Fitness, Casual wear and Accesories
        </Typography>
        {/* Apparel Link Button */}
        <Button
          disableElevation
          component={NavLink}
          to="/apparel"
          variant="outlined"
          sx={{
            border: "2px solid white",
            borderRadius: "0",
            px: 3,
            py: 2.5,
            "&:hover": {
              bgcolor: "#000000",
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
              textDecoration: "none",
            }}
          >
            Visit Now
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default Apparel;
// APPAREL
