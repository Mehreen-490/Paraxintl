import React from "react";
import ProductDetailPageSlider from "./productDetailPageSlider";
import { Box } from "@mui/material";

function MainBox() {
  return (
    <>
      <Box width="50%" mt={2}>
        <ProductDetailPageSlider />
      </Box>
    </>
  );
}

export default MainBox;
