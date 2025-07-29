// src/Pages/RegisterPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <form
        onSubmit={handleRegister}
        className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-96 space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-2">Register</h2>

        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-semibold transition"
        >
          Register
        </button>

        <p className="text-center text-gray-300 text-sm">
          Already have an account?{" "}
          <a className="text-cyan-400 hover:underline" href="/login">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
