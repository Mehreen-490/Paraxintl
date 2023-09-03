import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import React from "react";
import "./style.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const accodianTypographyStyle = {
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 400,
  fontSize: "13px",
  lineHeight: "21px",
};
const Accordian = () => {
  return (
    <Box py={2}>
      {/* Product Categories Typography */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ width: "3px", height: "16px", bgcolor: "#192d34", mr: 1 }}
        ></Box>
        <Typography
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "13px",
          }}
        >
          Product Categories
        </Typography>
      </Box>
      {/*  Accordian */}
      <Box sx={{ width: "300px" }}>
        {/* Fashion Jacket */}
        <Accordion
          elevation={0}
          disableGutters
          sx={{
            background: "#bde7fd",
            p: 0,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={accodianTypographyStyle}>
              Fashion Jackets
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              Puffer Jackets
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              Varsity Jackets
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Fitness Wear */}
        <Accordion
          elevation={0}
          disableGutters
          sx={{
            background: "#bde7fd",
            p: 0,
            ".MuiPaper-elevation": {
              border: "none !important",
              boxShadow: " none !important",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={accodianTypographyStyle}>
              Fitness Wear
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              Crop Top
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2, pt: 0.5 }}>
              Legging
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2, pt: 0.5 }}>
              Rash Guard
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2, pt: 0.5 }}>
              Tank Top
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2, pt: 0.5 }}>
              Yoga Bra
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2, pt: 0.5 }}>
              Yoga Set
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Sports Wear */}
        <Accordion
          elevation={0}
          disableGutters
          sx={{
            background: "#bde7fd",
            p: 0,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={accodianTypographyStyle}>
              Sports Wear{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0 }}>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              American Football Uniform
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              Baseball Uniform
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              Basketball Uniform
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              VCricket Uniform
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              Ice Hockey Uniform
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              Lacrosse Uniform
            </Typography>
            <Typography sx={{ ...accodianTypographyStyle, pl: 2 }}>
              Soccer uniform
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Accordian;
// fontFamily: "'Oswald', sans-serif",
// dark: #192d34
// light: #bde7fd
