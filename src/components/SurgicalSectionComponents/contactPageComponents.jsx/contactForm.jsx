import { Box, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";
const ContactForm = () => {
  return (
    <Box
      sx={{
        width: "50%",
        py: 5,
        px: 5,
        borderRadius: "0",
        "& > :not(style)": {
          m: 1,
          width: "80%",
        },
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        sx={{
          border: "1px solid gray",
          fontFamily: "'Barlow Condensed', sans-serif",
        }}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        sx={{
          border: "1px solid gray",
          fontFamily: "'Barlow Condensed', sans-serif",
        }}
      />
      <TextField
        id="phone"
        label="Phone"
        variant="outlined"
        sx={{
          border: "1px solid gray",
          fontFamily: "'Barlow Condensed', sans-serif",
        }}
      />
      <Textarea
        placeholder="Message…"
        minRows={5}
        sx={{
          bgcolor: "inherit",
          border: "1px solid gray",
          borderRadius: "0",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 400,
          fontSize: "23px",
          lineHeight: "25px",
        }}
      />
      <Button
        sx={{
          bgcolor: "black",
          color: "#686d73",
          py: 2,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 500,
          fontSize: "25px",
          lineHeight: "25px",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
// gray: #686d73
// black: #000000
// fontFamily: "'Barlow Condensed', sans-serif",
// font-family: 'Roboto', sans-serif;
