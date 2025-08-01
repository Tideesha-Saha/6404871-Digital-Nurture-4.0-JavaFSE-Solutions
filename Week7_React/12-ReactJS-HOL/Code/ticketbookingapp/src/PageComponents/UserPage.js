import { Link } from "react-router-dom";

function UserPage() {
  const handleBookTicket = () => {
    alert("Ticket booked successfully!");
  };

  return (
    <div>
      <div className="header">
        <h1>User Page</h1>
        <Link to="/logout" style={{ marginRight: "15px" }}>
          <button>Logout</button>
        </Link>
      </div>
      <p>Welcome Back!</p>
      <div className="flights">
        <h3 className="Flight-title">Available Flights:</h3>
        <ul>
          <li>
            <span className="location flight-info"> Chennai ➡ Delhi </span>{" "}
            <span className="time flight-info">10:00 AM</span>{" "}
            <span className="price flight-info">₹4500</span>{" "}
            <button onClick={handleBookTicket} className="book-button">
              Book
            </button>
          </li>
          <li>
            <span className="location flight-info">Mumbai ➡ Kolkata</span>{" "}
            <span className="time flight-info">9:00 AM</span>{" "}
            <span className="price flight-info">₹3500</span>{" "}
            <button onClick={handleBookTicket} className="book-button">
              Book
            </button>
          </li>
          <li>
            <span className="location flight-info">
              Bangalore ➡ Delhi</span>{" "}
            <span className="time flight-info">11:00 AM</span>{" "}
            <span className="price flight-info">₹5000</span>{" "}
            <button onClick={handleBookTicket} className="book-button">
              Book
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserPage;
