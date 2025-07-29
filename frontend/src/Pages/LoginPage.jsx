// src/Pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Replace with real authentication call (API or context)
    if (username.trim() && password.trim()) {
      localStorage.setItem("username", username);
      navigate("/dashboard");
    } else {
      alert("Please enter both username and password.");
    }
  };

  const handlePasswordReset = () => {
    // TODO: Replace with real navigation or open modal
    navigate("/reset");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-96 space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-2">Smart-Waste Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />

        {/* Password reset button */}
        <button
          type="button"
          onClick={handlePasswordReset}
          className="text-cyan-400 hover:underline text-sm -mt-2"
        >
          Forgot Password?
        </button>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-semibold transition"
        >
          Log In
        </button>

        <p className="text-center text-gray-300 text-sm">
          No account?{" "}
          <a className="text-cyan-400 hover:underline" href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
