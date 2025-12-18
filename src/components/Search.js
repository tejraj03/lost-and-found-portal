import React, { useState } from "react";
import emailjs from "emailjs-com"; // ✅ import EmailJS
//import emailjs from "@emailjs/browser";


function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showContact, setShowContact] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    section: "",
    year: "",
    message: "",
  });

  const API_BASE = process.env.REACT_APP_API_URL;

  const handleSearch = async () => {
    try {
      const res = await fetch(`${API_BASE}/item/`);
      const data = await res.json();

      const filtered = data.filter((item) =>
        item.itemType.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    } catch (err) {
      alert("Search failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/item/delete/${id}`, { method: "DELETE" });
      alert("Item marked as collected!");
      if (!res.ok) throw new Error("Delete failed");
      setResults(results.filter((item) => item.itemId !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete item");
    }
  };

  const handleContactClick = (item) => {
    setSelectedItem(item);
    setShowContact(true);
  };

  const handleFormChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  // ✅ Send message via EmailJS
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      item: selectedItem?.itemType,
      name: contactForm.name,
      email: contactForm.email,
      phone: contactForm.phone,
      section: contactForm.section,
      year: contactForm.year,
      message: contactForm.message,
      to_email: "ap3220@srmist.edu.in", // <-- your email
    };

    emailjs
      .send(
        "service_yh8bkl2", // ⚙️ Your EmailJS service ID
        "template_yjflw5k", // ⚙️ Your EmailJS template ID
        templateParams,
        "Rj8z5rdqZOqxSjL71" // ⚙️ Your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setShowContact(false);
          setContactForm({
            name: "",
            email: "",
            phone: "",
            section: "",
            year: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="form-container">
      <button className="back-btn" onClick={() => (window.location.href = "/")}>
        ← Back to Home
      </button>

      <h2>Search Items</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search Item Type"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <div className="results">
        {results.map((item) => (
          <div className="result-item" key={item.itemId}>
            <div>
              <strong>{item.itemType}</strong> - Qty: {item.quantity} <br />
              Found at: {item.locationFound} <br />
              Collect at: {item.collectionPlace} <br />
              Documentation Required{" "}
              <a
                href="/Lost&found.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#151515ff", textDecoration: "none" }}
              >
                <i>
                  <b> ↗</b>
                </i>
              </a>
            </div>

            <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
              <button onClick={() => handleDelete(item.itemId)}>
                Mark as Collected
              </button>

              <button
                onClick={() => handleContactClick(item)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Contact Form Modal */}
      {showContact && (
        <div className="modal-backdrop" onClick={() => setShowContact(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContact(false)}>
              ×
            </button>
            <h2>Contact About: {selectedItem?.itemType}</h2>
            <form onSubmit={handleFormSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleFormChange}
                required
              />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleFormChange}
                required
              />

              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={contactForm.phone}
                onChange={handleFormChange}
                required
              />

              <label>Section / Class:</label>
              <input
                type="text"
                name="section"
                value={contactForm.section}
                onChange={handleFormChange}
              />

              <label>Year / Semester:</label>
              <input
                type="text"
                name="year"
                value={contactForm.year}
                onChange={handleFormChange}
                required
              />

              <label>Message:</label>
              <textarea
                name="message"
                rows="4"
                value={contactForm.message}
                onChange={handleFormChange}
                required
              ></textarea>

              <button
                type="submit"
                style={{
                  backgroundColor: "#135172",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  marginTop: "15px",
                  width: "100%",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
