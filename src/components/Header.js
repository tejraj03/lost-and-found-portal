import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <header className="hero-section">
      {/* Background Overlay */}
      <div className="overlay"></div>

      {/* Main Content */}
      <div className="hero-content">
        <h1>University Lost & Found Portal</h1>
        <p>
          Found something on campus? Upload it here. Lost something? Search and reunite
          with your belongings easily.
        </p>

        <div className="hero-buttons">
          <Link to="/upload">
            <button className="btn btn-primary">Upload Found Item</button>
          </Link>
          <Link to="/search">
            <button className="btn btn-secondary">Search Lost Item</button>
          </Link>
        </div>
      </div>

      {/* 👇 Contact Icon (make sure this is inside header but outside hero-content) */}
      <div className="contact-icon" onClick={openContact}>
        📞
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="modal-backdrop" onClick={closeContact}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeContact}>×</button>
            <h2>Contact Us</h2>
            <p>Email: support@unilostfound.edu</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Office Hours: Mon–Fri, 9 am–5 pm</p>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
