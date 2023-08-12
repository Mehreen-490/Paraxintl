import { Box, TextField } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";
const ContactForm = () => {
  return (
    <Box
      sx={{
        width: "100%",
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
          fontSize: "20px",
          lineHeight: "25px",
        }}
      />
      <Button
        sx={{
          bgcolor: "#192d34",
          color: "#bde7fd",
          py: 1,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "25px",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
// dark: #192d34
// light: #bde7fd
//  fontFamily: "'Barlow Condensed', sans-serif",
