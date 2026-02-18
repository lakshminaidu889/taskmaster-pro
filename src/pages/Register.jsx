import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
    navigate("/");
  };

  return (
    <div className="center-container">
      <form onSubmit={handleSubmit} className="card">
        <h2>Register</h2>
        <input placeholder="Name" onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
        <p>Already have account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
}
