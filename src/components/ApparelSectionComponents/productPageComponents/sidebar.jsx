import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Accordian from "./accordian";

const Sidebar = () => {
  return (
    <Box
      sx={{
        py: 6,
        pl: 4,
        color: "#192d34",
        background: "#bde7fd",
        width: "23%",
      }}
    >
      {/* Search Box */}
      <Box>
        <Typography
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            lineHeight: "23px",
          }}
        >
          Search
        </Typography>
        <Box>
          <TextField
            name="search"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": {
                height: 40,
                borderRadius: "0",
              },
            }}
          />
          <Button
            variant="outlined"
            sx={{
              height: 40,
              borderRadius: "0",
              background: "#192d34",
              border: "0",
              color: "#bde7fd",
              "&:hover": {
                background: "inherit",
                border: "1px solid #192d34",
                color: "#192d34",
              },
            }}
          >
            Search
          </Button>
        </Box>
        <Accordian />
      </Box>
    </Box>
  );
};

export default Sidebar;
// fontFamily: "'Oswald', sans-serif",
// dark: #192d34
// light: #bde7fd
