import "./App.css";
import { Box } from "@mui/material";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import ApparelPage from "./pages/ApparelPage";
import SurgicalAboutPage from "./pages/SurgicalSection/SurgicalAboutPage";
import SurgicalContactPage from "./pages/SurgicalSection/SurgicalContactPage";
import SurgicalManufacturingPage from "./pages/SurgicalSection/SurgicalManufacturingPage";
import ApparelOrderPage from "./pages/ApparelSection/ApparelOrderPage";
import ApparelAboutPage from "./pages/ApparelSection/ApparelAboutPage";
import ApparelContactPage from "./pages/ApparelSection/ApparelContactPage";
import ApparelProductPage from "./pages/ApparelSection/ApparelProductPage";
import ApparelProductDetailPage from "./pages/ApparelSection/ApparelProductDetailPage";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apparel" element={<ApparelPage />} />
        {/* Apparel Section */}
        <Route path="/how-to-order" element={<ApparelOrderPage />} />
        <Route path="/about-us" element={<ApparelAboutPage />} />
        <Route path="/contact-us" element={<ApparelContactPage />} />
        <Route path="/product" element={<ApparelProductPage />} />
        <Route path="/product-detail" element={<ApparelProductDetailPage />} />
        {/* Surgical Section */}
        <Route path="/surgical/about-us" element={<SurgicalAboutPage />} />
        <Route path="/surgical/contact-us" element={<SurgicalContactPage />} />
        <Route
          path="/surgical/manufacturing-process"
          element={<SurgicalManufacturingPage />}
        />
      </Routes>
    </Box>
  );
}

export default App;
