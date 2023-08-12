import { Box, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";
const ContactForm = () => {
  return (
    <Box
      sx={{
        width: "50%",
        py: 1,
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
          borderRadius: "0",
        }}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        sx={{
          border: "1px solid gray",
          fontFamily: "'Barlow Condensed', sans-serif",
          borderRadius: "0",
        }}
      />
      <TextField
        id="phone"
        label="Phone"
        variant="outlined"
        sx={{
          border: "1px solid gray",
          fontFamily: "'Barlow Condensed', sans-serif",
          borderRadius: "0",
        }}
      />
      <Textarea
        placeholder="Message…"
        minRows={2}
        sx={{
          bgcolor: "inherit",
          border: "1px solid gray",
          borderRadius: "0",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "45px",
        }}
      />
      <Button
        sx={{
          bgcolor: "black",
          color: "#686d73",
          py: 1.5,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "16px",
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
