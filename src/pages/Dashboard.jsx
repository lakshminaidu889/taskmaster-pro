import React from "react";
import { useTasks } from "../context/TaskContext";

export default function Dashboard() {
  const { tasks } = useTasks();

  const completed = tasks.filter(t => t.status === "Completed").length;
  const pending = tasks.length - completed;

  return (
    <div>
      <h1 style={{ marginBottom: "40px", fontSize: "32px" }}>
        welcome to lakshmi's to do web app👋
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}
      >
        <Card
          title="todo"
          value={tasks.length}
          color="linear-gradient(135deg,#6366f1,#8b5cf6)"
        />
        <Card
          title="in progress"
          value={completed}
          color="linear-gradient(135deg,#10b981,#059669)"
        />
        <Card
          title="done"
          value={pending}
          color="linear-gradient(135deg,#f59e0b,#ef4444)"
        />
      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      style={{
        padding: "30px",
        borderRadius: "18px",
        color: "#fff",
        background: color,
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        transform: "translateY(0)",
        transition: "0.3s"
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-8px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <h3 style={{ opacity: 0.9 }}>{title}</h3>
      <h2 style={{ fontSize: "38px", marginTop: "10px" }}>{value}</h2>
    </div>
  );
}
