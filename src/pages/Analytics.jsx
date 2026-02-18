import React from "react";
import { useTasks } from "../context/TaskContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { motion } from "framer-motion";

export default function Analytics() {
  const { tasks } = useTasks();

  const completed = tasks.filter(t => t.status === "Completed").length;
  const pending = tasks.length - completed;

  const productivity = tasks.length
    ? Math.round((completed / tasks.length) * 100)
    : 0;

  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending }
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  const aiInsight = () => {
    if (productivity >= 80)
      return "🚀 Excellent productivity! You're dominating your goals.";
    if (productivity >= 50)
      return "⚡ Good progress! Try completing a few more tasks.";
    if (productivity > 0)
      return "📌 Keep pushing! Small wins lead to big results.";
    return "🔥 Start completing tasks to unlock productivity insights!";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: 30 }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 40 }}>
        📊 Productivity Analytics
      </h1>

      <div
        style={{
          display: "flex",
          gap: 50,
          flexWrap: "wrap",
          alignItems: "center"
        }}
      >
        {/* Pie Chart */}
        <div
          style={{
            width: 350,
            height: 350,
            background: "#0da6e7ec",
            padding: 20,
            borderRadius: 20,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={120}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Productivity Card */}
        <div
          style={{
            padding: 40,
            borderRadius: 20,
            background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
            color: "#ffffff",
            minWidth: 280,
            boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: 24 }}>Productivity Score</h2>

          <h1 style={{ fontSize: 60, margin: "20px 0" }}>
            {productivity}%
          </h1>

          <p style={{ opacity: 0.9 }}>{aiInsight()}</p>
        </div>
      </div>
    </motion.div>
  );
}
