import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header style={styles.navbar}>
      <h2>TaskFlow</h2>
      <button onClick={handleLogout} style={styles.logout}>Logout</button>
    </header>
  );
}

const styles = {
  navbar: {
    height: 60,
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  logout: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "6px 12px",
  },
};
