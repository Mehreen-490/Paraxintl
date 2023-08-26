import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import StepsDetail from "../components/orderPageComponents/stepsDetail";

function OrderPage() {
  return (
    <Box>
      <Navbar />
      <StepsDetail />
      <Footer />
    </Box>
  );
}

export default OrderPage;
