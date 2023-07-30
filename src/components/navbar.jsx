import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
const navButton = {
  fontFamily: "'Barlow Condensed', sans-serif",
  color: "black",
  fontWeight: "700px",
  fontSize: "22px",
  lineHeight: "20px",
  borderRadius: "0",
  border: "1px solid transparent",
  pt: "15px",
  px: "15px",
};
function Navbar() {
  return (
    <Box sx={{ width: "100%", height: "" }}>
      <AppBar
        sx={{
          height: "90px",
          display: "flex",
          bgcolor: "white",
          color: "black",
          justifyContent: "center",
          pl: 13,
        }}
      >
        <Toolbar disableGutters>
          <Stack direction="row">
            <Button
              sx={{
                ...navButton,
                width: "90px",
                "&:hover": {
                  color: "#8d8d8d",
                  borderTop: "1px solid black",
                  pt: "15px",
                  px: "15px",
                  background: "white",
                },
              }}
            >
              Home{" "}
            </Button>
            <Button
              sx={{
                ...navButton,
                "&:hover": {
                  color: "#8d8d8d",
                  borderTop: "1px solid black",
                  pt: "15px",
                  px: "15px",
                  background: "white",
                },
              }}
            >
              Product +{" "}
            </Button>
            <Button
              sx={{
                ...navButton,
                "&:hover": {
                  color: "#8d8d8d",
                  borderTop: "1px solid black",
                  pt: "15px",
                  px: "15px",
                  background: "white",
                },
              }}
            >
              About Us{" "}
            </Button>
            <Button
              sx={{
                ...navButton,
                "&:hover": {
                  color: "#8d8d8d",
                  borderTop: "1px solid black",
                  pt: "15px",
                  px: "15px",
                  background: "white",
                },
              }}
            >
              Contact Us{" "}
            </Button>
          </Stack>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "500",
              fontSize: "48px",
              lineHeight: "20px",
              fontFamily: "'Oswald', sans-serif",
              pl: 30,
              letterSpacing: "2px",
            }}
          >
            PARAX
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
