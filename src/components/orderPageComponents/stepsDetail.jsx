import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import images from "../../assets/images";
function StepsDetail() {
  const value = true;
  return (
    <Box>
      <Grid
        width="100%"
        container
        direction={{
          xs: "column-reverse",
          lg: "row",
        }}
      >
        <Box
          item={value.toString()}
          pl={{
            xl: 18,
            lg: 10,
            xs: 0,
          }}
          pt={{
            lg: 11,
            xs: 2,
          }}
          px={{
            md: 6,
            sm: 4,
            xs: 2,
          }}
          pb={6}
          sx={{
            position: {
              lg: "absolute",
              xs: "static",
            },
            width: {
              xl: "55%",
              lg: "60%",
              xs: "100%",
            },
            textAlign: {
              sm: "left",
              xs: "justify",
            },
          }}
        >
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
              boxShadow: "0 2px 2px 2px rgba(230, 230, 230, 0.7)",
              display: "flex",
              flexDirection: "column",
              py: 7,
              px: {
                lg: 6,
                sm: 4,
                xs: 2,
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: {
                  xs: "26px",
                  md: "30px",
                  lg: "30px",
                  xl: "36px",
                },
                lineHeight: "24px",
              }}
            >
              HOW TO ORDER
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif",
                color: "#2a2e39",
                fontWeight: 400,
                fontSize: {
                  md: "15px",
                  xs: "14px",
                },
                lineHeight: "24px",
                pt: 3,
                pb: 2,
              }}
            >
              In order to begin production on your order, please follow the
              steps below and review our Terms and Conditions. For questions,
              PLEASE EMAIL US at sales@paraxintl.com for friendly and
              knowledgeable assistance.
            </Typography>
            {/* Stepper */}
            <Box sx={{ display: "flex", py: 0.5, alignItems: "center" }}>
              {/* Design Icon */}
              <Box
                sx={{
                  width: {
                    md: "55px",
                    xs: "45px",
                  },
                  height: {
                    md: "55px",
                    xs: "45px",
                  },
                  bgcolor: "#2a2e39",
                  boxShadow: "2px 2px 2px 2px #cccccc",
                  borderRadius: {
                    md: "30px",
                    xs: "20px",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={images.how_to_order_page.design_select}
                  sx={{
                    width: {
                      md: "34px",
                      xs: "28px",
                    },
                    height: {
                      md: "34px",
                      xs: "28px",
                    },
                    borderRadius: "0",
                  }}
                />
              </Box>
              {/* Divider */}
              <Box
                sx={{ width: "40%", height: "1px", bgcolor: "#d3d6de" }}
              ></Box>
              {/* Invoice Icon */}
              <Box
                sx={{
                  width: {
                    md: "55px",
                    xs: "45px",
                  },
                  height: {
                    md: "55px",
                    xs: "45px",
                  },
                  bgcolor: "#2a2e39",
                  boxShadow: "2px 2px 2px 2px #cccccc",
                  borderRadius: {
                    md: "30px",
                    xs: "20px",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={images.how_to_order_page.invoice}
                  sx={{
                    width: {
                      md: "34px",
                      xs: "28px",
                    },
                    height: {
                      md: "34px",
                      xs: "28px",
                    },
                    borderRadius: "0",
                  }}
                />
              </Box>
              {/* Divider */}
              <Box
                sx={{ width: "40%", height: "1px", bgcolor: "#d3d6de" }}
              ></Box>
              {/* Order Confirm Icon */}
              <Box
                sx={{
                  width: {
                    md: "55px",
                    xs: "45px",
                  },
                  height: {
                    md: "55px",
                    xs: "45px",
                  },
                  bgcolor: "#2a2e39",
                  boxShadow: "2px 2px 2px 2px #cccccc",
                  borderRadius: {
                    md: "30px",
                    xs: "20px",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={images.how_to_order_page.order_confirm}
                  sx={{
                    width: {
                      md: "34px",
                      xs: "28px",
                    },
                    height: {
                      md: "34px",
                      xs: "28px",
                    },
                    borderRadius: "0",
                  }}
                />
              </Box>
            </Box>
            {/* Step 1 */}
            <Typography
              sx={{
                color: "#2a2e39",
                fontWeight: 400,
                fontSize: {
                  md: "15px",
                  xs: "14px",
                },
                lineHeight: "24px",
                py: 4,
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <b> STEP 1:</b> <br />
              <CircleIcon
                sx={{ width: "9px", height: "9px", mr: "2px", mb: "1px" }}
              />{" "}
              Visit our website to choose the style of uniform and submit a
              REQUEST FOR A FREE GRAPHIC DESIGN online Or email us any design
              you like (include your team name, color, and logo with your email)
              Explore our site to select uniform styles. Request free graphic
              design online. Email your preferred design with team details.
              <br />
              <CircleIcon
                sx={{ width: "9px", height: "9px", mr: "2px", mb: "1px" }}
              />
              Design team sends free mock-up within 24 hrs. Approve final
              mock-up, share roster (player info, sizes, numbers, names).
              Include your details and shipping address when replying.
            </Typography>
            {/* Step 2 */}
            <Typography
              sx={{
                color: "#2a2e39",
                fontWeight: 400,
                fontSize: {
                  md: "15px",
                  xs: "14px",
                },
                lineHeight: "24px",
                py: 1,
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <b> STEP 2:</b> <br />
              <CircleIcon
                sx={{ width: "9px", height: "9px", mr: "2px", mb: "1px" }}
              />{" "}
              Upon receiving your roster, we'll generate and email an invoice
              for your review. When prepared, utilize online payment methods or
              contact customer service to pay via credit/debit card. Payment
              options are provided as:
              <br />
              1. Credit/Debit card (visa/master/American) <br /> 2. Bank Wire
              Transfer <br /> 3. Money Gram <br /> 4. Western Union
            </Typography>
            {/* Step 3 */}
            <Typography
              sx={{
                color: "#2a2e39",
                fontWeight: 400,
                fontSize: {
                  md: "15px",
                  xs: "14px",
                },
                lineHeight: "24px",
                py: 1,
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <b> STEP 3:</b> <br />
              <CircleIcon
                sx={{ width: "9px", height: "9px", mr: "2px", mb: "1px" }}
              />{" "}
              After payment, Order Details sent within 24hrs. Review and confirm
              accuracy. Changes post-confirmation not guaranteed. Tracking
              emailed upon shipment.
              <br />
              Get 100% OFF custom uniform sample. Cost credited to next invoice
              for full order. Rush orders in 7-10 days. <br /> ** For info on
              returns, exchanges, shipping, payment, and more, visit our FAQ's
              and Terms & Conditions** <br /> Online Inquiry: Please visit our
              site or you can send your questions via email at
              sales@paraxintl.com (24 hours a day, 7 days a week) <br /> Email
              Inquiry: sales@paraxintl.com
            </Typography>
          </Box>
        </Box>
        {/* Spacing Grid Item */}
        <Grid item lg={6} xs={12} md={12}></Grid>
        {/* Shirt Image Grid Item */}
        <Grid
          item
          lg={6}
          xs={12}
          py={6}
          pr={{
            xl: 12,
            lg: 1,
            md: 0,
          }}
          px={{
            lg: 0,
            md: 6,
            sm: 4,
            xs: 2,
          }}
        >
          <Box
            sx={{
              display: {
                lg: "block",
                xs: "flex",
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              src={images.how_to_order_page.how_to_order}
              sx={{
                borderRadius: "20px",
                width: {
                  lg: "95%",
                  xs: "100%",
                },
                height: {
                  xl: "1175px",
                  lg: "1230px",
                  xs: "500px",
                },
                backgroundSize: "100% 100%",
                backgroundImage: `url(${images.how_to_order_page.how_to_order})`,
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StepsDetail;
// dark: #192d34
// light: #bde7fd
