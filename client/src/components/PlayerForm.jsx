import React, { useState, useEffect } from "react";
import './PlayerForm.css';

const PlayerForm = ({ onAdd, onUpdate, editData, onCancel }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setRole(editData.role);
      setTeam(editData.team);
      setImageUrl(editData.imageUrl);
    } else {
      setName("");
      setRole("");
      setTeam("");
      setImageUrl("");
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const player = { name, role, team, imageUrl };
    if (editData) {
      onUpdate(player);
    } else {
      onAdd(player);
    }
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <h3>{editData ? "✏️ Edit Player" : "➕ Add Player"}</h3>

      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Team"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <div className="form-actions">
        <button type="submit" className="submit-btn">
          {editData ? "Update Player" : "Add Player"}
        </button>
        {editData && (
          <button type="button" className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default PlayerForm;
