import { motion } from "framer-motion"

const skills = [
  { name: "Python", level: 90 },
  { name: "C++", level: 85 },
  { name: "Java", level: 80 },
  { name: "SQL", level: 75 },
  { name: "Machine Learning", level: 88 },
  { name: "Flask", level: 82 },
  { name: "HTML / CSS / JS", level: 92 },
]

function Skills() {
  return (
    <div className="py-24 px-6 bg-gradient-to-br from-white via-pink-50 to-rose-100">
      
      <div className="max-w-4xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 
          bg-gradient-to-r from-rose-600 to-pink-500 
          bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        {/* Skill Bars */}
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>
              
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">
                  {skill.name}
                </span>
                <span className="text-rose-600 font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-pink-100 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                  className="h-4 rounded-full 
                  bg-gradient-to-r from-pink-500 to-rose-500 
                  shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills
