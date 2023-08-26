import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import images from "../../assets/images";
import { Button } from "@mui/material";
import ProductSlider from "./productSlider";

function CategoriesSection() {
  return (
    <Box
      sx={{
        width: "100%",
        color: "#192d34",
        px: 8,
      }}
    >
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
      <Stack>
        {/* product slider */}
        <ProductSlider></ProductSlider>
        {/* overlay section 1 */}
        <Stack direction="row" gap={1}>
          <Box
            sx={{
              background: `url(${images.apparel})`,
              width: "50%",
              height: "400px",
              backgroundSize: "100% 100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: "black",
                opacity: "0.4",
                width: "100%",
                height: "100%",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                color: "white",
                paddingLeft: "10%",
              }}
            >
              <Box>
                <Typography variant="h4" component="h4" fontWeight={600}>
                  SPORTS WEAR
                </Typography>
                <Typography marginTop={1}>
                  Checkout our best sportswear collections
                </Typography>
              </Box>
              <Box marginTop={2}>
                <Button variant="contained">VIEW ALL</Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: `url(${images.slider1})`,
              width: "50%",
              height: "400px",
              backgroundSize: "100% 100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: "black",
                opacity: "0.4",
                width: "100%",
                height: "100%",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: "20%",
                color: "white",
                paddingLeft: "10%",
              }}
            >
              <Box>
                <Typography variant="h4" component="h4" fontWeight={600}>
                  SPORTS WEAR
                </Typography>
                <Typography marginTop={1}>
                  Checkout our best sportswear collections
                </Typography>
              </Box>
              <Box marginTop={2}>
                <Button variant="contained">VIEW ALL</Button>
              </Box>
            </Box>
          </Box>
        </Stack>
        {/* overlay section 2 */}
        <Box
          sx={{
            marginTop: "30px",
            width: "100%",
            height: "500px",
            backgroundImage: `url("${images.parallax_home_after_slider_background}")`,
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
              top: "20%",
              color: "white",
              padding: "0px 6%",
            }}
          >
            <Box sx={{ width: "50%", padding: "5% 0px" }}>
              <Typography variant="h6">
                No compromise when it comes to price or quality as we deliver
                both. With a Pakistan-based factory we manufacture Sports Wear,
                Casual Wear, and Outerwear to the highest standard. Our
                customers fall in love with the quality. PARAX International
                also guarantees you are working with a Supplier directly, not an
                agent.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50%",

                padding: "0px 0px 00px 6%",
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
      </Stack>
    </Box>
  );
}

export default CategoriesSection;
// dark: #192d34
// light: #bde7fd
