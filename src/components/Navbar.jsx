import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  /* =============================
     Navigation Items
  ============================== */

  const navItems = [
    {
      name: language === "en" ? "Home" : "होम",
      path: "/",
    },
    {
      name: language === "en" ? "Profile" : "प्रोफ़ाइल",
      path: "/profile",
    },
    {
      name: language === "en" ? "Projects" : "प्रोजेक्ट्स",
      path: "/projects",
    },
    {
      name: language === "en" ? "Experience" : "अनुभव",
      path: "/experience",
    },
    {
      name: language === "en" ? "Achievements" : "उपलब्धियाँ",
      path: "/achievements",
    },
    {
      name: language === "en" ? "Hackathons" : "हैकाथॉन",
      path: "/hackathons",
    },
    {
      name: language === "en" ? "Reports" : "रिपोर्ट्स",   // ⭐ EXP-5 PAGE
      path: "/reports",
    },
    {
      name: language === "en" ? "Contact" : "संपर्क",
      path: "/contact",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap justify-between items-center px-10 py-4
      bg-white/70 backdrop-blur-xl
      sticky top-0 z-50
      border-b border-pink-200 shadow-md"
    >
      {/* ================= LOGO ================= */}

      <h1
        className="text-2xl font-bold tracking-wide
        bg-gradient-to-r from-pink-500 via-rose-400 to-red-400
        bg-clip-text text-transparent"
      >
        Saloni Gupta
      </h1>

      {/* ================= NAV LINKS ================= */}

      <div className="flex flex-wrap gap-8 font-medium text-gray-700">

        {navItems.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `relative group transition duration-300 ${
                isActive ? "text-pink-600" : "text-gray-700"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {item.name}

                {/* Animated underline */}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px]
                  bg-gradient-to-r from-pink-400 to-rose-400
                  transition-all duration-300
                  ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </>
            )}

          </NavLink>

        ))}

      </div>

      {/* ================= RIGHT CONTROLS ================= */}

      <div className="flex items-center gap-4 mt-2">

        {/* Language Toggle */}

        <button
          onClick={toggleLanguage}
          className="px-3 py-1 text-sm rounded-lg
          bg-gradient-to-r from-blue-500 to-indigo-500
          text-white shadow hover:scale-105 transition"
        >
          {language === "en" ? "हिंदी" : "EN"}
        </button>

        {/* Theme Toggle */}

        <button
          onClick={toggleTheme}
          className="px-3 py-1 text-sm rounded-lg
          bg-gradient-to-r from-gray-700 to-black
          text-white shadow hover:scale-105 transition"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>

      </div>
    </motion.nav>
  );
}

export default Navbar;
