import { motion } from "framer-motion"

const projects = [
  {
    title: "Chess-Based Steganography",
    tech: "HTML, CSS, JS, Flask",
  },
  {
    title: "Meme Sentiment Analysis",
    tech: "Python, OCR, Flask",
  },
  {
    title: "Offline Plagiarism Detection",
    tech: "HTML, CSS, JS",
  },
  {
    title: "Line Follower Robot",
    tech: "Arduino IDE",
  },
]

function Projects() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-pink-50 to-rose-100 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-rose-600">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-rose-200"
          >
            <h3 className="text-2xl font-bold text-rose-600 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-700">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
