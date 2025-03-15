import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home.tsx";


// Entry Point
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/x" element={<App />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
