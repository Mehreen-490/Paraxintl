import {
  Avatar,
  Box,
  Card,
  CardHeader,
  IconButton,
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardContent } from "@mui/joy";

function createComment(title, description, color) {
  return (
    <Card
      sx={{
        bgcolor: "transparent",
        maxWidth: "70%",
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
            <Typography fontWeight="bold">{title}</Typography> &nbsp;&nbsp;
            <Rating name="size-small" defaultValue={2} size="small" />
          </Stack>
        }
        subheader="September 14, 2016"
      />
      <CardContent sx={{ px: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "rgba(0,0,0,0.6)",
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

  return (
    <Box>
      <Box
        sx={{
          borderTop: "2px solid black",
          borderBottom: "2px solid black",
          py: "3px",
          textAlign: "center",
          mt: 2,
          background: "rgba(0,0,0,0.7)",
          color: "white",
        }}
      >
        <Typography variant="subtitle1">Description</Typography>
      </Box>

      <Box sx={{ width: "100%", typography: "body1", mt: 1 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Description" value="1" />
              <Tab label="Reviews (2)" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ul>
              <li>
                <Typography>100% Cotton</Typography>
              </li>
              <li>
                <Typography>Imported</Typography>
              </li>
              <li>
                <Typography>Pull On closure</Typography>
              </li>
              <li>
                <Typography>Machine Wash</Typography>
              </li>
              <li>
                <Typography>
                  SOFT COTTON TO FEEL GOOD ABOUT – Traceable, US-grown, ringspun
                  cotton, produced using less water while yielding an ultra-soft
                  feel.
                </Typography>
              </li>
              <li>
                <Typography>
                  MADE FOR THE LONG HAUL – Higher stitch count and reinforced
                  shoulder seams makes this men’s t-shirt extra durable.
                </Typography>
              </li>
              <li>
                <Typography>
                  COMFORT IN THE DETAILS – Tonal back neck tape for no-chafe
                  comfort.
                </Typography>
              </li>
              <li>
                <Typography>
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
