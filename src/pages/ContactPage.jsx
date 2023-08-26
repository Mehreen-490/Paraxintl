import { Box, Grid } from "@mui/material";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ContactInfo from "../components/contactPageComponents/contactInfo";
import ContactForm from "../components/contactPageComponents/contactForm";
const ContactPage = () => {
  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <ContactInfo />
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <ContactForm />
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
};

export default ContactPage;
// {/* <Box
//         sx={{
//           width: "100%",
//           pl: {
//             xl: 24,
//             lg: 24,
//             md: 16,
//             sm: 2,
//             xs: 1,
//           },
//           pr: {
//             xl: 30,
//             lg: 24,
//             md: 16,
//             sm: 2,
//             xs: 1,
//           },
//           py: 6,
//           color: "#192d34",
//           backgroundImage:
//             "linear-gradient(to bottom, #52bffa, #bde7fd, #b5e4fd, #9cdafc)",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography
//           sx={{
//             fontFamily: "'Barlow Condensed', sans-serif",
//             fontWeight: "700",
//             fontSize: "50px",
//             lineHeight: "55px",
//             color: "#192d34",
//             pb: 3,
//             letterSpacing: "0.5px",
//           }}
//         >
//           GET IN TOUCH
//         </Typography>
//       </Box>
//       <Box p={4}>
//         <Grid
//           container
//           sx={{
//             bgcolor: "orange",
//             borderRadius: "20px 20px 20px 20px",
//           }}
//         >
//           <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
//             <ContactForm />
//           </Grid>
//           <Grid
//             sx={{
//               bgcolor: "#f1f1f1",
//               borderRadius: "20px 20px 20px 20px",
//             }}
//             item
//             xs={12}
//             sm={12}
//             md={12}
//             lg={6}
//             xl={6}
//           >
//             <ContactInfo />
//           </Grid>
//         </Grid>
//       </Box> */}
