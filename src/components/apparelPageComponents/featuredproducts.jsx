import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import images from "../../assets/images";
import ProductCard from "../shared/productCard";

const Featuredproducts = () => {
  const product_card_detail = [
    {
      id: 1,
      name: "Castroviejo Corneal Scissors",
      image: images.featured_products.castroviejo_corneal_scissors,
      categories: ["Scissors"],
    },
    {
      id: 2,
      name: "Castroviejo Micro Corneal Scissors",
      image: images.featured_products.castroviejo_micro_corneal_scissors,
      categories: ["Scissors"],
    },
    {
      id: 3,
      name: "Castroviejo Miniature Corneal Scissors",
      image: images.featured_products.castroviejo_miniature_corneal_scissors,
      categories: ["Choppers Hooker and Probes"],
    },
    {
      id: 4,
      name: "Castroviejo Scissors",
      image: images.featured_products.castroviejo_scissors,
      categories: ["Eye Instruments", "Scissors"],
    },
    {
      id: 5,
      name: "Corneal Scissors",
      image: images.featured_products.corneal_scissors,
      categories: ["Eye Instruments", "Specialist Instruments"],
    },
  ];
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: "26px",
          lineHeight: "31px",
          color: "#2a2e39",
          pb: 2,
        }}
      >
        Featured Products
      </Typography>
      <Grid container columnSpacing={1} rowSpacing={2}>
        {product_card_detail.map((card) => (
          <Grid
            item
            key={card.id}
            xl={2.4}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            px={{
              md: 1,
              sm: 3,
              sx: 3,
            }}
          >
            <ProductCard
              name={card.name}
              image={card.image}
              categories={card.categories}
              bgcolor="#f6f6f6"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Featuredproducts;

// import {
//   Avatar,
//   Box,
//   Button,
//   Chip,
//   Grid,
//   Stack,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import images from "../../assets/images";
// import MuiRating from "../shared/muiRating";

// const Featuredproducts = () => {
//   return (
//     <Box pb={5}>
//       {/* Feature Products Heading */}
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           pb: 4,
//         }}
//       >
//         <Typography
//           sx={{
//             fontFamily: "'Open Sans', sans-serif",
//             fontWeight: 700,
//             fontSize: "26px",
//             lineHeight: "31px",
//             color: "#2a2e39",
//           }}
//         >
//           Featured Products
//         </Typography>
//       </Box>
//       <Grid container rowSpacing={3}>
//         <Grid
//           item
//           lg={3}
//           md={6}
//           xs={12}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Castroviejo Corneal Scissors Card */}
//           <Box
//             sx={{
//               width: "300px",
//               height: "500px",
//               borderRadius: "20px",
//               boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
//               py: 1,
//               px: 1,
//               display: "flex",
//               flexDirection: "column",
//               bgcolor: "#f2f2f2",
//             }}
//           >
//             {/* Castroviejo Corneal Scissors Avatar */}
//             <Avatar
//               src={images.featured_products.castroviejo_corneal_scissors}
//               sx={{
//                 width: "340px",
//                 height: "340px",
//                 borderRadius: "20px",
//                 maxWidth: "100%",
//               }}
//             />
//             <Box sx={{ p: 1 }}>
//               <Typography
//                 sx={{
//                   fontFamily: "'Manrope', sans-serif",
//                   fontSize: "14px",
//                   lineHeight: "23px",
//                   fontWeight: "bold",
//                   py: 0.3,
//                 }}
//               >
//                 Castroviejo Corneal Scissors
//               </Typography>
//               <Stack direction="row" spacing={0.5}>
//                 <Chip
//                   size="small"
//                   label={
//                     <Typography
//                       sx={{
//                         fontFamily: "'Manrope', sans-serif",
//                         fontSize: "10px",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       Scissors
//                     </Typography>
//                   }
//                   sx={{
//                     bgcolor: "#2a2e35",
//                     color: "white",
//                   }}
//                 />
//                 <Chip
//                   size="small"
//                   label={
//                     <Typography
//                       sx={{
//                         fontFamily: "'Manrope', sans-serif",
//                         fontSize: "10px",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       {" "}
//                       Eye-instruments
//                     </Typography>
//                   }
//                   sx={{
//                     bgcolor: "#2a2e35",
//                     color: "white",
//                   }}
//                 />
//               </Stack>
//               <Box
//                 sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
//               >
//                 <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
//                   Read More...
//                 </Button>
//                 <MuiRating />
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           lg={3}
//           md={6}
//           xs={12}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Castroviejo Micro Corneal Scissors Card */}
//           <Box
//             sx={{
//               width: "300px",
//               height: "500px",
//               borderRadius: "20px",
//               boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
//               py: 1,
//               px: 1,
//               display: "flex",
//               flexDirection: "column",
//               bgcolor: "#f2f2f2",
//             }}
//           >
//             {/* Castroviejo Micro Corneal Scissors Avatar */}
//             <Avatar
//               src={images.featured_products.castroviejo_micro_corneal_scissors}
//               sx={{
//                 width: "340px",
//                 height: "340px",
//                 borderRadius: "20px",
//                 maxWidth: "100%",
//               }}
//             />
//             <Box sx={{ p: 1 }}>
//               <Typography
//                 sx={{
//                   fontFamily: "'Manrope', sans-serif",
//                   fontSize: "14px",
//                   lineHeight: "23px",
//                   fontWeight: "bold",
//                   py: 0.3,
//                 }}
//               >
//                 Castroviejo Micro Corneal Scissors
//               </Typography>
//               <Stack direction="row" spacing={0.5}>
//                 <Chip
//                   size="small"
//                   label={
//                     <Typography
//                       sx={{
//                         fontFamily: "'Manrope', sans-serif",
//                         fontSize: "10px",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       Scissors
//                     </Typography>
//                   }
//                   sx={{
//                     bgcolor: "#2a2e35",
//                     color: "white",
//                   }}
//                 />
//                 <Chip
//                   size="small"
//                   label={
//                     <Typography
//                       sx={{
//                         fontFamily: "'Manrope', sans-serif",
//                         fontSize: "10px",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       {" "}
//                       Eye-instruments
//                     </Typography>
//                   }
//                   sx={{
//                     bgcolor: "#2a2e35",
//                     color: "white",
//                   }}
//                 />
//               </Stack>
//               <Box
//                 sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
//               >
//                 <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
//                   Read More...
//                 </Button>
//                 <MuiRating />
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           lg={3}
//           md={6}
//           xs={12}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Castroviejo Miniature Corneal Scissors Card  */}
//           <Box
//             sx={{
//               width: "300px",
//               height: "500px",
//               borderRadius: "20px",
//               boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
//               py: 1,
//               px: 1,
//               display: "flex",
//               flexDirection: "column",
//               bgcolor: "#f2f2f2",
//             }}
//           >
//             {/* Castroviejo Miniature Corneal Scissors Avatar  */}
//             <Avatar
//               src={
//                 images.featured_products.castroviejo_miniature_corneal_scissors
//               }
//               sx={{
//                 width: "340px",
//                 height: "340px",
//                 borderRadius: "20px",
//                 maxWidth: "100%",
//               }}
//             />
//             <Box sx={{ p: 1 }}>
//               <Typography
//                 sx={{
//                   fontFamily: "'Manrope', sans-serif",
//                   fontSize: "14px",
//                   lineHeight: "23px",
//                   fontWeight: "bold",
//                   py: 0.3,
//                 }}
//               >
//                 Castroviejo Corneal Scissors
//               </Typography>
//               <Stack direction="row" spacing={0.5}>
//                 <Chip
//                   size="small"
//                   label={
//                     <Typography
//                       sx={{
//                         fontFamily: "'Manrope', sans-serif",
//                         fontSize: "10px",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       Scissors
//                     </Typography>
//                   }
//                   sx={{
//                     bgcolor: "#2a2e35",
//                     color: "white",
//                   }}
//                 />
//                 <Chip
//                   size="small"
//                   label={
//                     <Typography
//                       sx={{
//                         fontFamily: "'Manrope', sans-serif",
//                         fontSize: "10px",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       {" "}
//                       Eye-instruments
//                     </Typography>
//                   }
//                   sx={{
//                     bgcolor: "#2a2e35",
//                     color: "white",
//                   }}
//                 />
//               </Stack>
//               <Box
//                 sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
//               >
//                 <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
//                   Read More...
//                 </Button>
//                 <MuiRating />
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           lg={3}
//           md={6}
//           xs={12}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* Corneal Scissors Card  */}
//           <Box
//             sx={{
//               width: "300px",
//               height: "500px",
//               borderRadius: "20px",
//               boxShadow: "0px 6px 6px 8px rgba(0, 0, 0, 0.1)",
//               py: 1,
//               px: 1,
//               display: "flex",
//               flexDirection: "column",
//               bgcolor: "#f2f2f2",
//             }}
//           >
//             <Avatar
//               src={images.featured_products.corneal_scissors}
//               sx={{
//                 width: "340px",
//                 height: "340px",
//                 borderRadius: "20px",
//                 maxWidth: "100%",
//               }}
//             />
//             <Box sx={{ p: 1 }}>
//               <Typography
//                 sx={{
//                   fontFamily: "'Manrope', sans-serif",
//                   fontSize: "14px",
//                   lineHeight: "23px",
//                   fontWeight: "bold",
//                   py: 0.3,
//                 }}
//               >
//                 Corneal Scissors
//               </Typography>
//               <Stack direction="row" spacing={0.5}>
//                 <Chip
//                   size="small"
//                   label={
//                     <Typography
//                       sx={{
//                         fontFamily: "'Manrope', sans-serif",
//                         fontSize: "10px",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       Scissors
//                     </Typography>
//                   }
//                   sx={{
//                     bgcolor: "#2a2e35",
//                     color: "white",
//                   }}
//                 />
//                 <Chip
//                   size="small"
//                   label={
//                     <Typography
//                       sx={{
//                         fontFamily: "'Manrope', sans-serif",
//                         fontSize: "10px",
//                         letterSpacing: "0.5px",
//                       }}
//                     >
//                       {" "}
//                       Eye-instruments
//                     </Typography>
//                   }
//                   sx={{
//                     bgcolor: "#2a2e35",
//                     color: "white",
//                   }}
//                 />
//               </Stack>
//               <Box
//                 sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
//               >
//                 <Button disableRipple sx={{ color: "#2a2e39", p: 0 }}>
//                   Read More...
//                 </Button>
//                 <MuiRating />
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Featuredproducts;
