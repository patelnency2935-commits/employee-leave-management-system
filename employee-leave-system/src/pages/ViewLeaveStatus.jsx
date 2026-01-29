import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "../App.css";

export default function ViewLeaveStatus() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const storedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaves(storedLeaves);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>My Leave Status</h2>

        {leaves.length === 0 ? (
          <p>No leave requests found</p>
        ) : (
          leaves.map((leave) => (
            <div className="leave-card" key={leave.id}>
              <p><b>Leave Type:</b> {leave.leaveType}</p>
              <p><b>From:</b> {leave.fromDate}</p>
              <p><b>To:</b> {leave.toDate}</p>
              <p><b>Reason:</b> {leave.reason}</p>

              <span
                className={`badge ${
                  leave.status === "Pending"
                    ? "pending"
                    : leave.status === "Approved"
                    ? "approved"
                    : "rejected"
                }`}
              >
                {leave.status}
              </span>
            </div>
          ))
        )}
      </div>
    </>
  );
}
