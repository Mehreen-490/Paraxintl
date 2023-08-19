import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import images from "../../assets/images";
function StepsDetail() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${images.how_to_order_page.bg})`,
        backgroundSize: "90% 90%",
        width: "100%",
        height: "1450px",
        overflow: "hidden",
        objectFit: "contain",
        backgroundRepeat: "no-repeat",
        fontFamily: "'Manrope', sans-serif",
        mt: 1,
      }}
    >
      <Box
        sx={{
          width: "750px",
          height: "1200px",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
          boxShadow: "0 2px 2px 2px rgba(230, 230, 230, 0.7)", // Add a subtle shadow
          display: "flex",
          flexDirection: "column",
          mt: 5,
          ml: 15,
          py: 6,
          px: 5,
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
              lg: "20px",
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
            fontSize: "16px",
            lineHeight: "24px",
            pt: 3,
            pb: 2,
          }}
        >
          In order to begin production on your order, please follow the steps
          below and review our Terms and Conditions. For questions, PLEASE EMAIL
          US at sales@paraxintl.com for friendly and knowledgeable assistance.
        </Typography>
        {/* Stepper */}
        <Box sx={{ display: "flex", px: 1, py: 0.5, alignItems: "center" }}>
          {/* Design Icon */}
          <Box
            sx={{
              width: "55px",
              height: "55px",
              bgcolor: "#2a2e39",
              boxShadow: "2px 2px 2px 2px #cccccc",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={images.how_to_order_page.design_select}
              sx={{ width: "34px", height: "34px", borderRadius: "0" }}
            />
          </Box>
          {/* Divider */}
          <Box sx={{ width: "220px", height: "1px", bgcolor: "#d3d6de" }}></Box>
          {/* Invoice Icon */}
          <Box
            sx={{
              width: "55px",
              height: "55px",
              bgcolor: "#2a2e39",
              boxShadow: "2px 2px 2px 2px #cccccc",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={images.how_to_order_page.invoice}
              sx={{ width: "34px", height: "34px", borderRadius: "0" }}
            />
          </Box>
          {/* Divider */}
          <Box sx={{ width: "220px", height: "1px", bgcolor: "#d3d6de" }}></Box>
          {/* Order Confirm Icon */}
          <Box
            sx={{
              width: "55px",
              height: "55px",
              bgcolor: "#2a2e39",
              boxShadow: "2px 2px 2px 2px #cccccc",
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={images.how_to_order_page.order_confirm}
              sx={{ width: "34px", height: "34px", borderRadius: "0" }}
            />
          </Box>
        </Box>
        {/* Step 1 */}
        <Typography
          sx={{
            color: "#2a2e39",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            py: 4,
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          <b> STEP 1:</b> <br />
          <CircleIcon
            sx={{ width: "9px", height: "9px", mr: "2px", mb: "1px" }}
          />{" "}
          Visit our website to choose the style of uniform and submit a REQUEST
          FOR A FREE GRAPHIC DESIGN online Or email us any design you like
          (include your team name, color, and logo with your email)
          <br />
          <CircleIcon
            sx={{ width: "9px", height: "9px", mr: "2px", mb: "1px" }}
          />
          Our design team will email your free mock-up within 24 hours. Once you
          approve the final mock-up and you are ready to order, email us your
          roster with the info (Player uniform sizes, numbers, name (if
          applicable) When replying to the email please also includes the
          following information: Your name and shipping address, need by date.
        </Typography>
        {/* Step 2 */}
        <Typography
          sx={{
            color: "#2a2e39",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            py: 1,
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          <b> STEP 2:</b> <br />
          <CircleIcon
            sx={{ width: "9px", height: "9px", mr: "2px", mb: "1px" }}
          />{" "}
          After we receive your roster, your invoice will be created and emailed
          to you. Please review it and when you are ready to make the payment
          you can use the payment options located on your invoice to pay online
          or you can contact our customer service to pay via credit/debit card.
          We accept the payment options below:
          <br />
          1. Credit/Debit card (visa/master/American) <br /> 2. Bank Wire
          Transfer <br /> 3. Money Gram <br /> 4. Western Union
        </Typography>
        {/* Step 3 */}
        <Typography
          sx={{
            color: "#2a2e39",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            py: 1,
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          <b> STEP 3:</b> <br />
          <CircleIcon
            sx={{ width: "9px", height: "9px", mr: "2px", mb: "1px" }}
          />{" "}
          After we receive your payment, we will send your Order Detail within
          24 hours or less. Please review it and reply to our email confirming
          that your ORDER DETAIL is correct or we need to make any changes. Once
          you confirm the Order details, we will start your order and any last
          changes may not be possible for us to do. Tracking number(s) for your
          order will be emailed to you once we ship out your order, or contact
          our customer support to check on the status of your order.
          <br />
          We also offer 100% OFF ON CUSTOM UNIFORM SAMPLE. If you order your own
          customized sample uniform, we will apply the 100% refund for the cost
          of the sample towards your next invoice, when you place the whole
          order. (7-10 day turnaround time for a rush order). <br /> ** For
          questions and information regarding our policy for returns,
          corrections, exchanges, graphics/designs, cancellations,
          credit/payment, check, processing/shipping time, uniform care
          instructions, and additional add-on orders, please refer to our FAQ’s
          and Terms and Conditions** <br /> Online Inquiry: Please visit our
          site or you can send your questions via email at sales@paraxintl.com
          (24 hours a day, 7 days a week) <br /> Email Inquiry:
          sales@paraxintl.com
        </Typography>
      </Box>
    </Box>
  );
}

export default StepsDetail;
// dark: #192d34
// light: #bde7fd
// fontFamily: "'Barlow Condensed', sans-serif",

// <Box
// sx={{
//   width: "500px",
//   height: "500px",
//   background: "rgba(255, 255, 255, 0.4)", // Adjust opacity as needed
//   backdropFilter: "blur(10px)", // Adjust blur value as needed
//   borderRadius: "10px",
//   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.7)", // Add a subtle shadow
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   mx: 3,
// }}
//     >
//       {/* Content */}
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum totam,
//         rerum voluptatibus tenetur consequatur magni perferendis quas, esse
//         nihil laborum maiores delectus omnis corrupti quam maxime placeat
//         nostrum! Praesentium, ipsam!
//       </p>
//     </Box>

// {/* <Box
// sx={{
//   width: "100%",
//   pl: {
//     xl: 24,
//     lg: 4,
//     md: 4,
//     sm: 3,
//     xs: 2,
//   },
//   pr: {
//     xl: 30,
//     lg: 4,
//     md: 3,
//     sm: 1,
//     xs: 0,
//   },
//   py: 10,
//   color: "#192d34",
//   backgroundImage:
//     "linear-gradient(to bottom, #52bffa, #bde7fd, #b5e4fd, #9cdafc)",
//   textAlign: "justify",
// }}
// >
// {/* <Box
//   sx={{
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     flexWrap: "wrap",
//     px: {
//       sm: 0,
//       xs: 7,
//     },
//     bgcolor: "red",
//   }}
// >

// </Box> */}
// {/* Heading Typography */}
// <Typography
//   sx={{
//     fontFamily: "'Barlow Condensed', sans-serif",
//     fontWeight: 700,
//     fontSize: "55px",
//     lineHeight: "55px",
//   }}
// >
//   HOW TO ORDER
// </Typography>

// {/* Heading Desc */}
// <Typography
//   sx={{
//     fontFamily: "'Barlow Condensed', sans-serif",
//     fontWeight: 400,
//     fontSize: "24px",
//     lineHeight: "43px",
//     letterSpacing: "0.6px",
//     width: "90%",
//     py: 3,
//   }}
// >
//   In order to begin production on your order, please follow the steps
//   below and review our Terms and Conditions before placing an order. If
//   you have any questions or concerns PLEASE EMAIL US at
//   sales@paraxintl.com and one of our friendly and knowledgeable staff will
//   be more than happy to assist you.
// </Typography>
// {/* Steps Heading */}
// <Typography
//   sx={{
//     fontFamily: "'Barlow Condensed', sans-serif",
//     fontWeight: 500,
//     fontSize: "25px",
//     lineHeight: "25px",
//     fontStyle: "italic",
//   }}
// >
//   ORDERING STEPS:
// </Typography>
// {/* Step 1 */}
// <Box
//   sx={{
//     py: 4,
//   }}
// >
//   {/* Heading */}
//   <Typography
//     sx={{
//       fontFamily: "'Barlow Condensed', sans-serif",
//       fontWeight: 700,
//       fontSize: "25px",
//       lineHeight: "25px",
//     }}
//   >
//     STEP 1:
//   </Typography>
//   {/* Sub Steps */}
//   <Box sx={{ display: "flex" }}>
//     <CircleIcon sx={{ width: "13px", height: "13px", mr: 1.7, mt: 4 }} />
//     <Typography
//       sx={{
//         fontFamily: "'Barlow Condensed', sans-serif",
//         fontWeight: 400,
//         fontSize: "24px",
//         lineHeight: "43px",
//         letterSpacing: "0.6px",
//         width: "90%",
//         py: 2,
//       }}
//     >
//       Visit our website to choose the style of uniform and submit a
//       REQUEST FOR A FREE GRAPHIC DESIGN online Or email us any design you
//       like (include your team name, color, and logo with your email)
//     </Typography>
//   </Box>
// </Box>
// {/* Step 2 */}
// <Box
//   sx={{
//     py: 2,
//   }}
// >
//   {/* Heading */}
//   <Typography
//     sx={{
//       fontFamily: "'Barlow Condensed', sans-serif",
//       fontWeight: 700,
//       fontSize: "25px",
//       lineHeight: "25px",
//       pb: 2.5,
//     }}
//   >
//     STEP 2:
//   </Typography>
//   {/* Sub Steps */}
//   <Box>
//     <Box sx={{ display: "flex" }}>
//       <CircleIcon
//         sx={{ width: "13px", height: "13px", mr: 1.7, mt: 2 }}
//       />
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//         }}
//       >
//         After we receive your roster, your invoice will be created and
//         emailed to you. Please review it and when you are ready to make
//         the payment you can use the payment options located on your
//         invoice to pay online or you can contact our customer service to
//         pay via credit/debit card. We accept the payment options below:
//       </Typography>
//     </Box>
//     <Box sx={{ display: "flex", flexDirection: "column" }}>
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//         }}
//       >
//         {" "}
//         1. Credit/Debit card
//       </Typography>
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//         }}
//       >
//         2. Bank Wire Transfer{" "}
//       </Typography>
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//         }}
//       >
//         {" "}
//         3. Money Gram{" "}
//       </Typography>
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//         }}
//       >
//         {" "}
//         4. Western Union{" "}
//       </Typography>
//     </Box>
//   </Box>
// </Box>
// {/* Step 3 */}
// <Box
//   sx={{
//     py: 4,
//   }}
// >
//   {/* Heading */}
//   <Typography
//     sx={{
//       fontFamily: "'Barlow Condensed', sans-serif",
//       fontWeight: 700,
//       fontSize: "25px",
//       lineHeight: "25px",
//       pb: 2.5,
//     }}
//   >
//     STEP 3:
//   </Typography>
//   {/* Sub Steps */}
//   <Box>
//     <Box sx={{ display: "flex" }}>
//       <CircleIcon
//         sx={{ width: "13px", height: "13px", mr: 1.7, mt: 2 }}
//       />
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//         }}
//       >
//         After we receive your payment, we will send your Order Detail
//         within 24 hours or less. Please review it and reply to our email
//         confirming that your ORDER DETAIL is correct or we need to make
//         any changes. Once you confirm the Order details, we will start
//         your order and any last changes may not be possible for us to do.
//         Tracking number(s) for your order will be emailed to you once we
//         ship out your order, or contact our customer support to check on
//         the status of your order.
//       </Typography>
//     </Box>
//     <Box sx={{ display: "flex", flexDirection: "column" }}>
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//           py: 1,
//         }}
//       >
//         We also offer 100% OFF ON CUSTOM UNIFORM SAMPLE. If you order your
//         own customized sample uniform, we will apply the 100% refund for
//         the cost of the sample towards your next invoice, when you place
//         the whole order. (7-10 day turnaround time for a rush order).
//       </Typography>
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//           py: 1,
//         }}
//       >
//         ** For questions and information regarding our policy for returns,
//         corrections, exchanges, graphics/designs, cancellations,
//         credit/payment, check, processing/shipping time, uniform care
//         instructions, and additional add-on orders, please refer to our
//         FAQ’s and Terms and Conditions**
//       </Typography>
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//           py: 1,
//         }}
//       >
//         Online Inquiry: Please visit our site or you can send your
//         questions via email at sales@paraxintl.com (24 hours a day, 7 days
//         a week)
//       </Typography>
//       <Typography
//         sx={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 400,
//           fontSize: "24px",
//           lineHeight: "43px",
//           letterSpacing: {
//             lg: "0.6px",
//             md: "0.4px",
//             sm: "0.3px",
//             xs: "0.1px",
//           },
//           width: "90%",
//           py: 1,
//         }}
//       >
//         {" "}
//         Email Inquiry: sales@paraxintl.com
//       </Typography>
//     </Box>
//   </Box>
// </Box>
// </Box> */}
