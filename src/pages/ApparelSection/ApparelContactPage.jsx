import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ContactForm from "../../components/contactPageComponents.jsx/contactForm";
import ContactInfo from "../../components/contactPageComponents.jsx/contactInfo";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
const ContactPage = () => {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          pl: {
            xl: 24,
            lg: 24,
            md: 16,
            sm: 2,
            xs: 1,
          },
          pr: {
            xl: 30,
            lg: 24,
            md: 16,
            sm: 2,
            xs: 1,
          },
          py: 6,
          color: "#192d34",
          backgroundImage:
            "linear-gradient(to bottom, #52bffa, #bde7fd, #b5e4fd, #9cdafc)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: "700",
            fontSize: "50px",
            lineHeight: "55px",
            color: "#192d34",
            pb: 3,
            letterSpacing: "0.5px",
          }}
        >
          GET IN TOUCH
        </Typography>
      </Box>
      <Box p={4}>
        <Grid
          container
          sx={{
            bgcolor: "orange",
            borderRadius: "20px 20px 20px 20px",
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <ContactForm />
          </Grid>
          <Grid
            sx={{
              bgcolor: "#f1f1f1",
              borderRadius: "20px 20px 20px 20px",
            }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <ContactInfo />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
};

export default ContactPage;

// import { Box, Typography } from "@mui/material";
// import React from "react";
// import Navbar from "../../components/navbar";
// import Footer from "../../components/footer";
// import ContactInfo from "../../components/contactPageComponents.jsx/contactInfo";
// import ContactForm from "../../components/contactPageComponents.jsx/contactForm";

// const ApparelContactPage = () => {
//   return (
//     <Box>
//       <Navbar />
//       <Box
//         sx={{
//           width: "100%",
//           pl: 24,
//           pr: 30,
//           py: 10,
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
//             fontSize: "65px",
//             lineHeight: "55px",
//             color: "#192d34",
//             pb: 3,
//             letterSpacing: "1px",
//           }}
//         >
//           GET IN TOUCH
//         </Typography>
//         <Box sx={{ width: "100%", display: "flex" }}>
//           <ContactForm />
//           <ContactInfo />
//         </Box>
//       </Box>

//       <Footer />
//     </Box>
//   );
// };

// export default ApparelContactPage;
