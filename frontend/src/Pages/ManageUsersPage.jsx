// src/Pages/ManageUsersPage.jsx
import Sidebar from "../Components/Sidebar";

const mockUsers = [
  { id: 1, username: "Bob", role: "Admin", status: "Active", passwordResetDaysAgo: 0 },
  { id: 2, username: "Alice", role: "User", status: "Inactive", passwordResetDaysAgo: 1 },
  { id: 3, username: "Charlie", role: "Moderator", status: "Active", passwordResetDaysAgo: 5 },
];

export default function ManageUsersPage() {
  // TODO: Load users from backend or state
  // TODO: Add handlers for add, edit, deactivate user

  // Format password reset time nicely
  const formatPasswordReset = (days) => {
    if (days === 0) return "Just now";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
  };

  const handleSendResetEmail = (userId) => {
    // TODO: Implement email sending logic here
    alert(`Password reset email sent to user ID: ${userId}`);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-8">
        <h2 className="text-4xl font-extrabold text-cyan-400 mb-6">Manage Users</h2>

        <button
          className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl font-semibold mb-6 transition"
        // TODO: onClick={handleAddUser}
        >
          Add New User
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-xl overflow-hidden">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Username</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Password Reset</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4">{user.username}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">{user.status}</td>
                  <td className="py-2 px-4">{formatPasswordReset(user.passwordResetDaysAgo)}</td>
                  <td className="py-2 px-4 space-x-2">
                    <button
                      className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded"
                    // TODO: onClick={() => handleEdit(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded"
                    // TODO: onClick={() => handleDeactivate(user.id)}
                    >
                      Deactivate
                    </button>
                    <button
                      className="bg-green-600 hover:bg-green-700 p-2 rounded"
                      onClick={() => handleSendResetEmail(user.id)}
                    >
                      Send Password Reset Email
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
