import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
function Apparel() {
  return (
    <Box>
      {/* Apparel Link Section */}
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
          justifyContent: "center",
          p: {
            xs: 3,
            md: 5,
            lg: 16,
          },
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
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "65%",
            },
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
