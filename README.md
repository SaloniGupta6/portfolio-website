# 🚀 Advanced React Portfolio Application

### Saloni Gupta – Redux Toolkit + Context + Performance Optimized React App

An **advanced multi-page React application** developed as part of academic experiments **EXP-4 and EXP-5 (Advanced Frontend Development)**.

The project demonstrates modern **React architecture, state management, performance optimization, and scalable UI design**.

---

# 🔥 Live Demo

🌐 https://saloni-gupta-23bai70642-fs-4.vercel.app

---

# 📚 Experiment Overview

## 🧪 EXP-4: Advanced React Application

Experiment-4 focuses on building a **scalable React application using Redux Toolkit and modern UI techniques**.

### 🎯 Objectives

* Implement **Redux Toolkit for global state management**
* Manage **asynchronous operations using createAsyncThunk**
* Implement **persistent application state**
* Build a **dynamic multi-page React application**
* Apply **responsive UI design**
* Implement **clean component architecture**

### 🧠 Features Implemented (EXP-4)

✅ Redux Toolkit state management
✅ Async data fetching using `createAsyncThunk`
✅ Project bookmarking system
✅ Category based project filtering
✅ Dark / Light Theme using Context API
✅ Responsive UI with Tailwind CSS
✅ Animated transitions using Framer Motion
✅ Persistent data using localStorage
✅ Modular folder architecture
✅ Multi-page routing using React Router

---

# 🧪 EXP-5: React Performance & Advanced State Management

Experiment-5 extends the EXP-4 application by introducing **advanced React performance and state management techniques**.

### 🎯 Objectives

* Implement **Redux Toolkit state architecture**
* Use **Context API for global app settings**
* Optimize rendering performance using **useMemo**
* Extend application with **new functional page**
* Maintain **consistent UI/UX across pages**

---

# 🧠 New Features Added (EXP-5)

### 1️⃣ Redux Toolkit Search System

A **global search feature** implemented using Redux.

Features:

* Search projects dynamically
* Shared search state across components
* Optimized UI updates

---

### 2️⃣ Reports Page (New Page)

A new **Reports page** was added to extend the application.

Features:

* Displays **analytics summary**
* Shows **total projects**
* Shows **bookmarked projects**
* Demonstrates **derived state computation**

---

### 3️⃣ useMemo Performance Optimization

`useMemo` is used to optimize derived calculations.

Examples:

* Total projects count
* Total bookmarked projects
* Filtered project lists

This ensures **recomputation happens only when dependencies change**.

---

### 4️⃣ Improved Redux Architecture

Additional Redux slice added:

* `searchSlice.js`

Updated store configuration.

---

### 5️⃣ Extended Multi-Page Architecture

New pages added while maintaining consistent UI:

* Home
* Profile
* Projects
* Experience
* Achievements
* Hackathons
* Reports ⭐ (EXP-5 Page)
* Contact

---

# 🛠️ Tech Stack

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| React.js         | Frontend Framework      |
| Vite             | Build Tool              |
| Redux Toolkit    | Global State Management |
| createAsyncThunk | Async Operations        |
| React Router DOM | Page Routing            |
| Tailwind CSS     | Styling                 |
| Framer Motion    | Animations              |
| React Icons      | UI Icons                |
| localStorage     | State Persistence       |

---

# 🧠 Advanced Concepts Implemented

### ✅ Redux Slice Architecture

Implemented modular Redux slices:

* `projectSlice.js`
* `searchSlice.js`

Includes:

* actions
* reducers
* async thunk
* selectors

---

### ✅ State Persistence

Bookmarked projects are saved in **localStorage** and automatically restored when the page reloads.

---

### ✅ Dynamic Project Filtering

Users can filter projects by category:

* Frontend
* Fullstack
* AI
* All

---

### ✅ Bookmark System

Users can:

* Add bookmarks
* Remove bookmarks
* Prevent duplicate entries

---

### ✅ Global Theme Context

Implemented using **React Context API**

Features:

* Dark / Light theme
* Persistent theme preference
* Global UI consistency

---

### ✅ Performance Optimization

Used **useMemo** to prevent unnecessary recalculations.

Optimized:

* project counts
* bookmark statistics
* derived state computations

---

# 📂 Project Structure

```
src
│
├── components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Profile.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Achievements.jsx
│   ├── Hackathons.jsx
│   ├── Reports.jsx
│   ├── Contact.jsx
│
├── store
│   ├── index.js
│   └── slices
│        ├── projectSlice.js
│        └── searchSlice.js
│
├── context
│   ├── ThemeContext.jsx
│   ├── LanguageContext.jsx
│
├── App.jsx
├── main.jsx
```

---

# ⚙️ Installation & Setup

### Clone Repository

```
git clone https://github.com/SaloniGupta6/portfolio-website.git
```

### Navigate to Project

```
cd portfolio-website
```

### Install Dependencies

```
npm install
```

### Run Development Server

```
npm run dev
```

### Build Production Version

```
npm run build
```

---

# 🚀 Deployment

The application is deployed using **Vercel**.

Deployment Steps:

1. Push project to GitHub
2. Import repository in Vercel
3. Click **Deploy**
4. Application goes live automatically

---

# 📸 Screenshots

Screenshots are available inside:

```
/screenshots
```

Includes:

* Projects Page
* Reports Page
* Bookmark System

---

# 🎯 Key Functionalities Demonstrated

✔ Multi-Page React Application
✔ Redux Toolkit State Management
✔ Async Data Handling
✔ Context API Global State
✔ useMemo Performance Optimization
✔ Dynamic UI Interaction
✔ Scalable Folder Structure
✔ Production Deployment

---

# 👩‍💻 Developed By

**Saloni Gupta**
B.Tech CSE (AI-ML)

Student ID: **23BAI70642**

📧 [gsaloni567@gmail.com](mailto:gsaloni567@gmail.com)

---

# ⭐ Academic Declaration

This project is developed as part of **Experiment-4 and Experiment-5 (Advanced React Application Development)** for academic submission and learning purposes.
