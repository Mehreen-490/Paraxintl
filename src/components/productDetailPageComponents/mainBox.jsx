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
    <Stack direction="column" width="100%" p={2}>
      <Stack direction="row" width="100%" justifyContent="end">
        <IconButton
          size="small"
          sx={{
            border: "1px solid grey",
            py: "2px",
            px: "4px",
            bgcolor: "#FFFFFF",
            borderRadius: "4px",
            "&:hover": {
              bgcolor: "#f9f9f9",
            },
            mr: "2px",
          }}
        >
          <NavigateBeforeRoundedIcon />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            border: "1px solid grey",
            py: "2px",
            px: "4px",
            bgcolor: "#FFFFFF",
            borderRadius: "4px",
            "&:hover": {
              bgcolor: "#f9f9f9",
            },
          }}
        >
          <NavigateNextRoundedIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" width="100%">
        <Box width="50%" height="500px">
          <ProductDetailPageSlider />
        </Box>
        <Box width="50%">
          <ProductMetaDetail />
        </Box>
      </Stack>
      <ProductDetailDescription />
      <RelatedProducts />
    </Stack>
  );
}

export default MainBox;
