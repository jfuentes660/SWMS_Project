
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordReset() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("username", username); // Simulate registration
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <form onSubmit={handleForgotPassword} className="bg-gray-900 p-6 rounded-lg w-80">
        <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-2">Password Reset</h2>
        <input
          className="w-full p-2 mb-4 rounded bg-gray-800"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="w-full bg-cyan-500 hover:bg-cyan-600 p-2 rounded" type="submit">
          Send Email Reset
        </button>
        <p className="text-sm mt-4 text-center">
          Back to Login <a className="text-cyan-400" href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}