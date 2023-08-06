import { Box } from "@mui/material";

const ContainerFluid = ({ children, style }) => {
  return (
    <Box
      sx={{
        padding: "10px 20px",
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

export default ContainerFluid;
