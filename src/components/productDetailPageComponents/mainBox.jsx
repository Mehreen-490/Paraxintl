import React from "react";
import ProductDetailPageSlider from "./productDetailPageSlider";
import ProductMetaDetail from "./productMetaDetail";
import RelatedProducts from "./relatedProducts";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import ProductDetailDescription from "./productDetailDescription";

function MainBox() {
  return (
    <Stack direction="column" width="100%">
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          width: {
            xs: "100%",
            md: 0,
          },
          display: {
            xs: "flex",
            md: "none",
          },
          pb: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="small"
            sx={{
              border: "1px solid #e6e6e6",
              py: "3px",
              px: "3px",
              bgcolor: "#FFFFFF",
              "&:hover": {
                bgcolor: "#bfbfbf",
              },
              mr: "4px",
              borderRadius: 5,
            }}
          >
            <NavigateBeforeRoundedIcon
              sx={{ color: "#2b3445", width: "20px", height: "20px" }}
            />
          </IconButton>
          <Typography
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "21px",
              color: "#2b3445",
              letterSpacing: "0.2px",
            }}
          >
            Previous Product
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "21px",
              color: "#2b3445",
              letterSpacing: "0.2px",
              mr: "4px",
            }}
          >
            Next Product
          </Typography>
          <IconButton
            size="small"
            sx={{
              border: "1px solid #e6e6e6",
              py: "4px",
              px: "4px",
              bgcolor: "#FFFFFF",
              "&:hover": {
                bgcolor: "#bfbfbf",
              },
              mr: "4px",
              borderRadius: 5,
            }}
          >
            <NavigateNextRoundedIcon sx={{ color: "#2b3445" }} />
          </IconButton>
        </Box>
      </Stack>
      <Stack
        direction={{
          sm: "row",
          xs: "column",
        }}
        width="100%"
      >
        <Box
          width={{
            md: "40%",
            sm: "50%",
            xs: "100%",
          }}
          height={{
            sm: "380px",
            xs: "250px",
          }}
        >
          <ProductDetailPageSlider />
        </Box>
        <Box
          width={{
            md: "60%",
            sm: "50%",
            xs: "100%",
          }}
        >
          <ProductMetaDetail />
        </Box>
      </Stack>
      <ProductDetailDescription />
      <RelatedProducts />
    </Stack>
  );
}

export default MainBox;
