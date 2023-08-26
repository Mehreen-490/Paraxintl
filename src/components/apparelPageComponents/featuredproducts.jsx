import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import images from "../../assets/images";
import MuiRating from "../shared/muiRating";

const Featuredproducts = () => {
  return (
    <Box pb={5}>
      {/* Feature Products Heading */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 2,
          pb: 4,
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "31px",
            color: "#2a2e39",
          }}
        >
          Featured Products
        </Typography>
      </Box>
      <Grid container rowSpacing={3}>
        <Grid
          item
          lg={3}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Castroviejo Corneal Scissors Card */}
          <Box
            sx={{
              width: "300px",
              height: "500px",
              borderRadius: "20px",
              boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
              py: 1,
              px: 1,
              display: "flex",
              flexDirection: "column",
              bgcolor: "#f2f2f2",
            }}
          >
            {/* Castroviejo Corneal Scissors Avatar */}
            <Avatar
              src={images.featured_products.castroviejo_corneal_scissors}
              sx={{
                width: "340px",
                height: "340px",
                borderRadius: "20px",
                maxWidth: "100%",
              }}
            />
            <Box sx={{ p: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "14px",
                  lineHeight: "23px",
                  fontWeight: "bold",
                  py: 0.3,
                }}
              >
                Castroviejo Corneal Scissors
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Chip
                  size="small"
                  label={
                    <Typography
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Scissors
                    </Typography>
                  }
                  sx={{
                    bgcolor: "#2a2e35",
                    color: "white",
                  }}
                />
                <Chip
                  size="small"
                  label={
                    <Typography
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {" "}
                      Eye-instruments
                    </Typography>
                  }
                  sx={{
                    bgcolor: "#2a2e35",
                    color: "white",
                  }}
                />
              </Stack>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
              >
                <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
                  Read More...
                </Button>
                <MuiRating />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Castroviejo Micro Corneal Scissors Card */}
          <Box
            sx={{
              width: "300px",
              height: "500px",
              borderRadius: "20px",
              boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
              py: 1,
              px: 1,
              display: "flex",
              flexDirection: "column",
              bgcolor: "#f2f2f2",
            }}
          >
            {/* Castroviejo Micro Corneal Scissors Avatar */}
            <Avatar
              src={images.featured_products.castroviejo_micro_corneal_scissors}
              sx={{
                width: "340px",
                height: "340px",
                borderRadius: "20px",
                maxWidth: "100%",
              }}
            />
            <Box sx={{ p: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "14px",
                  lineHeight: "23px",
                  fontWeight: "bold",
                  py: 0.3,
                }}
              >
                Castroviejo Micro Corneal Scissors
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Chip
                  size="small"
                  label={
                    <Typography
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Scissors
                    </Typography>
                  }
                  sx={{
                    bgcolor: "#2a2e35",
                    color: "white",
                  }}
                />
                <Chip
                  size="small"
                  label={
                    <Typography
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {" "}
                      Eye-instruments
                    </Typography>
                  }
                  sx={{
                    bgcolor: "#2a2e35",
                    color: "white",
                  }}
                />
              </Stack>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
              >
                <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
                  Read More...
                </Button>
                <MuiRating />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Castroviejo Miniature Corneal Scissors Card  */}
          <Box
            sx={{
              width: "300px",
              height: "500px",
              borderRadius: "20px",
              boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
              py: 1,
              px: 1,
              display: "flex",
              flexDirection: "column",
              bgcolor: "#f2f2f2",
            }}
          >
            {/* Castroviejo Miniature Corneal Scissors Avatar  */}
            <Avatar
              src={
                images.featured_products.castroviejo_miniature_corneal_scissors
              }
              sx={{
                width: "340px",
                height: "340px",
                borderRadius: "20px",
                maxWidth: "100%",
              }}
            />
            <Box sx={{ p: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "14px",
                  lineHeight: "23px",
                  fontWeight: "bold",
                  py: 0.3,
                }}
              >
                Castroviejo Corneal Scissors
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Chip
                  size="small"
                  label={
                    <Typography
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Scissors
                    </Typography>
                  }
                  sx={{
                    bgcolor: "#2a2e35",
                    color: "white",
                  }}
                />
                <Chip
                  size="small"
                  label={
                    <Typography
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {" "}
                      Eye-instruments
                    </Typography>
                  }
                  sx={{
                    bgcolor: "#2a2e35",
                    color: "white",
                  }}
                />
              </Stack>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
              >
                <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
                  Read More...
                </Button>
                <MuiRating />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={3}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Corneal Scissors Card  */}
          <Box
            sx={{
              width: "300px",
              height: "500px",
              borderRadius: "20px",
              boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
              py: 1,
              px: 1,
              display: "flex",
              flexDirection: "column",
              bgcolor: "#f2f2f2",
            }}
          >
            <Avatar
              src={images.featured_products.corneal_scissors}
              sx={{
                width: "340px",
                height: "340px",
                borderRadius: "20px",
                maxWidth: "100%",
              }}
            />
            <Box sx={{ p: 1 }}>
              <Typography
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "14px",
                  lineHeight: "23px",
                  fontWeight: "bold",
                  py: 0.3,
                }}
              >
                Corneal Scissors
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Chip
                  size="small"
                  label={
                    <Typography
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Scissors
                    </Typography>
                  }
                  sx={{
                    bgcolor: "#2a2e35",
                    color: "white",
                  }}
                />
                <Chip
                  size="small"
                  label={
                    <Typography
                      sx={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {" "}
                      Eye-instruments
                    </Typography>
                  }
                  sx={{
                    bgcolor: "#2a2e35",
                    color: "white",
                  }}
                />
              </Stack>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
              >
                <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
                  Read More...
                </Button>
                <MuiRating />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Featuredproducts;
