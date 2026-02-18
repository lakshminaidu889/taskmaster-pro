import React, { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar open={open} setOpen={setOpen} />

      <main
        style={{
          flex: 1,
          padding: "50px",
          maxWidth: "1200px",
          margin: "0 auto",
          transition: "0.3s"
        }}
      >
        {children}
      </main>
    </div>
  );
}
