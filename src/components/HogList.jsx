import React, { useState } from "react";
import HogTile from "./HogTile";
import HogFilter from "./HogFilter";

function HogList({ hogs }) {
  const [checkedBox, setCheckedBox] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const toggleCheckBox = () => setCheckedBox(!checkedBox);

  const handleSortBy = (e) => {
    setSortBy(e.target.value)
  };

  const hogsToUse = checkedBox ? hogs.filter((hog) => hog.greased) : hogs;
  const sortedHogs = sortBy ? hogsToUse.sort((hog1, hog2) => {
    if (sortBy === "name") {
        return hog2.name.toLowerCase().localeCompare(hog1.name.toLowerCase());
    } else {
        return hog2.weight - hog1.weight
    }
  }) : hogsToUse;
  const hogData = sortedHogs.map((hog) => <HogTile key={hog.name} hog={hog} />);

  return (
    <>
      <HogFilter checkedBox={checkedBox} toggleCheckBox={toggleCheckBox} sortBy={sortBy} handleSortBy={handleSortBy} />
      <div id="hog-list">{hogData}</div>
    </>
  );
}

export default HogList;
