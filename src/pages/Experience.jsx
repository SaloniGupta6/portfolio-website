import { motion } from "framer-motion"

const experiences = [
  {
    year: "2022-2023",
    title: "Junior Technician",
    org: "TEPL",
    desc: "Worked as a junior technician handling technical operations and maintenance tasks."
  },
  {
    year: "2024",
    title: "Course & Internship",
    org: "Teachnook",
    desc: "Completed technical training and internship in emerging technologies."
  },
  {
    year: "2024",
    title: "Volunteer",
    org: "InAmigos Foundation",
    desc: "Contributed to social initiatives and community engagement programs."
  },
  {
    year: "2024",
    title: "Volunteer",
    org: "Muskurahat Foundation",
    desc: "Actively participated in social impact and awareness programs."
  },
  {
    year: "2025",
    title: "Rental Estate Website Developer",
    org: "Personal Full Stack Project",
    desc: "Built a fully dynamic rental estate website using React, Tailwind, and backend integration."
  }
]

function Experience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-24 px-6">

      <h2 className="text-4xl font-bold text-center mb-16 text-rose-600">
        Professional Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-rose-200"
          >
            <h3 className="text-rose-600 font-bold text-lg">
              {exp.year} — {exp.title}
            </h3>
            <h4 className="text-gray-700 font-medium">{exp.org}</h4>
            <p className="text-gray-600 mt-3">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
