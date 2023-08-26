import { Box, Button, TextField, Typography } from "@mui/material";
// import { TextareaAutosize } from "@mui/base";
const ContactForm = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: {
          md: 21,
          xs: 5,
        },
        display: "flex",
        flexDirection: "column",
      }}
      pr={{
        xl: 45,
        lg: 25,
        md: 13,
        sm: 8,
        xs: 5,
      }}
      pl={{
        md: 5,
        sm: 5,
        xs: 2,
      }}
    >
      <TextField
        placeholder="Full Name"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "1px solid #d3d8de",
              borderRadius: 2,
              width: "100%",
            },
            "& input": {
              color: "#738298",
            },
            input: { color: "#738298", fontWeight: 600, fontSize: "16px" },
          },
          my: 1,
        }}
        inputProps={{
          style: {
            height: "20px",
          },
        }}
      />
      <TextField
        placeholder="Email"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "1px solid #d3d8de",
              borderRadius: 2,
              width: "100%",
            },
            "& input": {
              color: "#738298",
            },
            input: { color: "#738298", fontWeight: 600, fontSize: "16px" },
          },
          my: 1,
        }}
        inputProps={{
          style: {
            height: "20px",
          },
        }}
      />
      <TextField
        placeholder="Phone"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              border: "1px solid #d3d8de",
              borderRadius: 2,
              width: "100%",
            },
            "& input": {
              color: "#738298",
            },
            input: { color: "#738298", fontWeight: 600, fontSize: "16px" },
          },
          my: 1,
        }}
        inputProps={{
          style: {
            height: "20px",
          },
        }}
      />
      {/* <TextareaAutosize
        minRows={4}
        placeholder="Message"
        sx={{ width: "50%" }}
      /> */}
      <Button
        variant="contained"
        sx={{
          width: "130px",
          height: "50px",
          borderRadius: "10px",
          bgcolor: "#2a2e39",
          mt: 1,
          ml: "2px",
          "&:hover": {
            bgcolor: "#414758",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            textTransform: "none",
            letterSpacing: "1px",
          }}
        >
          Submit
        </Typography>
      </Button>
    </Box>
  );
};

export default ContactForm;
// dark: #192d34
// light: #bde7fd
//  fontFamily: "'Barlow Condensed', sans-serif",
// <Box
//   sx={{
//     width: "50%",
//     py: 5,
//     px: 5,
//     borderRadius: "0",
//     "& > :not(style)": {
//       m: 1,
//       width: "80%",
//     },
//   }}
//   component="form"
//   noValidate
//   autoComplete="off"
// >
//   <TextField
//     id="name"
//     label="Name"
//     variant="outlined"
//     sx={{
//       border: "1px solid gray",
//       fontFamily: "'Barlow Condensed', sans-serif",
//     }}
//   />
//   <TextField
//     id="email"
//     label="Email"
//     variant="outlined"
//     sx={{
//       border: "1px solid gray",
//       fontFamily: "'Barlow Condensed', sans-serif",
//     }}
//   />
//   <TextField
//     id="phone"
//     label="Phone"
//     variant="outlined"
//     sx={{
//       border: "1px solid gray",
//       fontFamily: "'Barlow Condensed', sans-serif",
//     }}
//   />
//   <Textarea
//     placeholder="Message…"
//     minRows={5}
//     sx={{
//       bgcolor: "inherit",
//       border: "1px solid gray",
//       borderRadius: "0",
//       fontFamily: "'Barlow Condensed', sans-serif",
//       fontWeight: 400,
//       fontSize: "23px",
//       lineHeight: "25px",
//     }}
//   />
//   <Button
//     sx={{
//       bgcolor: "#192d34",
//       color: "#bde7fd",
//       py: 2,
//       fontFamily: "'Barlow Condensed', sans-serif",
//       fontWeight: 500,
//       fontSize: "25px",
//       lineHeight: "25px",
//     }}
//   >
//     Submit
//   </Button>
// </Box>
//  {/* <TextField
//         placeholder="Name"
//         variant="outlined"
//         sx={{
//           py: 1,
//           fontFamily: "Roboto, sans-serif",
//           width: "50%",
//           fontWeight: 600,
//           "& input": {
//             color: "#738298",
//           },
//           "& .MuiInputBase-root": {
//             height: 46,
//             border: "2px solid #738298",
//             borderRadius: "10px",
//           },
//           "& .MuiOutlinedInput-root": {
//             "&.Mui-focused fieldset": {
//               border: "2px solid #738298",
//               borderRadius: "10px",
//             },
//           },
//         }}
//       /> */}
