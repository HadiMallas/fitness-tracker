# HealthTrack - Fitness & Wellness Platform

HealthTrack is a comprehensive fitness and wellness tracking application designed to help users monitor their exercise, diet, and personal goals. This project is built with a modern Full-Stack architecture, featuring a high-fidelity React frontend and a robust Node.js/MySQL backend.

## 🚀 Phase 1: Frontend Architecture

The frontend is built using **React 19** and **Vite**, styled with **Tailwind CSS** using a custom "Glassmorphism" design system.

### Key Features
- **Modern UI/UX**: Dark mode aesthetic with vibrant gradients and glass-morphism effects.
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices.
- **Client-Side Routing**: Seamless navigation using React Router v6.
- **Component Architecture**: Modular, reusable components (Navbar, ServiceCard, Layout).
- **Interactive Dashboard**: Visual representations of user data (mocked for Phase 1).

### Setup Instructions (Frontend)
1.  **Navigate to the client directory**:
    ```bash
    cd client
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
4.  **Access App**: Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚧 Phase 2: Backend Integration

The backend is built using Node.js, Express, and MySQL. It handles user authentication and data management.

### Backend Setup Instructions (Critical)

1.  **Database Setup**:
    - Ensure you have MySQL installed and running.
    - Create the database and tables by running the provided SQL script:
      ```bash
      # Run this in your MySQL client or workbench
      source server/database.sql
      ```
    - OR manually execute the SQL commands in `server/database.sql`.

2.  **Environment Configuration**:
    - Open `server/.env`.
    - Update `DB_USER` and `DB_PASS` with your local MySQL credentials.
    - Ensure `DB_HOST` matches your configuration (default is `localhost`).

3.  **Run Backend Server**:
    ```bash
    cd server
    npm install
    npm run dev
    ```
    - The server will run on [http://localhost:5000](http://localhost:5000).

4.  **Integration Features**:
    - **User Authentication**: Login and Signup are fully integrated with the backend API.
    - **JWT Security**: Protected routes use JSON Web Tokens.
    - **Notifications**: Integrated toast notifications for success/error feedback.

---

**Project Structure**

```
fitness_tracker/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── layouts/        # Page layouts (Navbar)
│   │   ├── pages/          # Home, Login, Signup, Dashboard
│   │   ├── services/       # API integration (Axios)
│   │   └── ...
└── server/                 # Backend Node.js Application
    ├── config/             # DB Connection
    ├── controllers/        # Auth Logic
    ├── routes/             # API Endpoints
    └── database.sql        # Setup Script
```

## Authors
Developed for University Project - Senior Full-Stack Development Course.
