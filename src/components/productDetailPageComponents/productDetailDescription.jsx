import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { blue, red } from "@mui/material/colors";
import { CardContent } from "@mui/joy";

function createComment(title, description, color) {
  const normalTextStyle = {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "14px",
    lineHeight: "21px",
    textTransform: "none",
    letterSpacing: "0.3px",
  };
  return (
    <Card
      sx={{
        bgcolor: "inherit",
        maxWidth: "100%",
        boxShadow: 0,
        py: 1,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: color }} aria-label="recipe">
            R
          </Avatar>
        }
        title={
          <Stack direction="row" alignItems="center">
            <Typography fontWeight="bold" style={normalTextStyle}>
              {title}
            </Typography>{" "}
            &nbsp;&nbsp;
            <Rating name="size-small" defaultValue={2} size="small" />
          </Stack>
        }
        subheader={
          <Typography sx={{ ...normalTextStyle, color: "rgba(0,0,0,0.6)" }}>
            September 14, 2016
          </Typography>
        }
      />
      <CardContent sx={{ px: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            ...normalTextStyle,
            color: "rgba(0,0,0,0.6)",
            pl: 0.5,
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ProductDetailDescription() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const normalTextStyle = {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#2b3445",
    textTransform: "none",
    letterSpacing: "0.5px",
  };
  return (
    <Box sx={{ width: "100%", py: 3 }}>
      <Box sx={{ width: "100%", typography: "body1", mt: 1 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label={
                  <Typography
                    sx={{
                      fontFamily: "",
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#2b3445",
                      textTransform: "none",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Description
                  </Typography>
                }
                value="1"
              />
              <Tab
                label={
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#2b3445",
                      textTransform: "none",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Reviews (2)
                  </Typography>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ul>
              <li>
                <Typography style={normalTextStyle}>100% Cotton</Typography>
              </li>
              <li>
                <Typography style={normalTextStyle}>Imported</Typography>
              </li>
              <li>
                <Typography style={normalTextStyle}>Pull On closure</Typography>
              </li>
              <li>
                <Typography style={normalTextStyle}>Machine Wash</Typography>
              </li>
              <li>
                <Typography style={normalTextStyle}>
                  SOFT COTTON TO FEEL GOOD ABOUT – Traceable, US-grown, ringspun
                  cotton, produced using less water while yielding an ultra-soft
                  feel.
                </Typography>
              </li>
              <li>
                <Typography style={normalTextStyle}>
                  MADE FOR THE LONG HAUL – Higher stitch count and reinforced
                  shoulder seams makes this men’s t-shirt extra durable.
                </Typography>
              </li>
              <li>
                <Typography style={normalTextStyle}>
                  COMFORT IN THE DETAILS – Tonal back neck tape for no-chafe
                  comfort.
                </Typography>
              </li>
              <li>
                <Typography style={normalTextStyle}>
                  HOLDS THE SHAPE – Sturdy ribbed crewneck helps hold the shape
                  at the neck.
                </Typography>
              </li>
            </ul>
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            {createComment(
              "Jannie Schumm",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
              red[500]
            )}
            {createComment(
              "Joe Kenan",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.",
              blue[800]
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default ProductDetailDescription;
