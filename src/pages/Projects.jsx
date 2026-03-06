import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProjects,
  addBookmark,
  removeBookmark,
  filterByCategory,
  selectAllProjects,
  selectBookmarks,
  selectLoading,
  selectError,
} from "../store/slices/projectSlice";

import { selectSearchQuery } from "../store/slices/searchSlice";

function Projects() {
  const dispatch = useDispatch();

  const projects = useSelector(selectAllProjects);
  const bookmarks = useSelector(selectBookmarks);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const searchQuery = useSelector(selectSearchQuery);

  /* =========================
     Fetch Projects
  ========================= */

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  /* =========================
     Bookmark Check
  ========================= */

  const isBookmarked = (id) =>
    bookmarks.some((project) => project.id === id);

  /* =========================
     Search + Filter (useMemo)
     EXP-5 Requirement
  ========================= */

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [projects, searchQuery]);

  /* =========================
     Analytics Counters
  ========================= */

  const totalProjects = useMemo(() => {
    return filteredProjects.length;
  }, [filteredProjects]);

  const totalBookmarks = useMemo(() => {
    return bookmarks.length;
  }, [bookmarks]);

  /* =========================
     Categories
  ========================= */

  const categories = ["All", "Frontend", "Fullstack", "AI"];

  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-white via-pink-50 to-rose-100 px-6">

      {/* ================= TITLE ================= */}

      <h2 className="text-4xl font-bold text-center mb-6 text-rose-600">
        My Projects
      </h2>

      <p className="text-center text-gray-600 mb-10">
        Total Projects: {totalProjects}
      </p>

      {/* ================= FILTER BUTTONS ================= */}

      <div className="flex justify-center flex-wrap gap-4 mb-14">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => dispatch(filterByCategory(category))}
            className="px-6 py-2 rounded-full bg-white shadow 
            border border-rose-200 
            hover:bg-rose-500 hover:text-white 
            transition duration-300"
          >
            {category}
          </button>
        ))}

      </div>

      {/* ================= LOADING ================= */}

      {loading && (
        <p className="text-center text-blue-500 font-medium">
          Loading projects...
        </p>
      )}

      {/* ================= ERROR ================= */}

      {error && (
        <p className="text-center text-red-500 font-medium">
          Error: {error}
        </p>
      )}

      {/* ================= PROJECT CARDS ================= */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {!loading &&
          filteredProjects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-3xl 
              shadow-xl border border-pink-200
              hover:shadow-rose-300"
            >

              <h3 className="text-xl font-bold text-rose-600 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <p className="text-xs text-gray-500 mb-6">
                Category: {project.category}
              </p>

              {/* Bookmark Button */}

              <button
                onClick={() =>
                  isBookmarked(project.id)
                    ? dispatch(removeBookmark(project.id))
                    : dispatch(addBookmark(project))
                }
                className={`px-5 py-2 rounded-full text-white text-sm transition ${
                  isBookmarked(project.id)
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {isBookmarked(project.id)
                  ? "Remove Bookmark"
                  : "Bookmark"}
              </button>

            </motion.div>

          ))}

      </div>

      {/* ================= BOOKMARK COUNTER ================= */}

      <div className="text-center mt-20 text-lg font-semibold text-indigo-600">

        ⭐ Bookmarked Projects: {totalBookmarks}

      </div>

    </div>
  );
}

export default Projects;
