import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GuestPage from "./PageComponents/GuestPage";
import UserPage from "./PageComponents/UserPage";
import LoginPage from "./PageComponents/LoginPage";
import LogoutPage from "./PageComponents/LogoutPage";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<GuestPage />} />

        <Route
          path="/login"
          element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/logout"
          element={<LogoutPage onLogout={() => setIsLoggedIn(false)} />}
        />

        <Route
          path="/user"
          element={isLoggedIn ? <UserPage /> : <Navigate to="/login" replace />}
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
