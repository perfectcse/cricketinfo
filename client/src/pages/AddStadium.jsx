import React, { useState } from "react";
import axios from "axios";
import "./AddStadium.css"; // Make sure this file exists

const AddStadium = () => {
  const [form, setForm] = useState({
    name: "",
    country: "",
    capacity: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, country, capacity } = form;

    if (!name || !country || !capacity) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/stadiums", form);
      alert("✅ Stadium added successfully!");
      setForm({ name: "", country: "", capacity: "", imageUrl: "" });
    } catch (err) {
      console.error("❌ Error adding stadium:", err);
      alert("Failed to add stadium.");
    }
  };

  return (
    <div className="add-stadium-page">
      <h2>Add New Stadium</h2>
      <form className="stadium-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Stadium Name"
          required
        />
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <input
          type="number"
          name="capacity"
          value={form.capacity}
          onChange={handleChange}
          placeholder="Capacity"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="Image URL (optional)"
        />
        <button type="submit" className="submit-btn">Add Stadium</button>
      </form>
    </div>
  );
};

export default AddStadium;
