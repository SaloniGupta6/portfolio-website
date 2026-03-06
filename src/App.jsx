import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Layout from "./components/Layout"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import PersonalProfile from "./pages/PersonalProfile"
import Achievements from "./pages/Achievements";
import Hackathons from "./pages/Hackathons";
import Reports from "./pages/Reports"


function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/profile" element={<PersonalProfile />} />
          <Route path="/achievements" element={<Achievements />} />
          
<Route path="/hackathons" element={<Hackathons />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reports" element={<Reports />} />

        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App
