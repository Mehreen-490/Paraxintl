import {
  AppBar,
  Avatar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import images from "../assets/images";
const navButton = {
  fontFamily: "'Barlow Condensed', sans-serif",
  color: "#bde7fd",
  fontWeight: "600px",
  fontSize: "18px",
  lineHeight: "20px",
  borderRadius: "0",
  border: "1px solid transparent",
  pt: "10px",
};
function Navbar() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* Upper Section */}
      <AppBar
        elevation={0}
        sx={{
          height: "70px",
          display: "flex",
          bgcolor: "#192d34",
          color: "#bde7fd",
          justifyContent: "center",
          pl: 1,
        }}
      >
        <Toolbar>
          <Stack direction="row">
            <Button
              component={Link}
              to="/apparel"
              sx={{
                ...navButton,
                width: {
                  xs: "0",
                  sm: "0",
                  md: "0",
                  lg: "40px",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none", // Hide the button at medium breakpoint
                  lg: "block", // Show the button at large breakpoint
                },
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "10px",
                  background: "#192d34",
                },
              }}
            >
              Home{" "}
            </Button>
            <Button
              sx={{
                ...navButton,
                width: {
                  xs: "0",
                  sm: "0",
                  md: "0",
                  lg: "100px",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none", // Hide the button at medium breakpoint
                  lg: "block", // Show the button at large breakpoint
                },
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "10px",
                  background: "#192d34",
                },
              }}
            >
              Product +{" "}
            </Button>
            <Button
              component={Link}
              to="/how-to-order"
              sx={{
                ...navButton,
                width: {
                  xs: "0",
                  sm: "0",
                  md: "0",
                  lg: "120px",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none", // Hide the button at medium breakpoint
                  lg: "block", // Show the button at large breakpoint
                },
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "10px",
                  background: "#192d34",
                },
              }}
            >
              How To Order
            </Button>
            <Button
              component={Link}
              to="/about-us"
              sx={{
                ...navButton,
                width: {
                  xs: "0",
                  sm: "0",
                  md: "0",
                  lg: "100px",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none", // Hide the button at medium breakpoint
                  lg: "block", // Show the button at large breakpoint
                },
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "10px",
                  background: "#192d34",
                },
              }}
            >
              About Us{" "}
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              sx={{
                ...navButton,
                width: {
                  xs: "0",
                  sm: "0",
                  md: "0",
                  lg: "100px",
                },
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none", // Hide the button at medium breakpoint
                  lg: "block", // Show the button at large breakpoint
                },
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "10px",
                  background: "#192d34",
                },
              }}
            >
              Contact Us{" "}
            </Button>
          </Stack>
          {/* Parax Heading */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: "400",
              fontSize: "30px",
              lineHeight: "25px",
              fontFamily: "'Oswald', sans-serif",
              pl: {
                lg: 8,
                xl: 20,
              },
              letterSpacing: "2px",
            }}
          >
            PARAX
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: "10px", pt: "2px" }}>
            INTL
          </Typography>
          {/* Whatsapp Contact */}
          <Box
            sx={{
              width: {
                xl: "100%",
                lg: "100%",
                md: "100%",
                sm: "0%",
                xs: "0%",
              },
              display: {
                xl: "block", // Show the button at large breakpoint
                lg: "block", // Show the button at large breakpoint
                md: "block", // Hide the button at medium breakpoint
                sm: "none",
                xs: "none",
              },
              pr: "20px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src={images.whatsapp}
                sx={{
                  borderRadius: "0px",
                  width: "30px",
                  height: "30px",
                  mt: "8px",
                  ml: "auto",
                }}
              />
              <Box pl={1}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "500",
                    fontSize: "13px",
                    lineHeight: "18px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "#e6f6fe",
                    letterSpacing: "1.5px",
                  }}
                >
                  Call Us Now!
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "29px",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "#bde7fd",
                    letterSpacing: "1.5px",
                  }}
                >
                  +92 300 6175621
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Vertiacl Divider */}
          <Box
            sx={{
              borderLeft: "1px solid #bde7fd",
              px: "20px",
              paddingRight: 0.1,
              ml: "auto",
              height: "40px",
              display: {
                xl: "block", // Show the button at large breakpoint
                lg: "block", // Show the button at large breakpoint
                md: "block", // Hide the button at medium breakpoint
                sm: "none",
                xs: "none",
              },
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #bde7fd",
              borderRadius: "20px",
              padding: "4px",
              ml: "auto",
            }}
          >
            <SearchIcon fontSize="medium" />
          </Box>
        </Toolbar>
      </AppBar>
      {/* lower Section */}
      <Box
        sx={{
          mt: "70px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          bgcolor: "#325967",
          color: "#111e22",
          pl: {
            lg: 13.5,
            md: 3.5,
            sm: 3.5,
            xs: 3.5,
          },
        }}
      >
        {/* Mail */}
        <Avatar
          src={images.dark_mail}
          sx={{ borderRadius: "0", width: "20px", height: "20px" }}
        />
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "29px",
            fontFamily: "'Barlow Condensed', sans-serif",
            paddingX: 1,
            display: {
              xs: "none", // Hide on extra small screens
              sm: "block", // Hide on small screens
              md: "block", // Display on medium and larger screens
            },
          }}
        >
          sales@paraxintl.com
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
            px: {
              lg: 8,
              md: 1,
              sm: 1,
              xs: 1,
            },
            height: "50px",
          }}
        >
          {/* Facebook */}
          <Avatar
            src={images.dark_facebook}
            sx={{
              borderRadius: "0",
              width: "15px",
              height: "15px",
              mx: 1,
            }}
          />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "29px",
              fontFamily: "'Barlow Condensed', sans-serif",
              paddingLeft: 0.3,
              paddingRight: 2,
              display: {
                xs: "none", // Hide on extra small screens
                sm: "block", // Hide on small screens
                md: "block", // Display on medium and larger screens
              },
            }}
          >
            Facebook
          </Typography>
          {/* twitter */}
          <Avatar
            src={images.dark_twitter}
            sx={{
              borderRadius: "0",
              width: "15px",
              height: "15px",
              mx: 1,
            }}
          />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "29px",
              fontFamily: "'Barlow Condensed', sans-serif",
              paddingLeft: 0.3,
              paddingRight: 2,
              display: {
                xs: "none", // Hide on extra small screens
                sm: "block", // Hide on small screens
                md: "block", // Display on medium and larger screens
              },
            }}
          >
            twitter
          </Typography>
          {/* linkedin */}
          <Avatar
            src={images.dark_linkedin}
            sx={{
              borderRadius: "0",
              width: "15px",
              height: "15px",
              mb: "2px",
              mx: 1,
            }}
          />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "29px",
              fontFamily: "'Barlow Condensed', sans-serif",
              paddingLeft: 0.3,
              paddingRight: 2,
              display: {
                xs: "none", // Hide on extra small screens
                sm: "block", // Hide on small screens
                md: "block", // Display on medium and larger screens
              },
            }}
          >
            linkedin
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
// dark: #192d34
// light: #bde7fd
//  fontFamily: "'Barlow Condensed', sans-serif",
