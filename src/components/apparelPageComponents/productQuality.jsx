import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";

const ProductQuality = () => {
  return (
    <Box sx={{ bgcolor: "#f6f6f6", px: 3, py: 4 }}>
      <Grid container>
        <Grid item xl={3} lg={3} md={6} xs={12} px={4}>
          {/* Disposable Box */}
          <Box
            sx={{
              display: "flex",
              borderRight: {
                md: "1px solid #7d879c",
                xs: "none",
              },
            }}
          >
            {/* Dispoasable Icon */}
            <Avatar
              src={images.product_quality.disposable}
              sx={{ width: "43px", height: "43px", borderRadius: "0" }}
            />
            {/* Typography Box */}
            <Box pl={1}>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: "22px",
                  color: "#2a2e39",
                }}
              >
                Dispoasble
              </Typography>
              <Typography
                sx={{
                  fontFamily: "",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#7d879c",
                }}
              >
                Surgical Instruments
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={6} xs={12} px={4}>
          {/* Reusable Box */}
          <Box
            sx={{
              display: "flex",
              borderRight: {
                lg: "1px solid #7d879c",
                xs: "none",
              },
            }}
          >
            {/* Reusable Icon */}
            <Avatar
              src={images.product_quality.reusable}
              sx={{ width: "43px", height: "43px", borderRadius: "0" }}
            />
            {/* Typography Box */}
            <Box pl={1}>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: "22px",
                  color: "#2a2e39",
                }}
              >
                Reusable
              </Typography>
              <Typography
                sx={{
                  fontFamily: "",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#7d879c",
                }}
              >
                Surgical Instruments
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={6} xs={12} px={2}>
          {/* Wide Range Products Box */}
          <Box
            sx={{
              display: "flex",
              borderRight: {
                md: "1px solid #7d879c",
                xs: "none",
              },
            }}
          >
            {/* Wide Range Products Icon */}
            <Avatar
              src={images.product_quality.wide_range}
              sx={{ width: "43px", height: "43px", borderRadius: "0" }}
            />
            {/* Typography Box */}
            <Box pl={1}>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: "22px",
                  color: "#2a2e39",
                }}
              >
                Wide Range Products
              </Typography>
              <Typography
                sx={{
                  fontFamily: "",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#7d879c",
                }}
              >
                Surgical Instruments
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={6} xs={12} px={4}>
          {/* Trained Workforce Box */}
          <Box sx={{ display: "flex" }}>
            {/* Trained Workforce Icon */}
            <Avatar
              src={images.product_quality.trained_workforce}
              sx={{ width: "43px", height: "43px", borderRadius: "0" }}
            />
            {/* Typography Box */}
            <Box pl={1}>
              <Typography
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  lineHeight: "22px",
                  color: "#2a2e39",
                }}
              >
                Trained Workforce
              </Typography>
              <Typography
                sx={{
                  fontFamily: "",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "#7d879c",
                }}
              >
                Surgical Instruments
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductQuality;
