import { useMemo } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import {
  selectAllProjects,
  selectBookmarks,
} from "../store/slices/projectSlice";

function Reports() {

  const projects = useSelector(selectAllProjects);
  const bookmarks = useSelector(selectBookmarks);

  /* =============================
     useMemo Calculations
     (Exp-5 requirement)
  ============================== */

  const stats = useMemo(() => {

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

    <div className="min-h-screen bg-gradient-to-br from-white to-pink-100 py-24 px-6">

      <h1 className="text-4xl font-bold text-center text-rose-600 mb-14">
        Project Analytics Dashboard
      </h1>


      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* TOTAL PROJECTS */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-10 rounded-3xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-indigo-600">
            {stats.total}
          </h2>

          <p className="text-gray-600 mt-2">
            Total Projects
          </p>
        </motion.div>


        {/* BOOKMARKS */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-10 rounded-3xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-rose-600">
            {stats.bookmarks}
          </h2>

          <p className="text-gray-600 mt-2">
            Bookmarked Projects
          </p>
        </motion.div>


        {/* AI PROJECTS */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-10 rounded-3xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-purple-600">
            {stats.ai}
          </h2>

          <p className="text-gray-600 mt-2">
            AI Projects
          </p>
        </motion.div>


        {/* FULLSTACK */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-10 rounded-3xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-green-600">
            {stats.fullstack}
          </h2>

          <p className="text-gray-600 mt-2">
            Fullstack Projects
          </p>
        </motion.div>


        {/* FRONTEND */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-10 rounded-3xl shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-orange-600">
            {stats.frontend}
          </h2>

          <p className="text-gray-600 mt-2">
            Frontend Projects
          </p>
        </motion.div>

      </div>

    </div>
  )
}

export default Reports
