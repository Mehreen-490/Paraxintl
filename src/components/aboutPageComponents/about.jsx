import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import images from "../../assets/images";
import MuiRating from "../shared/muiRating";
const About = () => {
  return (
    <Box sx={{ width: "100%", px: 4, py: 4 }}>
      <Grid
        width="100%"
        container
        direction={{
          xs: "column-reverse",
          lg: "row",
        }}
      >
        <Grid
          item
          lg={6}
          xs={12}
          px={{
            xs: 2,
            md: 4,
            lg: 10,
          }}
          py={6}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              pt: 4,
              fontFamily: "'Inter', sans-serif",
              color: "#212a39",
              textAlign: "center",
            }}
          >
            {/* Parax International Heading */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "26px",
                  md: "30px",
                  lg: "40px",
                  xl: "46px",
                },
                lineHeight: "24px",
              }}
            >
              PARAX INTERNATIONAL
            </Typography>
            {/* Parax Desc. */}
            <Typography
              sx={{
                color: "#2a2e39",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                pt: 3,
                pb: 6,
              }}
            >
              Parax International is specialized in Sports Wear, Casual Wear,
              and outerwear. Our company is a professional manufacturer and
              exporter of high-quality Apparels. We are an established supplier
              of customized Apparel backed by technical expertise and
              experience.
            </Typography>
            {/* Quality Icon */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                bgcolor: "white",
                boxShadow: "2px 2px 2px 2px #e2e4e9",
                borderRadius: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar src={images.quality} />
            </Box>
            {/* Quality Desc */}
            <Typography
              sx={{
                color: "#2a2e39",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                py: 3,
              }}
            >
              <b> QUALITY PRODUCTS:</b>
              No compromise when it comes to price or quality as we deliver
              both. With Pakistan based factory we manufacture Sports Wear,
              Casual Wear, and outerwear to the highest standard. Our customers
              fall in love with the quality. Parax International also guarantees
              you are working with a Supplier directly, not an agent.
            </Typography>
            {/* Why Choose Us Icon */}
            <Box
              sx={{
                width: "65px",
                height: "65px",
                bgcolor: "white",
                boxShadow: "2px 2px 2px 2px #e2e4e9",
                borderRadius: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 3,
              }}
            >
              <Avatar src={images.choose_us} sx={{ borderRadius: "0" }} />
            </Box>
            {/* Why Choose Us Desc */}
            <Typography
              sx={{
                color: "#2a2e39",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                py: 3,
              }}
            >
              <b> WHY CHOOSE US:</b>
              We are devoting all our passion and interests in presenting you
              the best quality custom Apparels globally at your desired Prices.
            </Typography>
            <Box>
              {/* Low Price Icon & Desc. */}
              <Box sx={{ display: "flex", alignItems: "center", mr: 0.5 }}>
                {/* Low Price Icon */}
                <Box
                  sx={{
                    width: "45px",
                    height: "45px",
                    bgcolor: "white",
                    boxShadow: "2px 2px 2px 2px #e2e4e9",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 1,
                  }}
                >
                  <Avatar
                    src={images.low_price}
                    sx={{ borderRadius: "0", width: "25px", height: "25px" }}
                  />
                </Box>
                {/* Low Price Desc */}
                <Typography
                  sx={{
                    color: "#2a2e39",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    py: 3,
                  }}
                >
                  Low Pricing
                </Typography>
              </Box>
              {/* Our Experience Icon & Desc. */}
              <Box sx={{ display: "flex", alignItems: "center", mr: 0.5 }}>
                {/* Our Experience Icon */}
                <Box
                  sx={{
                    width: "45px",
                    height: "45px",
                    bgcolor: "white",
                    boxShadow: "2px 2px 2px 2px #e2e4e9",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 1,
                  }}
                >
                  <Avatar
                    src={images.experience}
                    sx={{ borderRadius: "0", width: "25px", height: "25px" }}
                  />
                </Box>
                {/* Our Experience Desc */}
                <Typography
                  sx={{
                    color: "#2a2e39",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    py: 3,
                  }}
                >
                  Our Experience
                </Typography>
              </Box>
              {/* Highest Quality Icon & Desc. */}
              <Box sx={{ display: "flex", alignItems: "center", mr: 0.5 }}>
                {/* Highest Quality Icon */}
                <Box
                  sx={{
                    width: "45px",
                    height: "45px",
                    bgcolor: "white",
                    boxShadow: "2px 2px 2px 2px #e2e4e9",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 1,
                  }}
                >
                  <Avatar
                    src={images.high_quality}
                    sx={{ borderRadius: "0", width: "25px", height: "25px" }}
                  />
                </Box>
                {/* Highest Quality Desc */}
                <Typography
                  sx={{
                    color: "#2a2e39",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    py: 3,
                  }}
                >
                  Highest Quality
                </Typography>
              </Box>
              {/* Samples & Prototypes Icon & Desc. */}
              <Box sx={{ display: "flex", alignItems: "center", mr: 0.5 }}>
                {/* Samples & Prototypes Icon */}
                <Box
                  sx={{
                    width: "45px",
                    height: "45px",
                    bgcolor: "white",
                    boxShadow: "2px 2px 2px 2px #e2e4e9",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 1,
                  }}
                >
                  <Avatar
                    src={images.sample}
                    sx={{ borderRadius: "0", width: "25px", height: "25px" }}
                  />
                </Box>
                {/* Samples & Prototypes Desc */}
                <Typography
                  sx={{
                    color: "#2a2e39",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    py: 3,
                  }}
                >
                  Samples & Prototypes
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          px={{
            xs: 2,
            md: 10,
            lg: 10,
          }}
          py={6}
        >
          <Avatar
            src={images.apparel}
            sx={{
              borderRadius: "20px",
              width: "100%",
              height: {
                xs: "500px",
                lg: "1000px",
              },
              backgroundSize: "100% 100%",
              backgroundImage: `url(${images.apparel})`,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "300px",
          height: "500px",
          borderRadius: "20px",
          boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
          py: 1,
          px: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f2f2f2",
        }}
      >
        <Avatar
          src={images.scissor}
          sx={{
            width: "340px",
            height: "340px",
            borderRadius: "20px",
            maxWidth: "100%",
          }}
        />
        <Box sx={{ p: 1 }}>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "14px",
              lineHeight: "23px",
              fontWeight: "bold",
            }}
          >
            100% cotton Loose Vintage T-Shirt Custom Men Oversized T-shirt
          </Typography>
          <Stack direction="row" spacing={0.5}>
            <Chip
              size="small"
              label={
                <Typography
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Casaul Wear
                </Typography>
              }
              sx={{
                bgcolor: "#2a2e35",
                color: "white",
              }}
            />
            <Chip
              size="small"
              label={
                <Typography
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {" "}
                  T-shirts
                </Typography>
              }
              sx={{
                bgcolor: "#2a2e35",
                color: "white",
              }}
            />
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
            <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
              Read More...
            </Button>
            <MuiRating />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
// Card Design
