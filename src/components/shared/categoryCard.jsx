import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";

const CategoryCard = ({ title, image, hover_index }) => {
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
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Beauty Instruments Avatar */}
      <Avatar
        src={image}
        sx={{
          width: "100%",
          height: "280px",
          borderRadius: "10px",
        }}
        onMouseEnter={() => handleMouseEnter(hover_index)}
        onMouseLeave={() => handleMouseLeave(hover_index)}
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
          background: hover_index ? "rgba(0, 0, 0, 0.8)" : "",
          opacity: hover_index ? 1 : 0.7,
          transition: "opacity 0.3s",
          borderRadius: "0 0 10px 10px",
        }}
        onMouseEnter={() => handleMouseEnter(hover_index)}
        onMouseLeave={() => handleMouseLeave(hover_index)}
      >
        {/* Beauty Instruments Typography */}
        <Typography
          sx={{
            color: hover_index ? "white" : "black",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CategoryCard;
