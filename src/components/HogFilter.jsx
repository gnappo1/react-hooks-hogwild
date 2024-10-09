
function HogFilter({ toggleCheckBox, checkedBox, sortBy, handleSortBy }) {
  return (
    <div>
      <input
        type="checkbox"
        id="greased"
        name="greased"
        onChange={toggleCheckBox}
        checked={checkedBox}
      />
      <label htmlFor="greased">Greased</label>
      <select htmlFor="sort-by" onChange={handleSortBy} value={sortBy}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
} 

export default HogFilter;