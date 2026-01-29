import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import "./AdminLeave.css";

export default function AdminLeave() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaves(data);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id ? { ...leave, status: newStatus } : leave
    );

    setLeaves(updatedLeaves);
    localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
  };

  return (
    <>
      <Navbar />

      <div className="admin-container">
        <h2>Admin – Leave Requests</h2>

        {leaves.length === 0 ? (
          <p>No leave requests found</p>
        ) : (
          leaves.map((leave) => (
            <div className="leave-card" key={leave.id}>
              <div className="leave-info">
                <p><strong>Employee:</strong> {leave.employee}</p>
                <p><strong>From:</strong> {leave.from}</p>
                <p><strong>To:</strong> {leave.to}</p>
                <p><strong>Type:</strong> {leave.type}</p>
                <p><strong>Reason:</strong> {leave.reason}</p>
              </div>

              <div className="leave-actions">
                <span className={`status ${leave.status.toLowerCase()}`}>
                  {leave.status}
                </span>

                {leave.status === "Pending" && (
                  <>
                    <button
                      className="approve"
                      onClick={() => updateStatus(leave.id, "Approved")}
                    >
                      Approve
                    </button>

                    <button
                      className="reject"
                      onClick={() => updateStatus(leave.id, "Rejected")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
