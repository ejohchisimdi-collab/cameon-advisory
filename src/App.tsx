import { type FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Services from "./pages/Services";

import Contact  from "./pages/Contact";

const App: FC = () => (
  <BrowserRouter>
    <div style={{ background: "#0a0f1e", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;