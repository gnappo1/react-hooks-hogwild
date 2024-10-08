import React, { useState } from "react";
import HogTile from "./HogTile";
import HogFilter from "./HogFilter";

function HogList({ hogs }) {
    const [checkedBox, setCheckedBox] = useState(false);

    const toggleCheckBox = () => setCheckedBox(!checkedBox);

    const hogsToUse = checkedBox ? hogs.filter(hog => hog.greased) : hogs;

    const hogData = hogsToUse.map((hog) => (
      <HogTile key={hog.name} hog={hog} />
    ));
    
    return (
      <>
        <HogFilter checkedBox={checkedBox} toggleCheckBox={toggleCheckBox} />
        <div id="hog-list">{hogData}</div>
      </>
    );
};

export default HogList;
