import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Menu from "./routes/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ display: "flex", flexFlow: "column", height: "100vh" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
