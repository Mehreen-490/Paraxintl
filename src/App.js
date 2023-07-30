import { Box } from "@mui/material";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import ApparelPage from "./pages/ApparelPage";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apparel" element={<ApparelPage />} />
      </Routes>
    </Box>
  );
}

export default App;
