import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";

const ProductQuality = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f6f6f6",
        px: {
          sm: 3,
          xs: 1,
        },
        py: 4,
      }}
    >
      <Grid container rowSpacing={3}>
        {/* Disposable Box */}
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              borderRight: {
                sm: "1px solid #7d879c",
                xs: "none",
              },
              alignItems: "center",
              justifyContent: "center",
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
                  fontFamily: "'Open Sans', sans-serif",
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
        {/* Reusable Box */}
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              borderRight: {
                lg: "1px solid #7d879c",
                xs: "none",
              },
              alignItems: "center",
              justifyContent: "center",
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
        {/* Variety Products Box */}
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              borderRight: {
                sm: "1px solid #7d879c",
                xs: "none",
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Variety Products Icon */}
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
                Variety Products
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
        {/* Trained Staff Box */}
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Trained Staff Icon */}
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
                Trained Staff
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
