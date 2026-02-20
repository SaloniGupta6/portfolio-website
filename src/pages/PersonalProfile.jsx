import { motion } from "framer-motion"

const technicalSkills = ["C++", "Java", "Python", "SQL", "R"]
const interpersonalSkills = [
  "Team Leadership",
  "Management & Coordination",
  "Decision Making",
  "Active Listening"
]

const hobbies = ["Writing", "Blogging", "Painting", "Travelling", "Reading"]
const languages = ["English", "Hindi"]

function PersonalProfile() {
  return (
    <div className="min-h-screen py-24 px-6 bg-gradient-to-br from-pink-50 to-rose-100">

      <div className="max-w-5xl mx-auto space-y-16">

        {/* CAREER OBJECTIVE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-rose-200"
        >
          <h2 className="text-3xl font-bold text-rose-600 mb-6">
            Career Objective
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate about Artificial Intelligence and Machine Learning,
            aiming to apply theoretical knowledge to practical challenges
            and build future-ready, intelligent digital solutions that
            create real-world impact.
          </p>
        </motion.div>

        {/* TECHNICAL SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-rose-200"
        >
          <h2 className="text-3xl font-bold text-rose-600 mb-6">
            Technical Competencies
          </h2>

          <div className="flex flex-wrap gap-4">
            {technicalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-gradient-to-r from-pink-500 to-rose-500 
                text-white rounded-full shadow-md hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* INTERPERSONAL SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-rose-200"
        >
          <h2 className="text-3xl font-bold text-rose-600 mb-6">
            Interpersonal Skills
          </h2>

          <ul className="grid md:grid-cols-2 gap-4">
            {interpersonalSkills.map((skill, index) => (
              <li key={index} className="bg-rose-50 p-4 rounded-xl shadow-sm">
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* STRENGTH & WEAKNESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-rose-200"
        >
          <h2 className="text-3xl font-bold text-rose-600 mb-6">
            Strength & Weakness
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-rose-600 font-semibold mb-2">Strengths</h3>
              <p className="text-gray-700">
                Strong problem-solving ability, quick learner, adaptable
                to new technologies, and capable of leading teams effectively.
              </p>
            </div>

            <div>
              <h3 className="text-rose-600 font-semibold mb-2">Weakness</h3>
              <p className="text-gray-700">
                Tendency to be detail-oriented which sometimes leads to
                spending extra time perfecting tasks — actively working
                on improving time management.
              </p>
            </div>
          </div>
        </motion.div>

        {/* HOBBIES & LANGUAGES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-rose-200"
        >
          <h2 className="text-3xl font-bold text-rose-600 mb-6">
            Interests & Languages
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-rose-600 mb-4">Hobbies</h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((item, index) => (
                  <span key={index} className="bg-rose-100 px-4 py-2 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-rose-600 mb-4">Languages Known</h3>
              <div className="flex gap-4">
                {languages.map((lang, index) => (
                  <span key={index} className="bg-pink-100 px-4 py-2 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default PersonalProfile
