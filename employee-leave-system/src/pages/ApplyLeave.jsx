import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function ApplyLeave() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");

  const navigate = useNavigate();

  const submitLeave = () => {
    if (!fromDate || !toDate || !reason) {
      alert("Please fill all fields");
      return;
    }

    const leaves = JSON.parse(localStorage.getItem("leaves")) || [];

    leaves.push({
      id: Date.now(),
      fromDate,
      toDate,
      reason,
      status: "Pending",
    });

    localStorage.setItem("leaves", JSON.stringify(leaves));
    navigate("/leave-status");
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>Apply Leave</h2>

        <label>From Date</label>
        <br />
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />

        <br /><br />

        <label>To Date</label>
        <br />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />

        <br /><br />

        <label>Reason</label>
        <br />
        <input
          type="text"
          placeholder="Enter reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <br /><br />

        <button onClick={submitLeave}>Submit Leave</button>
      </div>
    </>
  );
}
