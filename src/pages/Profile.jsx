import React, { useState, useEffect } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("profile"));
    if (saved) {
      setName(saved.name);
      setEmail(saved.email);
    }
  }, []);

  const saveProfile = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify({ name, email })
    );
    alert("Profile Saved Successfully ✅");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>My Profile</h2>

        <input
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button style={styles.button} onClick={saveProfile}>
          Save Profile
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px"
  },
  card: {
    width: "400px",
    padding: "30px",
    borderRadius: "15px",
    background: "#c412af",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#0713f9cf",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
