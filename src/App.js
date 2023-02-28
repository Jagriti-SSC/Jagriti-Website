import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";
import ContactUsPage from "./pages/ContactUsPage";
import { useFirebase } from "./context/Firebase";
import { useState, useEffect } from "react";
import Preloader from "./components/preloader/Preloader";
import ScrollProgressbar from "./components/scrollIndicator/ScrollProgressbar";

const App = () => {
  const firebase = useFirebase();

  // Preloader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/events" element={<EventsPage />} />
          <Route exact path="/team" element={<TeamPage />} />
          <Route exact path="/contactUs" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
