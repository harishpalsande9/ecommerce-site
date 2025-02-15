import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import MainNavBar from "./components/MainNavBar";
import MainFooter from "./components/MainFooter";

function App() {
  return (
    <BrowserRouter>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <MainFooter/>
    </BrowserRouter>
  );
}

export default App;
