import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios"; // API call

export default function ProfileSettingsPage() {
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);

  // ✅ Initialize with mock user data
  const [user, setUser] = useState({
    fullName: "Jane Doe",
    contactEmail: "jane.doe@example.com",
    phone: "+1 555-123-4567",
    language: "English",
    notifications: true,
  });
  const [password, setPassword] = useState("");

  /*
  // useEffect & API
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const res = await axios.get("/api/user/profile");
        const data = res.data;
        setUser({
          fullName: data.fullName || "",
          contactEmail: data.email || "",
          phone: data.phone || "",
          language: data.language || "English",
          notifications: data.notifications ?? true,
        });
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        alert("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    fetchUserProfile();
  }, []);
  */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      // API call
      /*
      await axios.put("/api/user/profile", {
        fullName: user.fullName,
        email: user.contactEmail,
        phone: user.phone,
        language: user.language,
        notifications: user.notifications,
        ...(password ? { password } : {}),
      });
      */
      console.log("Mock save:", {
        fullName: user.fullName,
        email: user.contactEmail,
        phone: user.phone,
        language: user.language,
        notifications: user.notifications,
        ...(password ? { password } : {}),
      });
      alert("Mock: Profile updated successfully!");
      setPassword("");
    } catch (err) {
      console.error("Failed to save profile:", err);
      alert("Failed to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-xl text-white min-h-screen">
      <button
        onClick={() => navigate("/dashboard")}
        className="mb-6 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded font-semibold transition"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-5xl font-extrabold mb-8 text-cyan-400">Profile Settings</h2>

      {/* Window Display Settings */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 border-b border-cyan-600 pb-2">
          Window Display
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <label htmlFor="theme" className="w-40 font-medium">
            Change Display Theme:
          </label>
          <select
            id="theme"
            className="bg-gray-800 p-2 rounded flex-grow max-w-xs"
            defaultValue="Dark"
          >
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>
      </section>

      {/* Data Display Settings */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 border-b border-cyan-600 pb-2">
          Data Display
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <label htmlFor="dateFormat" className="w-40 font-medium">
            Date Format:
          </label>
          <select
            id="dateFormat"
            className="bg-gray-800 p-2 rounded flex-grow max-w-xs"
            defaultValue="MM/DD/YYYY"
          >
            <option>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <label htmlFor="itemsPerPage" className="w-40 font-medium">
            Items per Page:
          </label>
          <input
            id="itemsPerPage"
            type="number"
            min="1"
            max="100"
            defaultValue={10}
            className="bg-gray-800 p-2 rounded flex-grow max-w-xs"
          />
        </div>
      </section>

      {/* User Profile Settings */}
      <section>
        <h3 className="text-2xl font-semibold mb-4 border-b border-cyan-600 pb-2">
          User Profile Settings
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          <div>
            <label htmlFor="fullName" className="block mb-1 font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full bg-gray-800 p-3 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="contactEmail" className="block mb-1 font-medium">
              Email Address
            </label>
            <input
              id="contactEmail"
              type="email"
              value={user.contactEmail}
              onChange={(e) => setUser({ ...user, contactEmail: e.target.value })}
              className="w-full bg-gray-800 p-3 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full bg-gray-800 p-3 rounded"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Change Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 p-3 rounded"
            />
          </div>

          <div>
            <label htmlFor="language" className="block mb-1 font-medium">
              Preferred Language
            </label>
            <select
              id="language"
              value={user.language}
              onChange={(e) => setUser({ ...user, language: e.target.value })}
              className="w-full bg-gray-800 p-3 rounded"
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <input
              id="notifications"
              type="checkbox"
              className="w-5 h-5 rounded border-gray-600 bg-gray-700"
              checked={user.notifications}
              onChange={(e) => setUser({ ...user, notifications: e.target.checked })}
            />
            <label htmlFor="notifications" className="font-medium">
              Enable Email Notifications
            </label>
          </div>

          <button
            type="submit"
            disabled={saving}
            className={`p-3 rounded font-semibold w-full ${saving ? "bg-gray-600 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-600"
              }`}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </section>
    </div>
  );
}
