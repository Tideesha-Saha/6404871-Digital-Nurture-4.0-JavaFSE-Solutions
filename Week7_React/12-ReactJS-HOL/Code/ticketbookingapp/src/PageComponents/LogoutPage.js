import { useNavigate } from "react-router-dom";

function LogoutPage({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="Modal">
      <div className="image">
        <img src="https://static.vecteezy.com/system/resources/previews/005/605/287/large_2x/men-working-from-home-to-stop-the-spread-of-coronavirus-flat-style-cartoon-illustration-free-vector.jpg" />
      </div>
      <div className="text">
        <h1>Logout Page</h1>
        <p>You're about to logout.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default LogoutPage;
