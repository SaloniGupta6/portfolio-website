import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-rose-100 dark:bg-gray-900 py-8 border-t border-rose-200 dark:border-gray-700 transition-colors duration-300">
      
      <div className="text-center space-y-4">
        
        <h3 className="text-rose-600 dark:text-pink-400 font-semibold">
          © {new Date().getFullYear()} Saloni Gupta | Built with React & Tailwind
        </h3>

        <div className="flex justify-center gap-6 text-2xl">
          
          {/* GitHub */}
          <a
            href="https://github.com/SaloniGupta6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saloni-gupta-868597249/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition"
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="mailto:gsaloni567@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer