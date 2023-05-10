import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MobileApplication from "./sections/projects/mobileApplication";
import MeditaionApp from "./sections/projects/meditationApp";
import Dashboard from "./sections/dashboard";
import Layout from "./sections/layout";
import ScrollToTop from "./sections/scrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="mobile" element={<MobileApplication />} />
            <Route path="meditation" element={<MeditaionApp />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
