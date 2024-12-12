
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import NoPage from "./pages/NoPage";
import { Routes, BrowserRouter, Route } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
