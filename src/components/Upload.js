import React, { useState } from "react";

function Upload() {
  const [itemType, setItemType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [locationFound, setLocationFound] = useState("");
  const [collectionPlace, setCollectionPlace] = useState("Admin Office");

  // ✅ Define base API URL (reads from .env file)
  const API_BASE = process.env.REACT_APP_API_URL;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { itemType, quantity, locationFound, collectionPlace };

    try {
        const res = await fetch(`${API_BASE}/item/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.message);
      // Reset form
      setItemType("");
      setQuantity(1);
      setLocationFound("");
      setCollectionPlace("Admin Office");
    } catch (err) {
      console.error(err);
      alert("Failed to upload item");
    }
  };

  return (
    <div className="form-container" >
      <button
        className="back-btn"
        onClick={() => (window.location.href = "/")}
      >
        ← Back to Home
      </button>

      <h2>Upload Found Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item Type</label>
        <input
          type="text"
          placeholder="Item Type"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
          required
        />

        <label>Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <label>Location Found</label>
        <input
          type="text"
          placeholder="Location Found"
          value={locationFound}
          onChange={(e) => setLocationFound(e.target.value)}
          required
        />

        <label>Collection Place</label>
        <select
          value={collectionPlace}
          onChange={(e) => setCollectionPlace(e.target.value)}
          required
        >
          <option value="Admin Office">Admin Office</option>
          <option value="Academic Block">Academic Block</option>
          <option value="Library">Library</option>
          <option value="Transport Office">Transport Office</option>
          <option value="Security Room">Security Room</option>
        </select>

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
