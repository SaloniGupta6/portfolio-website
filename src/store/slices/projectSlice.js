import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* =========================================
   Async Thunk – Fetch Projects
========================================= */

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    // Simulated API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
      {
        id: 1,
        title: "Chess-Based Steganography",
        category: "Fullstack",
        description:
          "A novel approach of hiding text/image files into legal chess moves.",
        tech: "HTML, CSS, JS, Flask",
      },
      {
        id: 2,
        title: "Meme Sentiment Analysis",
        category: "AI",
        description:
          "A model which detects the emotional tone behind memes using OCR & NLP.",
        tech: "Python, OCR-Tesseract, Flask, HTML, CSS, JS",
      },
      {
        id: 3,
        title: "Offline Plagiarism Detection",
        category: "Frontend",
        description:
          "An offline software that detects plagiarism percentage in documents.",
        tech: "HTML, CSS, JS",
      },
      {
        id: 4,
        title: "Line Follower Robot",
        category: "AI",
        description:
          "Built a line follower robot that traces tracks using sensors.",
        tech: "Arduino IDE",
      },
      {
        id: 5,
        title: "Rental Estate Website",
        category: "Fullstack",
        description:
          "Full-stack rental property platform with filtering and dark mode.",
        tech: "React, Tailwind, Backend Integration",
      },
      {
        id: 6,
        title: "Resume Portfolio",
        category: "Frontend",
        description:
          "Multipage animated dynamic portfolio using React Router.",
        tech: "React, Tailwind, Framer Motion",
      },
      {
        id: 7,
        title: "Rental Estate Platform",
        category: "Fullstack",
        description: "Real-time property listing platform",
      },
      {
        id: 8,
        title: "FoodSaver App",
        category: "Fullstack",
        description: "Community food sharing system",
      },
      {
        id: 9,
        title: "SteelGuardian Mobile App",
        category: "AI",
        description: "Industrial monitoring mobile app",
      },

    ];
  }
);

/* =========================================
   Load Bookmarks From LocalStorage
========================================= */

const loadBookmarks = () => {
  try {
    const data = localStorage.getItem("bookmarks");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

/* =========================================
   Initial State
========================================= */

const initialState = {
  allProjects: [],
  filteredProjects: [],
  bookmarks: loadBookmarks(),
  selectedCategory: "All",
  loading: false,
  error: null,
};

/* =========================================
   Slice
========================================= */

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      const project = action.payload;
      const exists = state.bookmarks.find((p) => p.id === project.id);
      if (!exists) {
        state.bookmarks.push(project);
        
      }
    },

    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (p) => p.id !== action.payload
      );
      localStorage.setItem(
        "bookmarks",
        JSON.stringify(state.bookmarks)
      );
    },

    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;

      if (action.payload === "All") {
        state.filteredProjects = state.allProjects;
      } else {
        state.filteredProjects = state.allProjects.filter(
          (project) => project.category === action.payload
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.allProjects = action.payload;
        state.filteredProjects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

/* =========================================
   Export Actions
========================================= */

export const {
  addBookmark,
  removeBookmark,
  filterByCategory,
} = projectSlice.actions;

/* =========================================
   Selectors
========================================= */

export const selectAllProjects = (state) =>
  state.projects.filteredProjects;

export const selectBookmarks = (state) =>
  state.projects.bookmarks;

export const selectLoading = (state) =>
  state.projects.loading;

export const selectError = (state) =>
  state.projects.error;

export default projectSlice.reducer;