import React from "react";
import Header from "./Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Eduction";
import ResumeCTA from "./Components/Resume/ResumeCTA";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#ffffff",
            color: "#0f172a",
            fontSize: "14px",
            fontWeight: "500",
            padding: "12px 18px",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
          },
          success: {
            iconTheme: {
              primary: "#2563eb",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
          loading: {
            iconTheme: {
              primary: "#2563eb",
              secondary: "#ffffff",
            },
          },
        }}
      />
      
      {/* Sticky Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="grow">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}

export default App;
