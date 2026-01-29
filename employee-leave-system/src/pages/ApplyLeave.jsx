import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./ApplyLeave.css";

export default function ApplyLeave() {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("Casual");
  const [reason, setReason] = useState("");

  const applyLeave = () => {
    if (!from || !to || !reason) {
      alert("Please fill all fields");
      return;
    }

    const leaves = JSON.parse(localStorage.getItem("leaves")) || [];

    leaves.push({
      id: Date.now(),
      employee: "Employee",
      from: from,
      to: to,
      type: type,
      reason: reason,
      status: "Pending",
    });

    localStorage.setItem("leaves", JSON.stringify(leaves));
    navigate("/dashboard");
  };

  return (
    <>
      <Navbar />

      <div className="leave-container">
        <h2>Apply Leave</h2>

        <div className="form-group">
          <label>From Date</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>To Date</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Leave Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Casual">Casual</option>
            <option value="Sick">Sick</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        <div className="form-group">
          <label>Reason</label>
          <textarea
            rows="3"
            placeholder="Enter reason for leave"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>

        <button className="submit-btn" onClick={applyLeave}>
          Submit Leave
        </button>
      </div>
    </>
  );
}
