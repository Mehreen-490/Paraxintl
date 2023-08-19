import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import images from "../../../assets/images";

const ContactInfo = () => {
  const sharedFontStyles = {
    fontFamily:
      "'Cantarell', 'Inter', 'Oxygen', 'Roboto', 'Ubuntu','Rubik Mono One','Titan One', sans-serif",
  };
  return (
    <Box sx={{ width: "100%", pl: 35, py: 18 }}>
      {/* Get In Touch Typography */}
      <Typography
        sx={{
          color: "#2a2e39",
          fontWeight: 900,
          fontSize: "36px",
          lineHeight: "20px",

          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
        style={sharedFontStyles}
      >
        Get in touch
      </Typography>
      {/* Fill Form Typography */}
      <Typography
        sx={{
          color: "#738298",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "20px",
          letterSpacing: "0.5px",
          pl: "3px",
          pt: 3,
          pb: 3.3,
        }}
      >
        Fill in the form to start a conversation{" "}
      </Typography>
      {/* Address Box */}
      <Box
        sx={{
          textAlign: "justify",
          display: "flex",
          width: "50%",
          alignItems: "center",
          pb: 3,
        }}
      >
        <Avatar
          src={images.contact_page.address}
          sx={{ borderRadius: 0, width: "23px", height: "23px", mr: 2 }}
        />
        <Typography
          sx={{
            color: "#738298",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "23px",
          }}
        >
          Daska Road, Pasrur Bypass, Pakki Kotli, Sialkot-51310, Pakistan
        </Typography>
      </Box>
      {/* Phone Box */}
      <Box sx={{ display: "flex", width: "40%", alignItems: "center", pb: 3 }}>
        <Avatar
          src={images.contact_page.phone}
          sx={{ borderRadius: 0, width: "23px", height: "23px", mr: 2 }}
        />
        <Typography
          sx={{
            color: "#738298",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "23px",
          }}
        >
          +92 300 6175621
        </Typography>
      </Box>
      {/* Mail Box */}
      <Box sx={{ display: "flex", width: "40%", alignItems: "center", pb: 3 }}>
        <Avatar
          src={images.contact_page.mail}
          sx={{ borderRadius: 0, width: "23px", height: "23px", mr: 2 }}
        />
        <Typography
          sx={{
            color: "#738298",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "23px",
          }}
        >
          sales@paraxintl.com
        </Typography>
      </Box>
      {/* Website Link Box */}
      <Box sx={{ display: "flex", width: "40%", alignItems: "center" }}>
        <Avatar
          src={images.contact_page.link}
          sx={{ borderRadius: 0, width: "20px", height: "20px", mr: 2 }}
        />
        <Typography
          sx={{
            color: "#738298",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "23px",
          }}
        >
          www.paraxintl.com
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactInfo;
// font-family: 'Cantarell', sans-serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Oxygen', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Rubik Mono One', sans-serif;
// font-family: 'Titan One', cursive;
// font-family: 'Ubuntu', sans-serif;
// {/* <Box sx={{ width: "50%", py: 5 }}>
//       {/* Address Box */}
//       <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
//         {/* Address PNG */}
//         <Box sx={{ pt: 3, pr: 2 }}>
//           <Avatar
//             src={images.dark_address}
//             sx={{ borderRadius: "0", width: "35px", height: "35px" }}
//           />
//         </Box>
//         {/* Address */}
//         <Box>
//           <Typography
//             sx={{
//               fontSize: "22px",
//               lineHeight: "34px",
//               fontWeight: "600",
//               fontFamily: "'Barlow Condensed', sans-serif",
//             }}
//           >
//             Address:
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "24px",
//               lineHeight: "34px",
//               fontWeight: "300",
//               fontFamily: "'Barlow Condensed', sans-serif",
//               pb: 2,
//               pt: 1,
//             }}
//           >
//             DASKA ROAD, PASRUR BYPASS, PAKKI KOTLI, SIALKOT-51310, PAKISTAN
//           </Typography>
//         </Box>
//       </Box>
//       {/* Divider */}
//       <Box
//         sx={{
//           height: "1px",
//           width: "83%",
//           bgcolor: "#192d34",
//           ml: 4,
//           mr: 15,
//           mt: 2,
//           mb: 3,
//         }}
//       ></Box>
//       {/* Phone Box */}
//       <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
//         {/* Phone PNG */}
//         <Box sx={{ pt: 3, pr: 2 }}>
//           <Avatar
//             src={images.dark_phone}
//             sx={{ borderRadius: "0", width: "33px", height: "33px" }}
//           />
//         </Box>
//         {/* Phone Number */}
//         <Box>
//           <Typography
//             sx={{
//               fontSize: "22px",
//               lineHeight: "34px",
//               fontWeight: "600",
//               fontFamily: "'Barlow Condensed', sans-serif",
//             }}
//           >
//             Phone:
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "24px",
//               lineHeight: "34px",
//               fontWeight: "300",
//               fontFamily: "'Barlow Condensed', sans-serif",
//               pb: 2,
//               pt: 1,
//             }}
//           >
//             +92 300 6175621
//           </Typography>
//         </Box>
//       </Box>
//       {/* Divider */}
//       <Box
//         sx={{
//           height: "1px",
//           width: "83%",
//           bgcolor: "#192d34",
//           ml: 4,
//           mr: 15,
//           mt: 2,
//           mb: 3,
//         }}
//       ></Box>
//       {/* Email Box */}
//       <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
//         {/* Email Png */}
//         <Box sx={{ pt: 3, pr: 2 }}>
//           <Avatar
//             src={images.dark_mail}
//             sx={{ borderRadius: "0", width: "33px", height: "33px" }}
//           />
//         </Box>
//         {/* Email Address */}
//         <Box>
//           <Typography
//             sx={{
//               fontSize: "22px",
//               lineHeight: "34px",
//               fontWeight: "600",
//               fontFamily: "'Barlow Condensed', sans-serif",
//             }}
//           >
//             Email:
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "24px",
//               lineHeight: "34px",
//               fontWeight: "300",
//               fontFamily: "'Barlow Condensed', sans-serif",
//               pb: 2,
//               pt: 1,
//             }}
//           >
//             sales@paraxintl.com
//           </Typography>
//         </Box>
//       </Box>
//       {/* Divider */}
//       <Box
//         sx={{
//           height: "1px",
//           width: "83%",
//           bgcolor: "#192d34",
//           ml: 4,
//           mr: 15,
//           mt: 2,
//           mb: 3,
//         }}
//       ></Box>
//       {/* Website Box */}
//       <Box sx={{ display: "flex", pl: 4, width: "85%" }}>
//         {/* Website Png */}
//         <Box sx={{ pt: 3, pr: 2 }}>
//           <Avatar
//             src={images.dark_mail}
//             sx={{ borderRadius: "0", width: "33px", height: "33px" }}
//           />
//         </Box>
//         {/* Website Address */}
//         <Box>
//           <Typography
//             sx={{
//               fontSize: "22px",
//               lineHeight: "34px",
//               fontWeight: "600",
//               fontFamily: "'Barlow Condensed', sans-serif",
//             }}
//           >
//             Website:
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "24px",
//               lineHeight: "34px",
//               fontWeight: "300",
//               fontFamily: "'Barlow Condensed', sans-serif",
//               pb: 2,
//               pt: 1,
//             }}
//           >
//             www.paraxintl.com
//           </Typography>
//         </Box>
//       </Box>
//     </Box> */}
// font-family: 'Cantarell', sans-serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Oxygen', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Ubuntu', sans-serif;
