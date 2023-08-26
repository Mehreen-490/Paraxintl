import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

function ProductMetaDetail() {
  return (
    <Box px={2}>
      <Typography variant="h4" fontWeight="bold">
        Best Beach Shirts For Men Tropical Island Shirts
      </Typography>
      <hr />
      <Typography fontWeight="100" fontSize="14px" mt={2}>
        <b>SKU: </b>AAI-LCU-002
      </Typography>
      <Typography fontWeight="bold" fontSize="14px" mb={2}>
        <Stack direction="row" width="100%">
          <b>Categories: </b> &nbsp;
          {["Casual Wear", "T-Shirts"].map((category) => {
            return <Chip label={category} size="small" sx={{ mr: 1 }}></Chip>;
          })}
        </Stack>
      </Typography>
      <hr />
      <Button
        sx={{
          bgcolor: "rgba(0,0,0,0.9)",
          color: "white",
          mt: 2,
          "&:hover": {
            bgcolor: "#333",
          },
        }}
      >
        Make Enquiry
      </Button>
    </Box>
  );
}

export default ProductMetaDetail;
