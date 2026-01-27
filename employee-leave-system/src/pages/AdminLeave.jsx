import { useState } from "react";
import Navbar from "../Components/Navbar";

export default function AdminLeave() {
  const [leaves, setLeaves] = useState(
    JSON.parse(localStorage.getItem("leaves")) || []
  );

  const updateStatus = (id, status) => {
    const updatedLeaves = leaves.map((leave) =>
      leave.id === id ? { ...leave, status } : leave
    );

    setLeaves(updatedLeaves);
    localStorage.setItem("leaves", JSON.stringify(updatedLeaves));
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>Admin Leave Approvals</h2>

        {leaves.length === 0 ? (
          <p>No leave requests</p>
        ) : (
          leaves.map((leave) => (
            <div
              key={leave.id}
              style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <p><b>Reason:</b> {leave.reason}</p>
              <p><b>Status:</b> {leave.status}</p>

              <button onClick={() => updateStatus(leave.id, "Approved")}>
                Approve
              </button>

              <button
                onClick={() => updateStatus(leave.id, "Rejected")}
                style={{ marginLeft: "10px" }}
              >
                Reject
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}
