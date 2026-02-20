import { motion } from "framer-motion"

const stats = [
  { label: "Hackathons Participated", value: 20 },
  { label: "National Wins", value: 5 },
  { label: "Projects Built", value: 18 },
  { label: "Certifications", value: 15 },
]

function CounterSection() {
  return (
    <div className="py-24 bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/60"
          >
            <motion.h3
              initial={{ count: 0 }}
              whileInView={{ count: stat.value }}
              transition={{ duration: 2 }}
              className="text-4xl font-bold text-rose-600"
            >
              {stat.value}+
            </motion.h3>
            <p className="mt-3 text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CounterSection
