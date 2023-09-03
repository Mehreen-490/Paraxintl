import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import MuiRating from "../shared/muiRating";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
function ProductMetaDetail() {
  return (
    <Box
      sx={{
        pl: {
          md: 4,
          sm: 2,
          xs: 0.5,
        },
        width: "100%",
        pt: {
          sm: 0,
          xs: 1,
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="end"
        sx={{
          width: {
            md: "100%",
            xs: 0,
          },
          display: {
            md: "flex",
            xs: "none",
          },
        }}
      >
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
          <NavigateBeforeRoundedIcon sx={{ color: "#2b3445" }} />
        </IconButton>
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
      </Stack>
      <Typography
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: {
            lg: "30px",
            sm: "22px",
            xs: "24px",
          },
          lineHeight: "45px",
          color: "#2b3445",
        }}
      >
        Stainless Steel Frame
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "21px",
          color: "#2b3445",
          letterSpacing: "0.2px",
          mt: 1,
          mb: 1.5,
        }}
      >
        <b>SKU: </b>AAI-LCU-002
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "21px",
          color: "#2b3445",
          letterSpacing: "0.2px",
        }}
        mb={1}
      >
        <b>Categories: </b> &nbsp;
      </Typography>
      <Stack direction="row" width="100%">
        {["Mask", "Probes"].map((category) => {
          return (
            <Chip
              label={category}
              size="small"
              sx={{ mb: 1, mr: 0.4, bgcolor: "#2a2e35", color: "white" }}
            ></Chip>
          );
        })}
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            color: "#2b3445",
            letterSpacing: "0.2px",
            mr: 0.4,
          }}
        >
          <b>Rated: </b>
        </Typography>
        <MuiRating />
      </Box>
      <Button
        sx={{
          bgcolor: "#212a39",
          color: "white",
          mt: 2,
          px: 2,
          py: 1,
          letterSpacing: "1px",
          "&:hover": {
            bgcolor: "#212a30",
          },
        }}
        startIcon={<ReportProblemIcon />}
      >
        <Typography
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "21px",
            color: "white",
            textTransform: "none",
          }}
        >
          Make Inquiry
        </Typography>
      </Button>
    </Box>
  );
}

export default ProductMetaDetail;
