import AboutPage from "./pages/About-Page/AboutPage";
import Home from "./pages/Home";
import HowWeDoIt from "./pages/HowWeDoIt";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutPage />} />
        {/* <Route path="/how-we-do-it" element={<HowWeDoIt />} /> */}
      </Routes>
    </div>
  );
}

export default App;
