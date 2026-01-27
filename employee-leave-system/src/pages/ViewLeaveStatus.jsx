import Navbar from "../Components/Navbar";

export default function ViewLeaveStatus() {
  const leaves = JSON.parse(localStorage.getItem("leaves")) || [];

  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>My Leave Status</h2>

        {leaves.length === 0 ? (
          <p>No leaves applied</p>
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
            </div>
          ))
        )}
      </div>
    </>
  );
}
