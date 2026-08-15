import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Customer from "./pages/Customer";
import SignIn from "./pages/SignIn";
import GetStarted from "./pages/GetStarted";
import Management from "./pages/Management";
import Animation from "./pages/Animation";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Story from "./pages/Story";

function SiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/stories/maxbuy" element={<Story image="icon/maxbuy.png" />} />
          <Route path="/stories/toya" element={<Story image="icon/toya.png" />} />
          <Route path="/stories/iken" element={<Story image="icon/iken.png" />} />
          <Route path="/stories/spectrum" element={<Story image="icon/spectrum.png" />} />
        </Route>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/management" element={<Management />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
    </BrowserRouter>
  );
}
