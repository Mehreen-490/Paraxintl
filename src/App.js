import "./App.css";
import { Box } from "@mui/material";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import ApparelPage from "./pages/ApparelPage";
import OrderPage from "./pages/OrderPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/DesignProductPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ProductDetailPage from "./pages/ProductDetailPage";
const theme = createTheme();

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apparel" element={<ApparelPage />} />
          <Route path="/how-to-order" element={<OrderPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          // <Route path="/product" element={<ProductPage />} />
          <Route path="/product-detail" element={<ProductDetailPage />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default App;
