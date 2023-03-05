import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import DigitalPhotography from "./pages/digitalPhotography/digitalPhotography";
import FilmPhotography from "./pages/filmPhotography/filmPhotography";
import Inspiration from "./pages/inspiration/inspiration";
import NoPage from "./pages/nopage/nopage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="About" element={<About />} />
        <Route path="DigitalPhotography" element={<DigitalPhotography />} />
        <Route path="FilmPhotography" element={<FilmPhotography />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Inspiration" element={<Inspiration />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
