
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import NoPage from "./pages/NoPage";
import { Routes, BrowserRouter, Route } from "react-router"
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
