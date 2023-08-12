import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import images from "../../../assets/images";
const MainBox = () => {
  const sorting = [
    "Default Sorting",
    "Sort By Popularity",
    "Sort By Latest",
    "Sort By Price: Low To High",
    "Sort By Price: High To Low",
  ];
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <Box sx={{ py: 4, width: "100%", px: 2, pb: 10 }}>
      {/* Top Bar */}
      <Box>
        {/* Divider */}
        <Box sx={{ height: "0.5px", width: "100%", bgcolor: "#192d34" }}></Box>
        {/* Content i.e. grid, list, sorting, view detail */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Grid & List View Icons */}
          <Box sx={{ display: "flex", alignItems: "center", py: 1 }}>
            <GridViewIcon
              sx={{
                border: "1px solid #6AA3C2",
                width: "37px",
                height: "37px",
                p: "5px",
                borderRadius: "2px",
              }}
            />
            <ListIcon
              sx={{
                border: "1px solid #6AA3C2",
                width: "37px",
                height: "37px",
                p: "5px",
                borderRadius: "2px",
                mx: 1.2,
              }}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={sorting}
              size="small"
              defaultValue="Default Sorting"
              sx={{ width: 250, p: 0 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          {/* VIEW 12/24/ALL */}
          <Box sx={{ ml: "auto", pr: 2 }}>
            <Typography
              sx={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "34px",
              }}
            >
              VIEW: 12/24/ALL
            </Typography>
          </Box>
        </Box>
        {/* Divider */}
        <Box sx={{ height: "0.5px", width: "100%", bgcolor: "#192d34" }}></Box>
      </Box>
      <Box
        sx={{
          pt: 2,
          width: "260px",
          px: "1px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src={hovered ? images.back : images.front}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            borderRadius: "0",
            width: "258px",
            height: "258px",
            opacity: "0.8",
          }}
        />
        <Typography
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 300,
            fontSize: "12px",
            lineHeight: "12px",
            fontStyle: "italic",
            color: "#3a6878",
            py: 0.8,
            letterSpacing: "0.5px",
          }}
        >
          Casual Wear, T-Shirts
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "21px",
            textAlign: "center",
          }}
        >
          100% cotton Loose Vintage T-Shirt Custom Men Oversized T-shirt
        </Typography>
        <Button
          variant="outlined"
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            FileSystem: "18px",
            lineHeight: "20px",
            color: "#192d34",
            border: "1px solid #192d34",
            borderRadius: "0",
            mt: 1,
            py: 1,
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default MainBox;
// fontFamily: "'Oswald', sans-serif",
// dark: #192d34
// light: #bde7fd
