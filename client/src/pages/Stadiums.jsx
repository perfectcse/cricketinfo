// File: src/pages/Stadiums.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import StadiumCard from "../components/StadiumCard";
import "./Stadiums.css"; // Make sure this file exists

const Stadiums = () => {
  const [stadiums, setStadiums] = useState([]);
 // const [editingStadium, setEditingStadium] = useState(null);

  // Fetch stadiums from backend
  const fetchStadiums = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/stadiums");
      setStadiums(res.data);
    } catch (error) {
      console.error("Error fetching stadiums:", error);
    }
  };

  // Load on mount
  useEffect(() => {
    fetchStadiums();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/stadiums/${id}`);
      fetchStadiums(); // Refresh list
    } catch (error) {
      console.error("Error deleting stadium:", error);
    }
  };

  // Edit handler (for future use)
  const handleEdit = (stadium) => {
    //setEditingStadium(stadium);
    alert(`Edit feature coming soon for: ${stadium.name}`);
  };

  return (
    <div className="stadiums-page">
      <h2>🏟️ All Cricket Stadiums</h2>
      <div className="stadiums-grid">
        {stadiums.length === 0 ? (
          <p>No stadiums found.</p>
        ) : (
          stadiums.map((stadium) => (
            <StadiumCard
              key={stadium.id}
              stadium={stadium}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Stadiums;
