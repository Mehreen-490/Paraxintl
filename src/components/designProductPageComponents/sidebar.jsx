import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    border: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#FFFFFF",
  flexDirection: "row-reverse",
  paddingLeft: 0,
  paddingTop: 0,
  paddingBottom: 0,
  height: "15px",
  "& .MuiAccordionSummary-expandIconWrapper": {
    position: "absolute",
    right: "8px",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

function CheckBoxWithText(text) {
  return (
    <>
      <Stack direction="row" alignItems="center">
        <BpCheckbox />
        <Typography> {text}</Typography>
      </Stack>
    </>
  );
}

const Sidebar = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    if (event.target.type === "checkbox") return;
    // if (event.currentTarget != event.target) return;
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
        padding: "10px",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px rgba(236, 242, 249)",
        ml: 1,
        py: 3,
        borderRadius: "10px",
      }}
    >
      <Stack>
        {/* Search Textfield */}
        <Box sx={{ borderRadius: "10px" }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              background: "#f6f9fc",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, background: "#f6f9fc" }}
              placeholder="Search Products"
              inputProps={{
                "aria-label": "search products",
              }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        {/* Instrument Categories Heading Box */}
        <Box px={2} pt={3} pb={1}>
          {/* Instrument Categories Typography */}

          <Typography
            variant="subtitle2"
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: "21px",
              color: "#2b3445",
              letterSpacing: "0.2px",
            }}
          >
            Instrument Categories
          </Typography>
        </Box>
        {/* Accordian Box */}
        <Box
          sx={{
            background: "#f6f6f6",
            borderRadius: "10px",
            boxShadow: 0,
          }}
        >
          {/* Eye Instruments Accordian */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              {/* Eye Instruments Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Eye Instruments
                </Typography>
              )}
            </AccordionSummary>
            <AccordionDetails>
              {/* Cannulae Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Cannulae{" "}
                </Typography>
              )}
              {/* Choppers Hooker and Probes Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Choppers Hooker and Probes{" "}
                </Typography>
              )}
              {/* Disposables Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Disposables{" "}
                </Typography>
              )}
              {/* Knives and Sharps Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Knives and Sharps{" "}
                </Typography>
              )}
              {/* Lid Instruments Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Lid Instruments{" "}
                </Typography>
              )}
              {/* Needle Holders Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Needle Holders{" "}
                </Typography>
              )}
              {/* Oculoplastic And Lacrimal Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Oculoplastic And Lacrimal{" "}
                </Typography>
              )}
              {/* Scissors Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Scissors{" "}
                </Typography>
              )}
              {/* Specialist Instruments Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Specialist Instruments{" "}
                </Typography>
              )}
              {/* Specula Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Specula{" "}
                </Typography>
              )}
              {/* Trays Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Trays{" "}
                </Typography>
              )}
              {/* Vitreoretinal Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Vitreoretinal{" "}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>

          {/* Dental Instrumnets Box */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            {/* Dental Instruments Typography */}
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Dental Instruments
                </Typography>
              )}
            </AccordionSummary>
          </Accordion>
          {/* Beauty Instrumnets Box */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            {/* Beauty Instruments Typography */}
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Beauty Instruments
                </Typography>
              )}
            </AccordionSummary>
          </Accordion>
          {/* Surgical Instruments Accordian */}
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              {/* Surgical Instruments Typography */}
              {CheckBoxWithText(
                <Typography
                  sx={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7d879c",
                    letterSpacing: "0.5px",
                  }}
                >
                  Surgical Instruments{" "}
                </Typography>
              )}
            </AccordionSummary>
          </Accordion>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
// fontFamily: "'Oswald', sans-serif",
// dark: #192d34
// light: #bde7fd
