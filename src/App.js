import "./App.css";
import Header from "./components/Header";
import Registration from "./components/Registration/Registration";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Resources from "./pages/Resources";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import UseReducer from "./components/UseReducer";
import CompOne from "./components/UseContext/CompOne";
function App() {
  return (
    <div>
      {/* <Registration /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="resources" element={<Resources />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </Router>

      {/* <UseReducer />
      {/* <CompOne /> */}
    </div>
  );
}

export default App;
