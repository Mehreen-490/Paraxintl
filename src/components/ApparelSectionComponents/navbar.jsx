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
  fontWeight: "700px",
  fontSize: "22px",
  lineHeight: "20px",
  borderRadius: "0",
  border: "1px solid transparent",
  pt: "15px",
  // px: "15px",
};
function Navbar() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <AppBar
        disableGutters
        elevation={2}
        sx={{
          height: "90px",
          display: "flex",
          bgcolor: "#192d34",
          color: "#bde7fd",
          justifyContent: "center",
          pl: 9,
        }}
      >
        <Toolbar disableGutters>
          <Stack direction="row">
            <Button
              sx={{
                ...navButton,
                width: "120px",
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "15px",
                  background: "#192d34",
                },
              }}
            >
              Home{" "}
            </Button>
            <Button
              sx={{
                ...navButton,
                width: "130px",
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "15px",
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
                width: "150px",
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "15px",
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
                width: "130px",
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "15px",
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
                width: "130px",
                "&:hover": {
                  color: "#e6f6fe",
                  borderTop: "1px solid #bde7fd",
                  pt: "15px",
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
              fontWeight: "500",
              fontSize: "48px",
              lineHeight: "20px",
              fontFamily: "'Oswald', sans-serif",
              pl: 20,
              letterSpacing: "2px",
            }}
          >
            PARAX
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: "14px", pt: "2px" }}>
            INTL
          </Typography>
          {/* Whatsapp Contact */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              pr: "20px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar src={images.whatsapp} sx={{ borderRadius: "0px" }} />
              <Box pl={1}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
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
              height: "40px",
              paddingRight: "70px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #bde7fd",
                borderRadius: "20px",
                padding: "4px",
              }}
            >
              <SearchIcon fontSize="medium" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          mt: "90px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          bgcolor: "#325967",
          color: "#111e22",
          pl: 13.5,
        }}
      >
        {/* Mail */}
        <Avatar
          src={images.dark_mail}
          sx={{ borderRadius: "0", width: "30px", height: "30px" }}
        />
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "23px",
            lineHeight: "29px",
            fontFamily: "'Barlow Condensed', sans-serif",
            paddingX: 1,
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
            px: 8,
            height: "50px",
          }}
        >
          {/* Facebook */}
          <Avatar
            src={images.dark_facebook}
            sx={{
              borderRadius: "0",
              width: "25px",
              height: "25px",
            }}
          />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "23px",
              lineHeight: "29px",
              fontFamily: "'Barlow Condensed', sans-serif",
              paddingLeft: 0.3,
              paddingRight: 2,
            }}
          >
            Facebook
          </Typography>
          {/* twitter */}
          <Avatar
            src={images.dark_twitter}
            sx={{
              borderRadius: "0",
              width: "25px",
              height: "25px",
            }}
          />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "23px",
              lineHeight: "29px",
              fontFamily: "'Barlow Condensed', sans-serif",
              paddingLeft: 0.3,
              paddingRight: 2,
            }}
          >
            twitter
          </Typography>
          {/* linkedin */}
          <Avatar
            src={images.dark_linkedin}
            sx={{
              borderRadius: "0",
              width: "25px",
              height: "25px",
            }}
          />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "23px",
              lineHeight: "29px",
              fontFamily: "'Barlow Condensed', sans-serif",
              paddingLeft: 0.3,
              paddingRight: 2,
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
