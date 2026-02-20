import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";

/* =========================
   Load State From Storage
========================= */

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch {
    return undefined;
  }
};

/* =========================
   Save State To Storage
========================= */

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      projects: {
        ...state.projects,
        // Only persist bookmarks
        allProjects: [],
        filteredProjects: [],
        loading: false,
        error: null,
      },
    });
    localStorage.setItem("reduxState", serializedState);
  } catch {
    // Ignore write errors
  }
};

/* =========================
   Configure Store
========================= */

export const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
  preloadedState: loadState(),
});

/* =========================
   Subscribe to Store
========================= */

store.subscribe(() => {
  saveState(store.getState());
});