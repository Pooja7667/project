import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setRole, setUserName }) => {
  const [role, setLocalRole] = useState("user");
  const [userName, setLocalUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    setRole(role);
    setUserName(userName);
    navigate(`/${role}-dashboard`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-2">User Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setLocalUserName(e.target.value)}
            className="border px-2 py-1 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Role</label>
          <select
            value={role}
            onChange={(e) => setLocalRole(e.target.value)}
            className="border px-2 py-1 w-full"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 w-full rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
