import React, { useEffect, useState } from "react";
import api from "../api/axios";
//import { motion } from "framer-motion";
import "./Updates.css"; // Ensure this CSS file exists

const Updates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    api
      .get("/updates")
      .then((res) => setUpdates(res.data))
      .catch((err) => console.error("Error fetching updates:", err));
  }, []);

  return (
    <div className="page updates-page">
      <h2>📰 Latest Cricket Updates</h2>
      <div className="updates-container">
        {updates.map((update, index) => (
          <motion.div
            className="update-card"
            key={update.id || index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{update.title}</h3>
            <p className="category">{update.category}</p>
            <p className="time">{new Date(update.created_at).toLocaleString()}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
