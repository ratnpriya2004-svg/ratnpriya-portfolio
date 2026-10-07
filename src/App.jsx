import "./App.css";

import Navbar from "./Component/Navbar/Navbar.jsx";
import Cursor from "./Component/Cursor/Cursor.jsx";
import Hero from "./Component/Hero/Hero.jsx";
import About from "./Component/About/About.jsx";
import Skills from "./Component/Skills/Skills.jsx";
import Projects from "./Component/Projects/Projects.jsx";
import Experience from "./Component/Experience/Experience.jsx";
import Contact from "./Component/Contact/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#02040a] text-white">

      <Navbar />
      <Cursor />

      <main>

        {/* HOME */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skills />


        {/* PROJECTS */}
        <Projects />

        {/* EXPERIENCE */}
        <Experience />

        {/* CONTACT */}
        <Contact />

      </main>

    </div>
  );
}

export default App;