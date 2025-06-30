// File: src/components/StadiumCard.jsx
import React from "react";
import "./StadiumCards.css"; // ✅ Make sure this file exists

const StadiumCard = ({ stadium, onEdit, onDelete }) => {
  const defaultImg = "https://via.placeholder.com/300x180?text=No+Image";

  return (
    <div className="stadium-card">
      <img
        src={stadium.imageUrl || defaultImg}
        alt={stadium.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultImg;
        }}
      />

      <div className="stadium-info">
        <h3>{stadium.name}</h3>
        <p><strong>Country:</strong> {stadium.country}</p>
        <p><strong>Capacity:</strong> {stadium.capacity}</p>
      </div>

      <div className="card-actions">
        <button className="edit-btn" onClick={() => onEdit(stadium)}>✏️ Edit</button>
        <button className="delete-btn" onClick={() => onDelete(stadium.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default StadiumCard;
