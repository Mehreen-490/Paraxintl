import {
  AppBar,
  Avatar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import images from "../assets/images";
import MuiNestedMenu from "./shared/muiNestedMenu";

function Navbar() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <AppBar
        elevation={4}
        sx={{
          height: "60px",
          display: "flex",
          bgcolor: "white",
          color: "#212a39",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Nav Routes Box */}
            <Box>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                width="100%"
              >
                {/* Home */}
                <Button
                  disableRipple
                  sx={{
                    py: 1,
                    px: {
                      sm: 1,
                      xs: 0,
                    },
                  }}
                  component={NavLink}
                  to="/apparel"
                >
                  <Typography
                    sx={{
                      color: "#212a39",
                      fontSize: "35px",
                      fontWeight: 500,
                      letterSpacing: "1px",
                    }}
                  >
                    PARAX
                  </Typography>
                  <Typography
                    sx={{
                      color: "#212a39",
                      fontSize: "14px",
                      fontWeight: 400,
                      mt: "3px",
                      letterSpacing: "1px",
                    }}
                  >
                    INTL
                  </Typography>
                </Button>

                {/* Products */}
                <MuiNestedMenu />
                {/* How To Order */}
                <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  component={NavLink}
                  to="/how-to-order"
                  sx={{
                    bgcolor: "white",
                    pt: 0.5,
                    pb: 0.5,
                    px: 1,
                    borderBottom: "6px solid transparent",
                    transition:
                      "background-color 0.3s ease, padding 0.3s ease 0.3s",
                    "&:hover": {
                      bgcolor: "#dfe4ec",
                    },
                    width: {
                      xs: "0",
                      lg: "150px",
                    },
                    display: {
                      xs: "none",
                      lg: "flex",
                    },
                  }}
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "#5a6372",
                    borderBottom: isActive ? "6px solid #8BAAC9" : "",
                    borderRadius: "3px",
                    transition: "0.3s ease-in",
                  })}
                >
                  <Avatar
                    src={images.steps}
                    sx={{
                      width: "18px",
                      height: "18px",
                      mr: 1.3,
                      borderRadius: "0",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#212a39",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "none",
                    }}
                  >
                    How To Order
                  </Typography>
                </Button>
                {/* About Us */}
                <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  component={NavLink}
                  to="/about-us"
                  sx={{
                    bgcolor: "white",
                    pt: 0.5,
                    pb: 0.5,
                    px: 1,
                    borderBottom: "6px solid transparent",
                    transition:
                      "background-color 0.3s ease, padding 0.3s ease 0.3s",
                    "&:hover": {
                      bgcolor: " #dfe4ec",
                    },
                    width: {
                      xs: "0",
                      lg: "115px",
                    },
                    display: {
                      xs: "none",
                      lg: "flex",
                    },
                  }}
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "#5a6372",
                    borderBottom: isActive ? "6px solid #8BAAC9" : "",
                    borderRadius: "3px",
                    transition: "0.3s ease-in",
                  })}
                >
                  <Avatar
                    src={images.about_us}
                    sx={{
                      width: "18px",
                      height: "18px",
                      mr: 1.3,
                      borderRadius: "0",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#212a39",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "none",
                    }}
                  >
                    About Us
                  </Typography>
                </Button>
                {/* Contact Us */}
                <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  component={NavLink}
                  to="/contact-us"
                  sx={{
                    bgcolor: "white",
                    pt: 0.5,
                    pb: 0.5,
                    px: 1,
                    borderBottom: "6px solid transparent",
                    transition:
                      "background-color 0.3s ease, padding 0.3s ease 0.3s",
                    "&:hover": {
                      bgcolor: " #dfe4ec",
                    },
                    width: {
                      xs: "0",
                      lg: "125px",
                    },
                    display: {
                      xs: "none",
                      lg: "flex",
                    },
                  }}
                  style={({ isActive }) => ({
                    color: isActive ? "#212a39" : "white",
                    borderBottom: isActive ? "6px solid #8BAAC9" : "",
                    borderRadius: "3px",
                    transition: "0.3s ease-in",
                  })}
                >
                  <Avatar
                    src={images.contact_us}
                    sx={{
                      width: "18px",
                      height: "18px",
                      mr: 1.3,
                      borderRadius: "0",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#212a39",
                      fontSize: "16px",
                      fontWeight: 400,
                      textTransform: "none",
                    }}
                  >
                    Contact Us
                  </Typography>
                </Button>
              </Stack>
            </Box>
            {/* Search Bar Box */}
            <Box>
              <Box
                sx={{
                  width: {
                    xs: "40px",
                    md: "180px",
                  },
                  border: "1px solid  #dfe4ec",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "15px",
                  bgcolor: "#eff1f6",
                  px: 1.5,
                  py: 0.8,
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#dfe4ec",
                    border: "1px solid  #bec8da",
                  },
                }}
              >
                <SearchIcon
                  sx={{
                    color: "#212a39",
                    width: "17px",
                    height: "17px",
                    mr: 0.5,
                  }}
                />
                <Typography
                  sx={{
                    color: "#212a39",
                    fontSize: "14px",
                    width: {
                      xs: "0px",
                      md: "30px",
                    },
                    display: {
                      xs: "none",
                      md: "block",
                    },
                  }}
                >
                  Search...
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ mb: "60px" }}></Box>
    </Box>
  );
}

export default Navbar;
// dark: #192d34
// light: #bde7fd
// {
//   /* <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: "#212a39",
//                     py: 1,
//                     px: 3,
//                     borderBottom: "6px solid transparent",
//                     "&:hover": {
//                       bgcolor: "#212a43",
//                     },
//                   }}
//                   component={NavLink}
//                   to="/apparel"
//                   style={({ isActive }) => ({
//                     color: isActive ? "white" : "#5a6372",
//                     borderBottom: isActive ? "6px solid #8BAAC9" : "",
//                     borderRadius: "3px",
//                     transition: "0.3s ease-in",
//                   })}
//                 >
//                   <Avatar
//                     src={images.home}
//                     sx={{
//                       width: "15px",
//                       height: "15px",
//                       mr: 1.3,
//                       borderRadius: "0",
//                     }}
//                   />
//                   <Typography
//                     sx={{
//                       color: "white",
//                       fontSize: "14px",
//                       fontWeight: 400,
//                       letterSpacing: "1px",
//                     }}
//                   >
//                     PARAX
//                   </Typography>
//                   <Typography
//                     sx={{
//                       color: "white",
//                       fontSize: "10px",
//                       fontWeight: 400,
//                       mt: "3px",
//                       letterSpacing: "1px",
//                     }}
//                   >
//                     INTL
//                   </Typography>
//                 </Button> */
// }
