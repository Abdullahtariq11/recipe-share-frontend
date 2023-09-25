// Body.jsx
import React from "react";
import "./Body.css"; // Import the CSS file

function Body() {
  return (
    <div className="background-container">
        <div className="upper-body"> 
            <h2>Key Features</h2>
            <ul>
                <li>Discover a vast collection of recipes</li>
                <li>Connect with a community of food enthusiasts</li>
                <li>Share your own recipes and culinary creations</li>
            </ul>
        </div>
      <div className="body-container">
        <p className="body-text">
          Come join us and be a part of{" "}
          <span className="animated-text">Recipe World family</span>
        </p>
      </div>
    </div>
  );
}

export default Body;
