import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState("");
  const [policies, setPolicies] = useState([]);

  const addPolicy = (policy) => {
    setPolicies([...policies, policy]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login setRole={setRole} setUserName={setUserName} />}
        />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard userName={userName} policies={policies} />}
        />
        <Route
          path="/user-dashboard"
          element={
            <UserDashboard userName={userName} onAddPolicy={addPolicy} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
