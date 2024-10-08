
function HogFilter({ toggleCheckBox, checkedBox }) {
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
    </div>
  );
} 

export default HogFilter;