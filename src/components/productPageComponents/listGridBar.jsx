import { Autocomplete, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import ListIcon from "@mui/icons-material/List";
const ListGridBar = () => {
  const sorting = [
    "Default Sorting",
    "Sort By Popularity",
    "Sort By Latest",
    "Sort By Price: Low To High",
    "Sort By Price: High To Low",
  ];
  const view = ["All", 4, 12, 24];
  return (
    <Box
      px={{
        sm: 2,
        xs: 1,
      }}
      py={3}
      sx={{
        display: "flex",
        width: "100%",
        bgcolor: "white",
        borderRadius: "10px",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        alignItems: {
          md: "center",
          xs: "left",
        },
      }}
    >
      {/* Search Result No. Box */}
      <Box>
        {/* Serach Result Typography */}
        <Typography
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: {
              sm: "16px",
              xs: "15px",
            },
            lineHeight: "24px",
            color: "#2b3445",
          }}
        >
          Searching for “ eye instruments ”
        </Typography>
        {/* No. of result Typography */}
        <Typography
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontSize: {
              sm: "14px",
              xs: "12px",
            },
            lineHeight: "25px",
            color: "#7d879c",
          }}
        >
          48 results found
        </Typography>
      </Box>
      {/* Sorting,View Autocomplete, List Grid Icon */}
      <Box
        sx={{
          ml: {
            md: "auto",
            xs: 0,
          },
          mt: {
            md: 0,
            xs: 1,
          },
          display: "flex",
          alignItems: "center",
          flexDirection: {
            sm: "row",
            xs: "column",
          },
          py: {
            md: 0.7,
            xs: 0,
          },
        }}
      >
        {/* Sorting , No. of Products Autocomplete Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            flexDirection: {
              sm: "row",
              xs: "column",
            },
          }}
        >
          {/* Sort Box */}
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            {/* Sort By Typography */}
            <Typography
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "25px",
                color: "#7d879c",
                mr: 1,
                whiteSpace: "nowrap",
              }}
            >
              Sort By:{" "}
            </Typography>
            {/* Sort By Autocomplete */}
            <Autocomplete
              disableClearable={true}
              disablePortal
              id="combo-box-demo"
              options={sorting}
              size="small"
              defaultValue="Default Sorting"
              sx={{
                p: 0,
                width: {
                  lg: 200,
                  xs: 150,
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    sx: {
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#2b3445",
                      ...params.InputProps.sx,
                    },
                  }}
                />
              )}
            />
          </Box>
          {/* No. of Products Box */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              mt: {
                md: 0,
                xs: 1,
              },
            }}
          >
            {/* No. of Products Typography */}
            <Typography
              sx={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "25px",
                color: "#7d879c",
                ml: {
                  sm: 1,
                  xs: 0,
                },
                mr: 1,
                whiteSpace: "nowrap",
              }}
            >
              No. of Products:{" "}
            </Typography>
            {/* No. of Products Autocomplete */}
            <Autocomplete
              disableClearable={true}
              disablePortal
              id="combo-box-demo"
              options={view}
              size="small"
              defaultValue="All"
              sx={{
                width: {
                  lg: 70,
                  xs: 60,
                },
                p: 0,
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    sx: {
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#2b3445",
                      ...params.InputProps.sx,
                    },
                  }}
                />
              )}
            />
          </Box>
        </Box>
        {/* View Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mt: {
              sm: 0,
              xs: 2,
            },
          }}
        >
          {/* View Typography */}
          <Typography
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "25px",
              color: "#7d879c",
              mx: {
                sm: 1,
                xs: 0,
              },
            }}
          >
            View:{" "}
          </Typography>
          <ViewCompactIcon
            sx={{
              color: "#757575",
              width: {
                lg: "40px",
                xs: "30px",
              },
              height: {
                lg: "40px",
                xs: "30px",
              },
              p: {
                lg: 0.8,
                xs: 0.4,
              },
              "&:hover": {
                bgcolor: "#f6f6f6",
                borderRadius: "15px",
              },
            }}
          />
          <ListIcon
            sx={{
              color: "#757575",
              width: {
                lg: "40px",
                xs: "30px",
              },
              height: {
                lg: "40px",
                xs: "30px",
              },
              p: {
                lg: 0.8,
                xs: 0.4,
              },
              "&:hover": {
                bgcolor: "#f6f6f6",
                borderRadius: "15px",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ListGridBar;
//   fontFamily: "'Open Sans', sans-serif",
