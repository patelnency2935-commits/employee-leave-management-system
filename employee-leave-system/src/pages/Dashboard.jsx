import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";   // ✅ path check (components small c)

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {/* ✅ Navbar added here */}
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          background: "#f4f6f8",
        }}
      >
        <h2>Employee Dashboard</h2>

        <button
          onClick={() => navigate("/apply-leave")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Apply Leave
        </button>

        <br /><br />

        <button
          onClick={() => navigate("/leave-status")}
          style={{
            padding: "10px 20px",
            background: "#388e3c",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Leave Status
        </button>

        <br /><br />

        <button
          onClick={logout}
          style={{
            padding: "8px 18px",
            background: "crimson",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}
