import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import ReachUsModal from "./components/ReachUsModal";
import { useState } from "react";


function App() {
  const [showReachUsModal, setShowReachUsModal] = useState(false);
  return (
    <>
      <Navbar onReachUsClick={() => setShowReachUsModal(true)} />
      {showReachUsModal && (
        <ReachUsModal onClose={() => setShowReachUsModal(false)} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
