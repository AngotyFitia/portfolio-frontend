import { motion } from "framer-motion";

export default function Heroi() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {["Web Development", "Responsive Design", "Performance"].map((title, i) => (
        <motion.div key={i} className="p-6 bg-gray-100 rounded-xl text-center" animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>Content related to {title.toLowerCase()}.</p>
        </motion.div>
      ))}
    </section>
  );
}
