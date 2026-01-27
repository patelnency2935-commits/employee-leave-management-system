import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EmployeeLogin() {
  const navigate = useNavigate();
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy login (internship level)
    if (empId && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "employee");
      navigate("/dashboard");
    } else {
      alert("Please enter Employee ID and Password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e3f2fd",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          width: "300px",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Employee Login</h2>

        <input
          placeholder="Employee ID"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
