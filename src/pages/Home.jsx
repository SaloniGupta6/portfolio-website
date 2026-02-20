import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";


import Skills from "../components/Skills"
import CounterSection from "../components/CounterSection"
import Timeline from "../components/Timeline"


function Home() {
  const roles = [
    "AI & ML Enthusiast",
    "Full Stack Developer",
    "Hackathon Winner 🏆",
    "Problem Solver",
  ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      setText(roles[index].slice(0, i))
      i++
      if (i > roles[index].length) {
        clearInterval(typing)
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length)
          setText("")
        }, 1200)
      }
    }, 90)

    return () => clearInterval(typing)
  }, [index])

  return (
    <div className="overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
<div className="min-h-screen flex items-center justify-center 
bg-gradient-to-br from-rose-50 via-pink-100 to-white 
relative overflow-hidden px-8">

  {/* Background Glow */}
  <div className="absolute w-[500px] h-[500px] bg-pink-300 
  rounded-full blur-[150px] opacity-30 -top-20 -left-20"></div>

  <div className="absolute w-[500px] h-[500px] bg-rose-200 
  rounded-full blur-[150px] opacity-30 -bottom-20 -right-20"></div>

  <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full relative">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl font-extrabold mb-6 leading-tight">
        Hi, I'm  
        <span className="block bg-gradient-to-r 
        from-pink-600 via-rose-500 to-red-500 
        bg-clip-text text-transparent">
          Saloni Gupta
        </span>
      </h1>

      <h2 className="text-2xl font-medium h-10 mb-6 text-rose-700">
        {text}
        <span className="animate-pulse text-pink-600">|</span>
      </h2>

      <p className="text-gray-700 mb-8 leading-relaxed max-w-lg">
        Passionate about Artificial Intelligence & Machine Learning,
        building intelligent systems and crafting immersive,
        future-ready digital experiences.
      </p>

      <div className="flex gap-6 flex-wrap">
        <motion.div whileHover={{ scale: 1.08 }}>
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r 
            from-pink-500 to-rose-500 
            text-white rounded-full font-semibold 
            shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            View Projects
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.08 }}>
          <Link
            to="/profile"
            className="px-8 py-3 border-2 border-rose-400 
            text-rose-700 rounded-full font-semibold 
            hover:bg-rose-100 transition-all duration-300"
          >
            Profile
          </Link>
        </motion.div>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative"
      >
        <div className="absolute inset-0 bg-pink-300 
        blur-3xl opacity-30 rounded-full"></div>

<img
  src={profileImg}
  alt="Saloni Gupta"
  className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white"
/>

      </motion.div>
    </motion.div>

  </div>
</div>


      {/* ================= SKILLS SECTION ================= */}
      <Skills />
      <CounterSection />
<Timeline />


    </div>
  )
}

export default Home
