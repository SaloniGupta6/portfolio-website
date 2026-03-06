import { useMemo } from "react"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

import {
  selectAllProjects,
  selectBookmarks,
} from "../store/slices/projectSlice"

function Reports() {

  const projects = useSelector(selectAllProjects)
  const bookmarks = useSelector(selectBookmarks)

  /* =============================
     useMemo Analytics Calculation
  ============================= */

  const analytics = useMemo(() => {

    const ai = projects.filter(p => p.category === "AI").length
    const fullstack = projects.filter(p => p.category === "Fullstack").length
    const frontend = projects.filter(p => p.category === "Frontend").length

    return {
      total: projects.length,
      bookmarks: bookmarks.length,
      ai,
      fullstack,
      frontend
    }

  }, [projects, bookmarks])


  return (
    <div className="min-h-screen py-24 px-6 
    bg-gradient-to-br from-pink-50 via-white to-rose-100">

      {/* Title */}

      <h1 className="text-4xl font-bold text-center 
      text-rose-600 mb-16">

        Project Analytics Dashboard

      </h1>



      {/* ======================
          Stats Cards
      ====================== */}

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-20">

        <StatCard
          title="Total Projects"
          value={analytics.total}
          color="from-blue-400 to-indigo-500"
        />

        <StatCard
          title="Bookmarked"
          value={analytics.bookmarks}
          color="from-pink-400 to-rose-500"
        />

        <StatCard
          title="AI Projects"
          value={analytics.ai}
          color="from-purple-400 to-fuchsia-500"
        />

        <StatCard
          title="Fullstack"
          value={analytics.fullstack}
          color="from-green-400 to-emerald-500"
        />

      </div>



      {/* ======================
          Category Breakdown
      ====================== */}

      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl font-bold text-center 
        text-gray-700 mb-10">

          Category Distribution

        </h2>

        <div className="space-y-6">

          <ProgressBar
            label="AI Projects"
            value={analytics.ai}
            total={analytics.total}
            color="bg-purple-500"
          />

          <ProgressBar
            label="Fullstack Projects"
            value={analytics.fullstack}
            total={analytics.total}
            color="bg-green-500"
          />

          <ProgressBar
            label="Frontend Projects"
            value={analytics.frontend}
            total={analytics.total}
            color="bg-blue-500"
          />

        </div>

      </div>

    </div>
  )
}

export default Reports



/* =================================
   Animated Stats Card
================================= */

function StatCard({ title, value, color }) {

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-8 rounded-2xl text-white shadow-xl
      bg-gradient-to-r ${color}`}
    >

      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-4xl font-bold">
        {value}
      </p>

    </motion.div>
  )
}



/* =================================
   Progress Bar
================================= */

function ProgressBar({ label, value, total, color }) {

  const percent = total === 0 ? 0 : (value / total) * 100

  return (
    <div>

      <div className="flex justify-between mb-2">

        <span className="font-medium text-gray-700">
          {label}
        </span>

        <span className="text-gray-600">
          {value}
        </span>

      </div>

      <div className="w-full bg-gray-200 h-3 rounded-full">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1 }}
          className={`h-3 rounded-full ${color}`}
        />

      </div>

    </div>
  )
}
