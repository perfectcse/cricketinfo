import React from "react";
import "./PlayerCard.css";

// ✅ Import local images at the top
import viratImg from "../assets/virat-kohli.jpeg";
import dhoniImg from "../assets/ms-dhoni.jpg";
import rohitImg from "../assets/rohit-sharma.jpeg";
import bumrahImg from "../assets/bumrah.jpg";

const PlayerCard = ({ player, onEdit, onDelete }) => {
  const defaultImg = "https://via.placeholder.com/150?text=No+Image";

  // ✅ Use static image map
  const imageMap = {
    "Virat Kohli": viratImg,
    "MS Dhoni": dhoniImg,
    "Rohit Sharma": rohitImg,
    "Jasprit Bumrah": bumrahImg,
  };

  const playerImg = imageMap[player.name] || player.imageUrl || defaultImg;

  return (
    <div className="player-card">
      <img
        src={playerImg}
        alt={player.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultImg;
        }}
      />
      <h3>{player.name}</h3>
      <p><strong>Role:</strong> {player.role}</p>
      <p><strong>Team:</strong> {player.team}</p>

      <div className="card-actions">
        <button className="edit-btn" onClick={() => onEdit(player)}>✏️ Edit</button>
        <button className="delete-btn" onClick={() => onDelete(player.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
};

export default PlayerCard;
