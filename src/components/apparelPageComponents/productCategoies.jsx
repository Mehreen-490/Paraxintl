import React, { useState } from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import images from "../../assets/images";
import CategoryCard from "../shared/categoryCard";

const ProductCategories = () => {
  const [hoverStates, setHoverStates] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <Box
      sx={{
        py: 6,
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: {
            sm: "26px",
            xs: "24px",
          },
          lineHeight: "31px",
          color: "#2a2e39",
          pb: 3,
          whiteSpace: "nowrap",
        }}
      >
        Instrument Categories
      </Typography>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{
          sm: 3,
          xs: 1,
        }}
      >
        {/* Dental Instruments Box */}
        <Grid item xl={2.4} lg={3} md={4} sm={4} xs={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Dental Instruments Avatar */}
            <Avatar
              src={images.product_category.dental_instruments}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverStates[1] ? "rgba(0, 0, 0, 0.8)" : "",
                opacity: hoverStates[1] ? 1 : 0.7,
                borderRadius: "0 0 10px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              {/* Dental Instruments Typography */}
              <Typography
                sx={{
                  color: hoverStates[1] ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Dental
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Electro Surgical Instruments Box */}
        <Grid item xl={2.4} lg={3} md={4} sm={4} xs={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Electro Surgical Instruments Avatar */}
            <Avatar
              src={images.product_category.electro_surgical_instruments}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverStates[2] ? "rgba(0, 0, 0, 0.8)" : "",
                opacity: hoverStates[2] ? 1 : 0.7,
                borderRadius: "0 0 10px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              {/* Electro Surgical Instruments Typography */}
              <Typography
                sx={{
                  color: hoverStates[2] ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Electro Surgical
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Surgical Instruments Box */}
        <Grid item xl={2.4} lg={3} md={4} sm={4} xs={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Surgical Instruments Avatar */}
            <Avatar
              src={images.product_category.surgical_instruments}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverStates[3] ? "rgba(0, 0, 0, 0.8)" : "",
                opacity: hoverStates[3] ? 1 : 0.7,
                borderRadius: "0 0 10px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              {/* Surgical Instruments Typography */}
              <Typography
                sx={{
                  color: hoverStates[3] ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Surgical
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Plastic Surgery Instruments Box */}
        <Grid item xl={2.4} lg={3} md={4} sm={4} xs={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Plastic Surgery Instruments Avatar */}
            <Avatar
              src={images.product_category.plastic_surgery_instruments}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeave(4)}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverStates[4] ? "rgba(0, 0, 0, 0.8)" : "",
                opacity: hoverStates[4] ? 1 : 0.7,
                borderRadius: "0 0 10px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeave(4)}
            >
              {/* Plastic Surgery Instruments Typography */}
              <Typography
                sx={{
                  color: hoverStates[4] ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Plastic Surgery
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Gynecology Instruments Box */}
        <Grid item xl={2.4} lg={3} md={4} sm={4} xs={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Gynecology Instruments Avatar */}
            <Avatar
              src={images.product_category.gynecology_instruments}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={() => handleMouseLeave(5)}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverStates[5] ? "rgba(0, 0, 0, 0.8)" : "",
                opacity: hoverStates[5] ? 1 : 0.7,
                borderRadius: "0 0 10px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={() => handleMouseLeave(5)}
            >
              {/* Gynecology Instruments Typography */}
              <Typography
                sx={{
                  color: hoverStates[5] ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Gynecology
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Single Use Instruments Box */}
        <Grid item xl={2.4} lg={3} md={4} sm={4} xs={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Single Use Instruments Avatar */}
            <Avatar
              src={images.product_category.single_use_instruments}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={() => handleMouseLeave(6)}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverStates[6] ? "rgba(0, 0, 0, 0.8)" : "",
                opacity: hoverStates[6] ? 1 : 0.7,
                borderRadius: "0 0 10px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={() => handleMouseLeave(6)}
            >
              {/* Single Use Instruments Typography */}
              <Typography
                sx={{
                  color: hoverStates[6] ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Single Use
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Misc. Instruments Box */}
        <Grid item xl={2.4} lg={3} md={4} sm={4} xs={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Misc. Instruments Avatar */}
            <Avatar
              src={images.product_category.misc_instruments}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={() => handleMouseLeave(7)}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverStates[7] ? "rgba(0, 0, 0, 0.8)" : "",
                opacity: hoverStates[7] ? 1 : 0.7,
                borderRadius: "0 0 10px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={() => handleMouseLeave(7)}
            >
              {/* Misc. Instruments Typography */}
              <Typography
                sx={{
                  color: hoverStates[7] ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Misc.
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Beauty Instruments Box */}
        <Grid item xl={2.4} lg={3} md={4} sm={4} xs={6}>
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Beauty Instruments Avatar */}
            <Avatar
              src={images.product_category.beauty_instruments}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: hoverStates[0] ? "rgba(0, 0, 0, 0.8)" : "",
                opacity: hoverStates[0] ? 1 : 0.7,
                borderRadius: "0 0 10px 10px",
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              {/* Beauty Instruments Typography */}
              <Typography
                sx={{
                  color: hoverStates[0] ? "white" : "black",
                  textAlign: "center",
                }}
              >
                Beauty
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCategories;
