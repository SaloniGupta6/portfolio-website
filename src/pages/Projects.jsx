import { useEffect } from "react";
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

function Projects() {
  const dispatch = useDispatch();

  const projects = useSelector(selectAllProjects);
  const bookmarks = useSelector(selectBookmarks);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const isBookmarked = (id) =>
    bookmarks.some((project) => project.id === id);

  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-white to-rose-100 px-6">

      <h2 className="text-4xl font-bold text-center mb-10 text-rose-600">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {["All", "Frontend", "Fullstack", "AI"].map((category) => (
          <button
            key={category}
            onClick={() => dispatch(filterByCategory(category))}
            className="px-4 py-2 rounded-full bg-white shadow hover:bg-rose-500 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-blue-500 font-medium">
          Loading projects...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-red-500 font-medium">
          Error: {error}
        </p>
      )}

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {!loading &&
          projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-2xl border border-rose-200 hover:shadow-rose-300"
            >
              <h3 className="text-2xl font-bold text-rose-600 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-500 font-medium mb-6">
                Category: {project.category}
              </p>

              <button
                onClick={() =>
                  isBookmarked(project.id)
                    ? dispatch(removeBookmark(project.id))
                    : dispatch(addBookmark(project))
                }
                className={`px-5 py-2 rounded-full text-white transition ${
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

      {/* Bookmark Counter */}
      <div className="text-center mt-16 text-lg font-semibold text-indigo-600">
        Bookmarked Projects: {bookmarks.length}
      </div>
    </div>
  );
}

export default Projects;