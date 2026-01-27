import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      style={{
        height: "60px",
        background: "#1976d2",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <h3>Leave Management System</h3>

      <div>
        {role === "employee" && (
          <>
            <button onClick={() => navigate("/dashboard")} style={btnStyle}>
              Dashboard
            </button>
            <button onClick={() => navigate("/apply-leave")} style={btnStyle}>
              Apply Leave
            </button>
            <button onClick={() => navigate("/leave-status")} style={btnStyle}>
              Leave Status
            </button>
          </>
        )}

        {role === "admin" && (
          <button onClick={() => navigate("/admin-leaves")} style={btnStyle}>
            Approvals
          </button>
        )}

        <button onClick={logout} style={btnStyle}>
          Logout
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  marginLeft: "10px",
  padding: "6px 12px",
  background: "white",
  color: "#1976d2",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
