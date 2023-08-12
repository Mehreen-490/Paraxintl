import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Apparel from "../components/homePageComponents/apparel";
import Surgical from "../components/homePageComponents/surgical";
import images from "../assets/images";

function HomePage() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${images.ap_su})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          objectFit: "contain",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // height: "200px",
            pt: 10,
            height: "25%",
            pb: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "80%",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                pb: 1,
                pl: "2px",
                color: "white",
                fontWeight: 500,
                letterSpacing: "2px",
                fontSize: "85px",
                lineHeight: "55px",
              }}
            >
              PARAX
            </Typography>
            <Typography
              sx={{
                pt: "4px",
                pl: "2px",
                color: "white",
                letterSpacing: "2px",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "25px",
              }}
            >
              {" "}
              We are an innovative, original design manufacturer, and export
              company
            </Typography>
          </Box>
        </Box>
        <Grid container height="75%">
          <Grid item xs={12} lg={6} xl={6}>
            <Apparel />
          </Grid>
          <Grid item xs={12} lg={6} xl={6}>
            <Surgical />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;
// {/* <Apparel />
// {/* SURGICAL SECTION */}
// <Surgical /> */}
