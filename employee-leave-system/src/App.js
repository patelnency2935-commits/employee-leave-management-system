import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmployeeLogin from "./pages/EmployeeLogin";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import ApplyLeave from "./pages/ApplyLeave";
import ViewLeaveStatus from "./pages/ViewLeaveStatus";
import AdminLeave from "./pages/AdminLeave";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<EmployeeLogin />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* Employee Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="employee">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply-leave"
          element={
            <ProtectedRoute role="employee">
              <ApplyLeave />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leave-status"
          element={
            <ProtectedRoute role="employee">
              <ViewLeaveStatus />
            </ProtectedRoute>
          }
        />

        {/* Admin Protected Route */}
        <Route
          path="/admin-leaves"
          element={
            <ProtectedRoute role="admin">
              <AdminLeave />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
