import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav page={page} setPage={setPage} />
      <main className="flex-grow-1">
        {page === "home" && <Home setPage={setPage} />}
        {page === "about" && <About />}
        {page === "services" && <Services setPage={setPage} />}
        {page === "contact" && <Contact />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}