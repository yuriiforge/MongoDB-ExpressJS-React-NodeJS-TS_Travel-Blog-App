# 🧳 Travel Diaries App

A full-stack travel diaries application built with **React**, **TypeScript**, **Material-UI (MUI)**, **Redux Toolkit**, and **TanStack Query**.  
Users can **sign up, log in, add, update, and delete travel diaries**, as well as view diaries created by others.

---

## ✨ Features

- 🔐 **Authentication**

  - Signup & login with form validation
  - Redux Toolkit for auth state management
  - Persisted user sessions with localStorage

- 📖 **Travel Diaries**

  - Create, edit, and delete personal diary entries
  - View travel posts from other users

- ⚡ **API Integration**

  - Axios for HTTP requests
  - TanStack Query for fetching & caching posts

- 🎨 **UI/UX**
  - Modern responsive design with Material-UI
  - Reusable components (e.g. `DiaryItem`, `Layout`, `Profile`)
  - Theming and styled components

2. Install dependencies

```bash
npm install
```

3. Setup environment variables

Create a .env file in the root:
VITE_API_URL=http://localhost:5000

4. Run the app

```bash
npm run dev
```
