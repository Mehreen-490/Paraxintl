import { Box } from "@mui/material";
import React from "react";
import Apparel from "../components/homePageComponents/apparel";
import Surgical from "../components/homePageComponents/surgical";

function HomePage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* APPAREL SECTION */}
      <Apparel />
      {/* SURGICAL SECTION */}
      <Surgical />
    </Box>
  );
}

export default HomePage;
