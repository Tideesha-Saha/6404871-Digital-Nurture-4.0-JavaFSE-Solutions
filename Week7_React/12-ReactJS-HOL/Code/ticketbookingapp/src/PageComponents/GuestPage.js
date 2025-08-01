import { Link } from "react-router-dom";

function GuestPage() {
  return (
    <div>
      <div className="header">
        <h1>Guest Page</h1>
        <Link to="/login" style={{ marginRight: "15px" }}>
          <button>Login</button>
        </Link>
      </div>
      <p>Log in to book tickets.</p>
      <div className="flights">
        <h3 className="Flight-title">Available Flights:</h3>
        <ul>
          <li>
            {" "}
            <span className="location flight-info"> Chennai ➡ Delhi </span>{" "}
            <span className="time flight-info">10:00 AM</span>{" "}
            <span className="price flight-info">₹4500</span>{" "}
          </li>

          <li>
            {" "}
            <span className="location flight-info">
              Mumbai ➡ Kolkata{" "}
            </span>{" "}
            <span className="time flight-info">9:00 AM</span>{" "}
            <span className="price flight-info">₹3500</span>{" "}
          </li>

          <li>
            {" "}
            <span className="location flight-info">
              Bangalore ➡ Delhi{" "}
            </span>{" "}
            <span className="time flight-info">11:00 AM</span>{" "}
            <span className="price flight-info">₹5000</span>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GuestPage;
