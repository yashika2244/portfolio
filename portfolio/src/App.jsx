import React from "react";
import Header from "./Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Eduction from "./Components/Education/Eduction";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import { Toaster } from "react-hot-toast";
// import Layout from './Layout/Layout'
import "./App.css";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#f9fafb", // light text
            fontSize: "14px",
            padding: "12px 16px",
            borderRadius: "12px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
          },
          success: {
            iconTheme: {
              primary: "#22c55e", // green icon
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // red icon
              secondary: "#fff",
            },
          },
          loading: {
            iconTheme: {
              primary: "#3b82f6", // blue spinner
              secondary: "#fff",
            },
          },
        }}
      />
      <Header />
      <Home />
      <About />
      <Eduction />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
