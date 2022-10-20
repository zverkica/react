import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./index.css";


function App() {
  return (
   <main className="text-yellow-200 bg-slate-800 body-font">
    <Navbar />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </main>
  );
}

export default App;
