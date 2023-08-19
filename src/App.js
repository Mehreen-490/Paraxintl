import "./App.css";
import { Box } from "@mui/material";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import ApparelPage from "./pages/ApparelSection/ApparelPage";
import ApparelOrderPage from "./pages/ApparelSection/ApparelOrderPage";
import ApparelAboutPage from "./pages/ApparelSection/ApparelAboutPage";
import ApparelContactPage from "./pages/ApparelSection/ApparelContactPage";
import ApparelProductPage from "./pages/ApparelSection/ApparelProductPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ApparelProductDetailPage from "./pages/ApparelSection/ApparelProductDetailPage";
const theme = createTheme();

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apparel" element={<ApparelPage />} />
          {/* Apparel Section */}
          <Route path="/how-to-order" element={<ApparelOrderPage />} />
          <Route path="/about-us" element={<ApparelAboutPage />} />
          <Route path="/contact-us" element={<ApparelContactPage />} />
          <Route path="/product" element={<ApparelProductPage />} />
          <Route
            path="/product-detail"
            element={<ApparelProductDetailPage />}
          />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
