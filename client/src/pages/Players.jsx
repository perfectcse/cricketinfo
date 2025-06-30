import React, { useEffect, useState } from "react";
import axios from "axios";
import PlayerCard from "../components/PlayerCard";
import PlayerForm from "../components/PlayerForm";
import './Players.css';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [editPlayer, setEditPlayer] = useState(null);

  const fetchPlayers = () => {
    axios.get("http://localhost:5000/api/players")
      .then((res) => setPlayers(res.data))
      .catch((err) => console.error("Error fetching players:", err));
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleAddPlayer = (newPlayer) => {
    axios.post("http://localhost:5000/api/players", newPlayer)
      .then(() => {
        fetchPlayers();
      })
      .catch((err) => console.error("Error adding player:", err));
  };

  const handleEditPlayer = (updatedPlayer) => {
    axios.put(`http://localhost:5000/api/players/${editPlayer.id}`, updatedPlayer)
      .then(() => {
        setEditPlayer(null);
        fetchPlayers();
      })
      .catch((err) => console.error("Error updating player:", err));
  };

  const handleDeletePlayer = (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      axios.delete(`http://localhost:5000/api/players/${id}`)
        .then(() => fetchPlayers())
        .catch((err) => console.error("Error deleting player:", err));
    }
  };

  return (
    <div className="players-page">
      <h2 className="players-title">🏏 Player Management</h2>

      <PlayerForm
        onAdd={handleAddPlayer}
        onUpdate={handleEditPlayer}
        editData={editPlayer}
        onCancel={() => setEditPlayer(null)}
      />

      <div className="players-grid">
        {players.length === 0 ? (
          <p>No players found.</p>
        ) : (
          players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onEdit={(p) => setEditPlayer(p)}
              onDelete={handleDeletePlayer}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Players;
