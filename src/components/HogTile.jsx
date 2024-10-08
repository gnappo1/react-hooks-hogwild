import React, { useState } from "react";

function HogTile({ hog }) {
    const [showDetails, setShowDetails] = useState(false)

    function handleClick() {
        setShowDetails(!showDetails);
    }

    return (
      <div id="hog-card" onClick={handleClick}>
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} />
        {showDetails && (
          <>
            <p>Specialty: {hog.specialty}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Weight: {hog.weight}lbs</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
          </>
        )}
      </div>
    );
}

export default HogTile;
