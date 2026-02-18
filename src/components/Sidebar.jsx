import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  return (
    <aside
      style={{
        width: open ? "250px" : "80px",
        backdropFilter: "blur(12px)",
        background: "rgba(17, 24, 39, 0.85)",
        color: "#fff",
        transition: "0.3s",
        paddingTop: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "22px",
          cursor: "pointer"
        }}
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      <NavLink to="/dashboard" style={linkStyle}>
        📊 {open && "Dashboard"}
      </NavLink>

      <NavLink to="/tasks" style={linkStyle}>
        ✅ {open && "Tasks"}
      </NavLink>

      <NavLink to="/analytics" style={linkStyle}>
        📈 {open && "Analytics"}
      </NavLink>

      <NavLink to="/profile" style={linkStyle}>
        👤 {open && "Profile"}
      </NavLink>
    </aside>
  );
}

const linkStyle = ({ isActive }) => ({
  display: "block",
  padding: "14px 25px",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "12px",
  margin: "10px",
  background: isActive
    ? "linear-gradient(90deg, #6366f1, #8b5cf6)"
    : "transparent",
  transition: "0.3s"
});
