import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Box } from "@mui/material";

const customStyle = {
  "& .MuiRating-iconFilled": {
    color: "#faaf00",
  },
  "& .MuiRating-iconHover": {
    color: "#ffd166",
  },
  "& .MuiRating-decimal:hover": {
    transform: "scale(1)",
  },
};

function MuiRating() {
  const [selectedValue, setSelectedValue] = React.useState(4.8);
  const [icon, setIcon] = React.useState(<SentimentVerySatisfiedIcon />);
  const [emptyIcon, setEmptyIcon] = React.useState(
    <SentimentVerySatisfiedIcon />
  );

  React.useEffect(() => {
    if (selectedValue <= 1) {
      setIcon(<SentimentVeryDissatisfiedIcon />);
      setEmptyIcon(<SentimentVeryDissatisfiedIcon />);
    } else if (selectedValue <= 2) {
      setIcon(<SentimentDissatisfiedIcon />);
      setEmptyIcon(<SentimentDissatisfiedIcon />);
    } else if (selectedValue <= 3) {
      setIcon(<SentimentSatisfiedIcon />);
      setEmptyIcon(<SentimentSatisfiedIcon />);
    } else if (selectedValue <= 3) {
      setIcon(<SentimentSatisfiedAltIcon />);
      setEmptyIcon(<SentimentSatisfiedAltIcon />);
    } else {
      setIcon(<SentimentVerySatisfiedIcon />);
      setEmptyIcon(<SentimentVerySatisfiedIcon />);
    }
  }, [selectedValue]);

  return (
    <Box sx={{ pt: 0.5 }}>
      <Rating
        sx={customStyle}
        //size="medium"
        defaultValue={selectedValue}
        precision={0.1}
        icon={icon}
        emptyIcon={emptyIcon}
        onChange={(event, value) => {
          setSelectedValue(value);
        }}
      />
    </Box>
  );
}
export default MuiRating;

// import * as React from "react";
// import Rating from "@mui/material/Rating";
// import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";

// const labels = {
//   0.5: "0.5",
//   1: "1.0",
//   1.5: "1.5",
//   2: "2.0",
//   2.5: "2.5",
//   3: "3.0",
//   3.5: "3.5",
//   4: "4.0",
//   4.5: "4.5",
//   5: "5.0",
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
// }

// const MuiRating = () => {
//   const [value, setValue] = React.useState(2);
//   const [hover, setHover] = React.useState(-1);
//   return (
//     <Box
//       sx={{
//         width: 200,
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={
//           <StarIcon
//             style={{ opacity: 0.55, }}
//             fontSize="inherit"
//           />
//         }
//       />
//       {value !== null && (
//         <Box
//           sx={{
//             ml: 1.5,
//             bgcolor: "#fef08a",
//             width: "40px",
//             py: 0.5,
//             borderRadius: "8px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontFamily: "'Manrope', sans-serif",
//             fontSize: "14px",
//             lineHeight: "23px",
//           }}
//         >
//           {labels[hover !== -1 ? hover : value]}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default MuiRating;
