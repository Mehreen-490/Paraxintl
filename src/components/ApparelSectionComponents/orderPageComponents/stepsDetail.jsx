import { Box, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
function StepsDetail() {
  return (
    <Box
      sx={{
        width: "100%",
        pl: 24,
        pr: 30,
        py: 10,
        color: "#192d34",
        backgroundImage:
          "linear-gradient(to bottom, #52bffa, #bde7fd, #b5e4fd, #9cdafc)",
      }}
    >
      {/* Heading Typography */}
      <Typography
        sx={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "70px",
          lineHeight: "65px",
        }}
      >
        HOW TO ORDER
      </Typography>
      {/* Heading Desc */}
      <Typography
        sx={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 400,
          fontSize: "26px",
          lineHeight: "43px",
          letterSpacing: "0.6px",
          width: "90%",
          py: 3,
        }}
      >
        In order to begin production on your order, please follow the steps
        below and review our Terms and Conditions before placing an order. If
        you have any questions or concerns PLEASE EMAIL US at
        sales@paraxintl.com and one of our friendly and knowledgeable staff will
        be more than happy to assist you.
      </Typography>
      {/* Steps Heading */}
      <Typography
        sx={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 500,
          fontSize: "29px",
          lineHeight: "25px",
          fontStyle: "italic",
        }}
      >
        ORDERING STEPS:
      </Typography>
      {/* Step 1 */}
      <Box
        sx={{
          py: 4,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "25px",
            // pb: 2.5,
          }}
        >
          STEP 1:
        </Typography>
        {/* Sub Steps */}
        <Box sx={{ display: "flex" }}>
          <CircleIcon sx={{ width: "13px", height: "13px", mr: 1.7, mt: 4 }} />
          <Typography
            sx={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 400,
              fontSize: "26px",
              lineHeight: "43px",
              letterSpacing: "0.6px",
              width: "90%",
              py: 2,
            }}
          >
            Visit our website to choose the style of uniform and submit a
            REQUEST FOR A FREE GRAPHIC DESIGN online Or email us any design you
            like (include your team name, color, and logo with your email)
          </Typography>
        </Box>
      </Box>
      {/* Step 2 */}
      <Box
        sx={{
          py: 2,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "25px",
            pb: 2.5,
          }}
        >
          STEP 2:
        </Typography>
        {/* Sub Steps */}
        <Box>
          <Box sx={{ display: "flex" }}>
            <CircleIcon
              sx={{ width: "13px", height: "13px", mr: 1.7, mt: 2 }}
            />
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
              }}
            >
              After we receive your roster, your invoice will be created and
              emailed to you. Please review it and when you are ready to make
              the payment you can use the payment options located on your
              invoice to pay online or you can contact our customer service to
              pay via credit/debit card. We accept the payment options below:
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
              }}
            >
              {" "}
              1. Credit/Debit card (visa/master/American){" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
              }}
            >
              {" "}
              1. Credit/Debit card (visa/master/American){" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
              }}
            >
              2. Bank Wire Transfer{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
              }}
            >
              {" "}
              3. Money Gram{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
              }}
            >
              {" "}
              4. Western Union{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Step 3 */}
      <Box
        sx={{
          py: 4,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "25px",
            pb: 2.5,
          }}
        >
          STEP 3:
        </Typography>
        {/* Sub Steps */}
        <Box>
          <Box sx={{ display: "flex" }}>
            <CircleIcon
              sx={{ width: "13px", height: "13px", mr: 1.7, mt: 2 }}
            />
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
              }}
            >
              After we receive your payment, we will send your Order Detail
              within 24 hours or less. Please review it and reply to our email
              confirming that your ORDER DETAIL is correct or we need to make
              any changes. Once you confirm the Order details, we will start
              your order and any last changes may not be possible for us to do.
              Tracking number(s) for your order will be emailed to you once we
              ship out your order, or contact our customer support to check on
              the status of your order.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
                py: 1,
              }}
            >
              We also offer 100% OFF ON CUSTOM UNIFORM SAMPLE. If you order your
              own customized sample uniform, we will apply the 100% refund for
              the cost of the sample towards your next invoice, when you place
              the whole order. (7-10 day turnaround time for a rush order).
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
                py: 1,
              }}
            >
              ** For questions and information regarding our policy for returns,
              corrections, exchanges, graphics/designs, cancellations,
              credit/payment, check, processing/shipping time, uniform care
              instructions, and additional add-on orders, please refer to our
              FAQ’s and Terms and Conditions**
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
                py: 1,
              }}
            >
              Online Inquiry: Please visit our site or you can send your
              questions via email at sales@paraxintl.com (24 hours a day, 7 days
              a week)
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "43px",
                letterSpacing: "0.6px",
                width: "90%",
                py: 1,
              }}
            >
              {" "}
              Email Inquiry: sales@paraxintl.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StepsDetail;
// dark: #192d34
// light: #bde7fd
// fontFamily: "'Barlow Condensed', sans-serif",
