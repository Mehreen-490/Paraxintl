import { Box, Stack } from "@mui/system";
import React from "react";
import { Avatar, Button, Chip, Typography } from "@mui/material";
import MuiRating from "../shared/muiRating";

const ProductListCard = ({ name, image, categories }) => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          bgcolor: "white",
          borderRadius: "10px",
          px: {
            md: 3,
            xs: 1,
          },
          py: 2,
          boxShadow: "0px 0px 10px #ecf2f9",
          display: "flex",
          mr: 2,
        }}
      >
        <Avatar
          src={image}
          sx={{
            borderRadius: "10px",
            height: "100%",
            width: {
              md: "250px",
              xs: "150px",
            },
          }}
        />
        <Box sx={{ pt: 2, pl: 2, display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "17px",
              lineHeight: "21px",
              color: "#2b3445",
              pb: 0.5,
            }}
          >
            {name}
          </Typography>
          <MuiRating />
          <Stack
            direction="row"
            rowGap={0.4}
            columnGap={0.4}
            pt={1}
            sx={{ flexWrap: "wrap" }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                size="small"
                label={
                  <Typography
                    sx={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.5px",
                      m: 0,
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
          <Box>
            <Button
              disableRipple
              variant="text"
              sx={{
                color: "#2b3445",
                pl: 0.5,
                pt: 1.4,
                "&:hover": {
                  bgcolor: "white",
                },
              }}
            >
              Read More...
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductListCard;
