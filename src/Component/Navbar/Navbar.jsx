import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-5 md:px-8 pt-6">

      {/* Animated glow behind navbar */}
      <div className="navbar-glow navbar-glow-one"></div>
      <div className="navbar-glow navbar-glow-two"></div>

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-5
          md:px-7
          py-4
          rounded-2xl
          bg-black/45
          backdrop-blur-xl
          border
          border-white/10
          shadow-[0_0_40px_rgba(0,110,255,0.10)]
          overflow-hidden
        "
      >

        {/* LOGO */}
<button
  onClick={() => scrollToSection("home")}
  className="
    relative
    z-10
    flex
    items-center
    gap-4
    group
    shrink-0
    mr-auto
  "
>

  {/* Blue glowing dot */}
  <span
    className="
      w-5
      h-5
      rounded-full
      bg-[#1683ff]
      shadow-[0_0_12px_rgba(22,131,255,0.65)]
      group-hover:scale-125
      group-hover:shadow-[0_0_22px_rgba(22,131,255,0.9)]
      transition-all
      duration-300
    "
  ></span>

  {/* Name */}
  <span
    className="
      text-[#dcdcdc]
      font-bold
      tracking-[0.28em]
      text-[20px]
      md:text-[22px]
      group-hover:text-white
      transition-colors
      duration-500
    "
  >
    RATNPRIYA
  </span>

</button>


        {/* DESKTOP NAVIGATION */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-7
            relative
            z-10
          "
        >

          {navItems.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                relative
                py-3
                text-[18px]
                font-medium
                text-gray-300
                hover:text-white
                transition-all
                duration-500
                group
              "
            >

              {item.name}

              {/* Animated underline */}
              <span
                className="
                  absolute
                  left-0
                  bottom-0
                  w-0
                  h-[2px]
                  bg-blue-500
                  shadow-[0_0_10px_#1683ff]
                  group-hover:w-full
                  transition-all
                  duration-300
                "
              ></span>

            </button>

          ))}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            relative
            z-10
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-white
            hover:text-blue-400
            hover:border-blue-500/50
            transition-all
            duration-300
          "
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* MOBILE NAVIGATION */}
      <div
        className={`
          lg:hidden
          max-w-7xl
          mx-auto
          mt-2
          rounded-2xl
          bg-[#05070d]/95
          backdrop-blur-xl
          border
          border-white/10
          overflow-hidden
          transition-all
          duration-500
          ${
            menuOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >

        <div className="p-4 flex flex-col gap-2">

          {navItems.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                text-left
                px-4
                py-3
                rounded-xl
                text-gray-300
                hover:text-blue-400
                hover:bg-blue-500/10
                border
                border-transparent
                hover:border-blue-500/20
                transition-all
                duration-300
              "
            >

              <span className="text-blue-500 mr-3">
                /
              </span>

              {item.name}

            </button>

          ))}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;