import React from "react";
import bannerImg from "../assets/vv-banner.jpeg";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Unlock the future of IT
            </h1>
            <p style={{ fontSize: "1.25rem", color: "#6b7280", marginBottom: "2rem" }}>
              Learn to code and build your career with our hands-on programming
              courses.
            </p>
            <button
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                padding: "0.75rem 2rem",
                fontSize: "1.125rem",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img
              src={bannerImg}
              alt="Versatile Variable Banner"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: center;
          }

          /* On smaller screens stack vertically */
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr;
            }
            .hero-image {
              order: -1; /* ✅ Moves image above content */
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
