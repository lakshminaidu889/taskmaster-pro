import React, { useState } from "react";

function FloatingButtons() {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      {/* Floating Circles */}
      <div style={containerStyle}>
        <div
          style={circleStyle}
          onClick={() => {
            setShowContact(!showContact);
            setShowAbout(false);
          }}
        >
          📞
        </div>

        <div
          style={circleStyle}
          onClick={() => {
            setShowAbout(!showAbout);
            setShowContact(false);
          }}
        >
          ℹ️
        </div>
      </div>

      {/* Contact Popup */}
      {showContact && (
        <div style={popupStyle}>
          <h3>Contact Us</h3>
          <p>Email: support@todopro.com</p>
          <p>Phone: +91 98765 43210</p>
          <button onClick={() => setShowContact(false)}>Close</button>
        </div>
      )}

      {/* About Popup */}
      {showAbout && (
        <div style={popupStyle}>
          <h3>About ToDo Pro</h3>
          <p>
            This is a professional task management app built with React.
            Manage tasks, analytics and productivity like a pro 🚀
          </p>
          <button onClick={() => setShowAbout(false)}>Close</button>
        </div>
      )}
    </>
  );
}

const containerStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "flex",
  gap: "15px",
  zIndex: 1000,
};

const circleStyle = {
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "22px",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  transition: "0.3s",
};

const popupStyle = {
  position: "fixed",
  bottom: "90px",
  right: "20px",
  width: "280px",
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  zIndex: 1000,
};

export default FloatingButtons;
