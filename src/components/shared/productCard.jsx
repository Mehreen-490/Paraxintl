import { Avatar, Button, Chip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import MuiRating from "./muiRating";

const ProductCard = ({ name, image, categories, bgcolor }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(236, 242, 249)",
        py: 2,
        display: "flex",
        flexDirection: "column",
        bgcolor: bgcolor,
        px: 0.5,
      }}
    >
      {/* Castroviejo Corneal Scissors Avatar */}
      <Avatar
        src={image}
        sx={{
          width: "100%",
          height: "270px",
          borderRadius: "20px",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />
      <Box sx={{ p: 1 }}>
        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "14px",
            lineHeight: "23px",
            fontWeight: "bold",
            pr: 0.3,
            pl: 0.4,
          }}
        >
          {name}
        </Typography>
        <Stack direction="row" spacing={0.5} mt={0.5}>
          {categories.map((category) => (
            <Chip
              size="small"
              label={
                <Typography
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {category}
                </Typography>
              }
              sx={{
                bgcolor: "#2a2e35",
                color: "white",
              }}
            />
          ))}
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
          <Button
            disableRipple
            sx={{
              color: "#2a2e39",
              py: 0,
              pl: 0.3,
              whiteSpace: "nowrap",
            }}
          >
            Read More...
          </Button>
          <MuiRating />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
