import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage";
import PlansPage from "./pages/PlansPage";
import PlanDetailsPage from "./pages/PlanDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import HowItWorksPage from "./pages/HowItWorksPage";

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <Navbar />
      <main style={{ paddingTop: "var(--nav-h)" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/plans/:planId" element={<PlanDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;