import { motion } from "framer-motion"

const achievements = [
  "Certification in Artificial Intelligence - Cognizance’24 IIT Roorkee",
  "Quiz Under GreEco at TechInvent 2024",
  "1st Position - National Level Hackathon BIT Mesra",
  "1st Runner Up - Treasure Hunt",
  "Recognised by IEEE Student Branch Counsellor",
  "Virtual Volunteer Internship - InAmigos Foundation"
]

function Achievements() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-pink-50 to-rose-100 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-rose-600">
        Academic Achievements & Awards
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-rose-200"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
