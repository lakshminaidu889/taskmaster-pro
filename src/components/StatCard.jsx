import { motion } from "framer-motion";

export default function StatCard({ title, value }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </motion.div>
  );
}
